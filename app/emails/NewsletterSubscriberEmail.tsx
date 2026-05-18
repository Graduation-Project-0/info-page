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
  Link,
  Row,
  Column,
} from "@react-email/components";
import React from "react";

interface NewsletterSubscriberEmailProps {
  email: string;
}

export const NewsletterSubscriberEmail = ({
  email,
}: NewsletterSubscriberEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Vanguard — You're now subscribed to our security newsletter.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={logo}>VANGUARD</Text>
          <Heading style={h1}>Welcome to the Frontline</Heading>
          <Text style={tagline}>
            You've successfully subscribed to our security intelligence newsletter.
          </Text>
        </Section>

        <Section style={heroSection}>
          <Text style={heroText}>
            Thank you for subscribing with <strong>{email}</strong>. You're now part of an exclusive community that stays ahead of emerging cyber threats.
          </Text>
        </Section>

        <Section style={benefitsSection}>
          <Heading style={sectionHeading}>WHAT YOU'LL RECEIVE</Heading>
          <Row style={stepRow}>
            <Column style={stepNumberCol}>
              <div style={stepNumber}>🛡️</div>
            </Column>
            <Column>
              <Text style={stepText}>
                <strong>Threat Intelligence:</strong> Weekly updates on the latest malware, ransomware, and zero-day vulnerabilities.
              </Text>
            </Column>
          </Row>
          <Row style={stepRow}>
            <Column style={stepNumberCol}>
              <div style={stepNumber}>🚀</div>
            </Column>
            <Column>
              <Text style={stepText}>
                <strong>Product Updates:</strong> Be the first to know about new features, improvements, and security patches.
              </Text>
            </Column>
          </Row>
          <Row style={stepRow}>
            <Column style={stepNumberCol}>
              <div style={stepNumber}>💡</div>
            </Column>
            <Column>
              <Text style={stepText}>
                <strong>Expert Tips:</strong> Actionable cybersecurity advice from our team of security researchers.
              </Text>
            </Column>
          </Row>
          <Row style={stepRow}>
            <Column style={stepNumberCol}>
              <div style={stepNumber}>🎁</div>
            </Column>
            <Column>
              <Text style={stepText}>
                <strong>Exclusive Offers:</strong> Subscriber-only discounts and early access to new products.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={ctaSection}>
          <Link href="https://vanguard-av.net" style={button}>
            Explore Vanguard
          </Link>
        </Section>

        <Hr style={divider} />

        <Section style={footer}>
          <Text style={footerBrand}>VANGUARD AI-POWERED SECURITY</Text>
          <Text style={footerCopyright}>
            © {new Date().getFullYear()} Vanguard AV Team. All rights reserved.
          </Text>
          <div style={socialLinks}>
            <Link href="https://www.linkedin.com/company/vanguard-av/?viewAsMember=true" style={socialLink}>LinkedIn</Link>
            <span style={dot}>•</span>
            <Link href="https://www.facebook.com/profile.php?id=61585750076884" style={socialLink}>Facebook</Link>
            <span style={dot}>•</span>
            <Link href="https://www.instagram.com/vanguard_antivirus/" style={socialLink}>Instagram</Link>
            <span style={dot}>•</span>
            <Link href="https://x.com/vanguard_AV" style={socialLink}>Twitter - X</Link>
          </div>
          <Text style={unsubscribeText}>
            You received this email because you subscribed at vanguard-av.net.
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
  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
};

const header = { textAlign: "center" as const, marginBottom: "40px" };

const logo = {
  color: "#22c55e",
  fontSize: "14px",
  fontWeight: "800",
  letterSpacing: "0.2em",
  margin: "0 0 16px 0",
};

const h1 = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 12px 0",
  letterSpacing: "-0.02em",
};

const tagline = {
  color: "#4a554a",
  fontSize: "15px",
  lineHeight: "1.5",
  margin: "0 auto",
  maxWidth: "400px",
};

const heroSection = {
  backgroundColor: "#111611",
  borderRadius: "12px",
  padding: "24px",
  marginBottom: "32px",
  border: "1px solid #1a221a",
};

const heroText = {
  color: "#e0e0e0",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
};

const benefitsSection = { marginBottom: "32px" };

const sectionHeading = {
  color: "#4a554a",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.15em",
  margin: "0 0 20px 0",
};

const stepRow = { marginBottom: "16px" };
const stepNumberCol = { width: "40px" };

const stepNumber = {
  fontSize: "18px",
  height: "28px",
  width: "28px",
  textAlign: "center" as const,
  lineHeight: "28px",
};

const stepText = {
  color: "#b0b0b0",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
};

const ctaSection = { textAlign: "center" as const, marginBottom: "40px" };

const button = {
  backgroundColor: "#22c55e",
  borderRadius: "8px",
  color: "#050705",
  display: "inline-block",
  fontSize: "15px",
  fontWeight: "700",
  padding: "14px 28px",
  textDecoration: "none",
};

const divider = { borderColor: "#1a221a", margin: "0 0 32px 0" };
const footer = { textAlign: "center" as const };

const footerBrand = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "0.05em",
  margin: "0 0 8px 0",
};

const footerCopyright = { color: "#4a554a", fontSize: "11px", margin: "0 0 16px 0" };

const socialLinks = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const socialLink = { color: "#22c55e", fontSize: "12px", textDecoration: "none" };
const dot = { color: "#1a221a", padding: "0 8px" };

const unsubscribeText = {
  color: "#3a453a",
  fontSize: "11px",
  marginTop: "16px",
};

export default NewsletterSubscriberEmail;
