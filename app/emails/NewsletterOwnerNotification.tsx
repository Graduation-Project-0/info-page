import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

interface NewsletterOwnerNotificationProps {
  subscriberEmail: string;
  subscribedAt: string;
}

export const NewsletterOwnerNotification = ({
  subscriberEmail,
  subscribedAt,
}: NewsletterOwnerNotificationProps) => (
  <Html>
    <Head />
    <Preview>New newsletter subscriber: {subscriberEmail}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={logo}>VANGUARD</Text>
          <Heading style={h1}>New Newsletter Subscriber</Heading>
        </Section>

        <Section style={detailsSection}>
          <Text style={label}>Email Address</Text>
          <Text style={value}>{subscriberEmail}</Text>

          <Text style={label}>Subscribed At</Text>
          <Text style={value}>{subscribedAt}</Text>
        </Section>

        <Hr style={divider} />

        <Section style={footer}>
          <Text style={footerText}>
            This is an automated notification from your Vanguard website.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#050705",
  padding: "40px 0",
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  backgroundColor: "#0a0c0a",
  border: "1px solid #1a221a",
  borderRadius: "20px",
  margin: "0 auto",
  padding: "48px",
  width: "600px",
};

const header = { textAlign: "center" as const, marginBottom: "32px" };

const logo = {
  color: "#22c55e",
  fontSize: "14px",
  fontWeight: "800",
  letterSpacing: "0.2em",
  margin: "0 0 16px 0",
};

const h1 = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0",
};

const detailsSection = {
  backgroundColor: "#111611",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a221a",
  marginBottom: "32px",
};

const label = {
  color: "#4a554a",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const value = {
  color: "#e0e0e0",
  fontSize: "16px",
  margin: "0 0 16px 0",
};

const divider = { borderColor: "#1a221a", margin: "0 0 24px 0" };
const footer = { textAlign: "center" as const };

const footerText = { color: "#4a554a", fontSize: "12px", margin: "0" };

export default NewsletterOwnerNotification;
