import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function meta() {
  return [
    { title: "Privacy Policy — Vanguard" },
    {
      name: "description",
      content:
        "Vanguard's Privacy Policy - Learn how we protect your data and privacy.",
    },
  ];
}

export default function Privacy() {
  return (
    <>
      <Header />
      <main
        style={{
          paddingTop: "80px",
          minHeight: "100vh",
          background: "var(--color-bg)",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "4rem 1.5rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "2rem",
              color: "var(--color-text)",
            }}
          >
            Privacy Policy
          </h1>

          <div
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
            }}
          >
            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "var(--color-text)" }}>
                Last updated: March 2026
              </strong>
            </p>

            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "var(--color-text)",
              }}
            >
              1. Introduction
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              At Vanguard, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our antivirus software and services.
            </p>

            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "var(--color-text)",
              }}
            >
              2. Information We Collect
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              We collect information to provide better services to all our
              users. This includes:
            </p>
            <ul
              style={{
                marginBottom: "1rem",
                paddingLeft: "1.5rem",
                listStyle: "disc",
              }}
            >
              <li>Personal information (name, email, payment details)</li>
              <li>Device information (hardware model, operating system)</li>
              <li>Security-related data (threat detections, scan results)</li>
              <li>Usage data (features used, performance metrics)</li>
            </ul>

            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "var(--color-text)",
              }}
            >
              3. How We Use Your Information
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              We use the information we collect to:
            </p>
            <ul
              style={{
                marginBottom: "1rem",
                paddingLeft: "1.5rem",
                listStyle: "disc",
              }}
            >
              <li>Provide and maintain our security services</li>
              <li>Detect and prevent malware, threats, and security risks</li>
              <li>Improve and personalize your user experience</li>
              <li>Communicate with you about product updates and support</li>
              <li>Process transactions and send related information</li>
            </ul>

            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "var(--color-text)",
              }}
            >
              4. Data Security
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access,
              alteration, disclosure, or destruction. Our security measures
              include:
            </p>
            <ul
              style={{
                marginBottom: "1rem",
                paddingLeft: "1.5rem",
                listStyle: "disc",
              }}
            >
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>ISO 27001 and SOC 2 certified infrastructure</li>
            </ul>

            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "var(--color-text)",
              }}
            >
              5. Data Sharing
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              We do not sell your personal information. We may share your data
              with:
            </p>
            <ul
              style={{
                marginBottom: "1rem",
                paddingLeft: "1.5rem",
                listStyle: "disc",
              }}
            >
              <li>Service providers who assist us in operating our platform</li>
              <li>Legal authorities when required by law</li>
              <li>
                Security partners for threat intelligence (anonymized data only)
              </li>
            </ul>

            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "var(--color-text)",
              }}
            >
              6. Your Rights
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Under GDPR and other privacy regulations, you have the right to:
            </p>
            <ul
              style={{
                marginBottom: "1rem",
                paddingLeft: "1.5rem",
                listStyle: "disc",
              }}
            >
              <li>Access your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability</li>
            </ul>

            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginTop: "2rem",
                marginBottom: "1rem",
                color: "var(--color-text)",
              }}
            >
              7. Contact Us
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Email:</strong> privacy@vanguard.example
              <br />
              <strong>Address:</strong> 123 Security Street, Cyber City, CA
              94000
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
