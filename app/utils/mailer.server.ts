import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { AdminEmail } from "../emails/AdminEmail";
import { UserConfirmationEmail } from "../emails/UserConfirmationEmail";
import React from "react";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    const missing = [];
    if (!host) missing.push("SMTP_HOST");
    if (!port) missing.push("SMTP_PORT");
    if (!user) missing.push("SMTP_USER");
    if (!pass) missing.push("SMTP_PASS");
    
    throw new Error(
      `Missing SMTP configuration: ${missing.join(", ")}. Please check your environment variables.`
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass },
  });
}

interface ContactEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailParams) {
  const fromName = process.env.SMTP_FROM_NAME || "Vanguard AU";
  const fromEmail = process.env.SMTP_USER;

  const transporter = getTransporter();

  // 1. Send email to Admin
  const adminHtml = await render(
    React.createElement(AdminEmail, { name, email, subject, message })
  );

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: process.env.SMTP_USER, // Admin email
    replyTo: email,
    subject: `New Contact Submission: ${subject}`,
    html: adminHtml,
  });

  // 2. Send confirmation to User
  const userHtml = await render(
    React.createElement(UserConfirmationEmail, { name, subject, message })
  );

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: email,
    subject: `We received your message: ${subject}`,
    html: userHtml,
  });
}
