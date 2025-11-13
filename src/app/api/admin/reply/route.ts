import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { cookies } from 'next/headers';
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import ReplyTemplate from '../../../../emails/ReplyTemplate';

export async function POST(request: Request) {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const session = cookieStore.get('admin-session');
    
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const { messageId, subject, replyText, sentBy } = await request.json();
    
    // Validate required fields
    if (!messageId || !subject || !replyText || !sentBy) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Get the original message
    const originalMessage = await prisma.contactMessage.findUnique({
      where: { id: messageId }
    });
    
    if (!originalMessage) {
      return NextResponse.json(
        { error: 'Message not found' },
        { status: 404 }
      );
    }
    
    // Save reply to database
    const reply = await prisma.messageReply.create({
      data: {
        messageId,
        subject,
        replyText,
        sentBy
      }
    });
    
    // Update message status to replied
    await prisma.contactMessage.update({
      where: { id: messageId },
      data: { status: 'replied' }
    });
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    // Render email template
    const emailHtml = await render(
      ReplyTemplate({
        customerName: originalMessage.name,
        customerMessage: originalMessage.message,
        replyText,
        service: originalMessage.service,
      })
    );
    
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: originalMessage.email,
      subject: subject,
      html: emailHtml,
    });
    
    return NextResponse.json({ 
      success: true, 
      reply 
    });
  } catch (error) {
    console.error('Reply error:', error);
    return NextResponse.json(
      { error: 'Failed to send reply' },
      { status: 500 }
    );
  }
}

// Get reply history for a message
export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin-session');
    
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const { searchParams } = new URL(request.url);
    const messageId = searchParams.get('messageId');
    
    if (!messageId) {
      return NextResponse.json(
        { error: 'Message ID required' },
        { status: 400 }
      );
    }
    
    const replies = await prisma.messageReply.findMany({
      where: { messageId },
      orderBy: { sentAt: 'desc' }
    });
    
    return NextResponse.json({ replies });
  } catch (error) {
    console.error('Get replies error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch replies' },
      { status: 500 }
    );
  }
}
