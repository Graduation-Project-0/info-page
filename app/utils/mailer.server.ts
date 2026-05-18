import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { AdminEmail } from "../emails/AdminEmail";
import { UserConfirmationEmail } from "../emails/UserConfirmationEmail";
import { NewsletterSubscriberEmail } from "../emails/NewsletterSubscriberEmail";
import { NewsletterOwnerNotification } from "../emails/NewsletterOwnerNotification";
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

export async function sendNewsletterEmail(subscriberEmail: string) {
  const fromName = process.env.SMTP_FROM_NAME || "Vanguard AV";
  const fromEmail = process.env.SMTP_USER;
  const ownerEmail = process.env.SMTP_USER;
  const subscribedAt = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  const transporter = getTransporter();

  // Send both emails in parallel so one doesn't block the other
  const promises: Promise<any>[] = [];

  // 1. Send confirmation to subscriber
  const subscriberPromise = render(
    React.createElement(NewsletterSubscriberEmail, { email: subscriberEmail })
  ).then((subscriberHtml) =>
    transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: subscriberEmail,
      subject: "Welcome to Vanguard — You're Subscribed!",
      html: subscriberHtml,
    })
  );
  promises.push(subscriberPromise);

  // 2. Notify owner
  if (ownerEmail) {
    const ownerPromise = render(
      React.createElement(NewsletterOwnerNotification, {
        subscriberEmail,
        subscribedAt,
      })
    ).then((ownerHtml) =>
      transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: ownerEmail,
        subject: `New Newsletter Subscriber: ${subscriberEmail}`,
        html: ownerHtml,
      })
    );
    promises.push(ownerPromise);
  }

  await Promise.all(promises);
}
