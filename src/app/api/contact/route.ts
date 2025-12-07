import { NextRequest, NextResponse } from "next/server";

// Email configuration
const ADMIN_EMAIL = process.env.MAIL_FROM_ADDRESS || "in.jha357@gmail.com";
const SMTP_HOST = process.env.MAIL_HOST;
const SMTP_PORT = process.env.MAIL_PORT;
const SMTP_USER = process.env.MAIL_USERNAME;
const SMTP_PASS = process.env.MAIL_PASSWORD;
const APP_NAME = process.env.APP_NAME || "Nityanand Jha";

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("Contact form submission:", { name, email, message });

    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Email to admin with "From Name"
    await transporter.sendMail({
      from: `"${APP_NAME}" <${SMTP_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Confirmation email to user with "From Name"
    await transporter.sendMail({
      from: `"${APP_NAME}" <${SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting ${APP_NAME}`,
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for contacting me. I have received your message and will get back to you soon.</p>
        <p>Best regards,<br>${APP_NAME}</p>
      `,
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Message received successfully. I'll get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to process your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
