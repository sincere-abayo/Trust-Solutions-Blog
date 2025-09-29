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

    // Send email to company
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the sender
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send to the person who submitted the form
      subject: `Thank you for contacting Trust Solutions - ${serviceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1A237E 0%, #FFA726 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Trust Solutions</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Whatever your challenge, we provide the solution</p>
          </div>
          
          <div style="background-color: #fff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #1A237E; margin-top: 0;">Thank You for Your Message!</h2>
            
            <p style="color: #333; line-height: 1.6; font-size: 16px;">
              Dear ${name},
            </p>
            
            <p style="color: #333; line-height: 1.6; font-size: 16px;">
              Thank you for reaching out to Trust Solutions regarding <strong>${serviceName}</strong>. 
              We have successfully received your message and appreciate your interest in our services.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #FFA726;">
              <h3 style="color: #1A237E; margin: 0 0 15px 0; font-size: 18px;">What happens next?</h3>
              <ul style="color: #555; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li>Our team will review your inquiry within 24 hours</li>
                <li>A dedicated consultant will be assigned to your case</li>
                <li>We'll contact you to discuss your needs in detail</li>
                <li>You'll receive a customized solution proposal</li>
              </ul>
            </div>
            
            <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #1A237E; margin: 0 0 15px 0; font-size: 18px;">Your Message Summary</h3>
              <p style="color: #555; margin: 5px 0;"><strong>Service:</strong> ${serviceName}</p>
              <p style="color: #555; margin: 5px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
              <div style="margin-top: 15px;">
                <p style="color: #555; margin: 0; font-weight: bold;">Your Message:</p>
                <p style="color: #666; margin: 10px 0; padding: 15px; background: white; border-radius: 5px; font-style: italic;">
                  "${message}"
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #333; margin: 0; font-size: 16px;">
                Need immediate assistance?
              </p>
              <p style="color: #1A237E; margin: 10px 0; font-size: 18px; font-weight: bold;">
                📞 0722490045 | ✉️ Trustsolutions2025@gmail.com
              </p>
            </div>
            
            <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; text-align: center;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This is an automated confirmation email. Please do not reply to this message.
              </p>
              <p style="color: #666; font-size: 14px; margin: 10px 0 0 0;">
                Trust Solutions Company | KG 16 Ave, Kigali City, Rwanda
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send confirmation email
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
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