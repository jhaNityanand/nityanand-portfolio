import { NextRequest, NextResponse } from "next/server";

// Email configuration - Update these with your email service credentials
const ADMIN_EMAIL = process.env.MAIL_FROM_ADDRESS || "in.jha357@gmail.com";
const SMTP_HOST = process.env.MAIL_HOST;
const SMTP_PORT = process.env.MAIL_PORT;
const SMTP_USER = process.env.MAIL_USERNAME;
const SMTP_PASS = process.env.MAIL_PASSWORD;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the contact form submission (for development)
    console.log("Contact form submission:", { name, email, message });

    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: SMTP_USER,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: SMTP_USER,
      to: email,
      subject: "Thank you for contacting Nityanand Jha",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for contacting me. I have received your message and will get back to you soon.</p>
        <p>Best regards,<br>Nityanand Jha</p>
      `,
    });

    // For now, return success (emails will be sent when email service is configured)
    return NextResponse.json(
      { 
        ok: true,
        message: "Message received successfully. I'll get back to you soon!"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to process your message. Please try again later." },
      { status: 500 }
    );
  }
}
