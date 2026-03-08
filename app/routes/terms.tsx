import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function meta() {
  return [
    { title: "Terms of Service — Vanguard" },
    {
      name: "description",
      content:
        "Vanguard's Terms of Service - Read our terms and conditions for using our antivirus services.",
    },
  ];
}

export default function Terms() {
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
            Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              By downloading, installing, or using Vanguard antivirus software,
              you agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our services.
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
              2. Description of Service
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Vanguard provides cybersecurity solutions including but not
              limited to:
            </p>
            <ul
              style={{
                marginBottom: "1rem",
                paddingLeft: "1.5rem",
                listStyle: "disc",
              }}
            >
              <li>Real-time malware detection and removal</li>
              <li>URL and email threat scanning</li>
              <li>Firewall protection</li>
              <li>VPN services</li>
              <li>Password management</li>
              <li>Cloud-based threat intelligence</li>
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
              3. Subscription and Payment
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Our services are provided on a subscription basis. By subscribing,
              you agree to:
            </p>
            <ul
              style={{
                marginBottom: "1rem",
                paddingLeft: "1.5rem",
                listStyle: "disc",
              }}
            >
              <li>Pay the selected subscription fees (monthly or annual)</li>
              <li>Auto-renewal unless cancelled 24 hours before renewal</li>
              <li>
                Refund policy as outlined in our 30-day money-back guarantee
              </li>
              <li>Price changes with 30 days notice</li>
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
              4. License and Restrictions
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Vanguard grants you a limited, non-exclusive, non-transferable
              license to use our software. You agree NOT to:
            </p>
            <ul
              style={{
                marginBottom: "1rem",
                paddingLeft: "1.5rem",
                listStyle: "disc",
              }}
            >
              <li>Reverse engineer, decompile, or disassemble the software</li>
              <li>Sublicense, rent, or lease the software</li>
              <li>Use the software for illegal purposes</li>
              <li>Attempt to bypass security measures</li>
              <li>Redistribute or modify the software</li>
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
              5. Disclaimer of Warranties
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE
              DO NOT WARRANT THAT THE SOFTWARE WILL BE UNINTERRUPTED OR
              ERROR-FREE. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM
              ALL WARRANTIES, EXPRESS OR IMPLIED.
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
              6. Limitation of Liability
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              IN NO EVENT SHALL VANGUARD BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT
              LIMITATION, LOSS OF PROFITS, DATA, OR GOODWILL.
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
              7. Termination
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              We may terminate your access to the service for any reason,
              including violation of these terms. Upon termination, you must
              destroy all copies of the software.
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
              8. Governing Law
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of California, without regard to its
              conflict of law provisions.
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
              9. Contact Information
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Email:</strong> legal@vanguard.example
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
