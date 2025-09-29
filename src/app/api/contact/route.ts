import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, service } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter - you'll need to configure this with your email service
    // For Gmail, you'll need to use App Passwords: https://support.google.com/accounts/answer/185833
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Service name mapping
    const serviceNames = {
      general: 'General Inquiry',
      business: 'Business Consulting',
      'real-estate': 'Real Estate',
      events: 'Event Planning',
    };

    const serviceName = serviceNames[service as keyof typeof serviceNames] || 'General Inquiry';

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'abayosincere11@gmail.com',
    //   to: 'trustsolutions2025@gmail.com',
      subject: `New Contact Form Submission - ${serviceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A237E; border-bottom: 2px solid #FFA726; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1A237E; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Service Interest:</strong> ${serviceName}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #FFA726;">
            <h3 style="color: #1A237E; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e3f2fd; border-radius: 5px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This message was sent from the Trust Solutions contact form.
              Please respond to: <a href="mailto:${email}">${email}</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}