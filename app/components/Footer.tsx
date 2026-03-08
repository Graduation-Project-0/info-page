import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://instagram.com/vanguard_antivirus",
    label: "Instagram",
    icon: "fa-brands fa-instagram",
  },
  {
    href: "https://x.com/vanguard_AV",
    label: "X (Twitter)",
    icon: "fa-brands fa-x-twitter",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61585750076884",
    label: "Facebook",
    icon: "fa-brands fa-facebook-f",
  },
  {
    href: "https://www.linkedin.com/company/vanguard-av/?viewAsMember=true",
    label: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
  },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer"
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accents */}
      <div
        className="footer-accent"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background:
            "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
        }}
      />
      <div
        className="footer-bg"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--color-bg-elevated)",
          zIndex: -1,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Top section */}
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
            paddingTop: "3rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
                color: "var(--color-text)",
                textDecoration: "none",
                marginBottom: "1rem",
              }}
            >
              <img
                src="/assets/Logo.png"
                alt=""
                style={{
                  height: "40px",
                  width: "40px",
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Gargoyles', serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  letterSpacing: "0.02em",
                }}
              >
                VANGUARD
              </span>
            </a>
            <p
              className="footer-tagline"
              style={{
                color: "var(--color-text-muted)",
                maxWidth: "300px",
                lineHeight: 1.6,
              }}
            >
              Your first line of defense in the digital world.
            </p>
          </div>

          <div className="footer-newsletter">
            <span
              style={{
                display: "block",
                marginBottom: "1rem",
                fontWeight: 500,
                color: "var(--color-text)",
              }}
            >
              Subscribe to our newsletter
            </span>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
                marginBottom: "1rem",
              }}
            >
              Get the latest cybersecurity tips and product updates.
            </p>
            <form
              onSubmit={handleSubscribe}
              style={{ display: "flex", gap: "0.5rem" }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.9rem",
                  fontFamily: "var(--font-sans)",
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius)",
                  color: "var(--color-text)",
                  outline: "none",
                  width: "180px",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  background: "var(--color-accent)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "var(--radius)",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                }}
              >
                {subscribed ? "✓" : "Subscribe"}
              </button>
            </form>
          </div>

          <div className="footer-connect">
            <span
              style={{
                display: "block",
                marginBottom: "1rem",
                fontWeight: 500,
                color: "var(--color-text)",
              }}
            >
              Follow us
            </span>
            <div
              className="footer-social"
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius)",
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                    transition: "0.2s ease",
                  }}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.nav
          className="footer-links"
          aria-label="Footer navigation"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.1 },
            },
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem 2rem",
            padding: "2rem 0",
          }}
        >
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              style={{
                color: "var(--color-text-muted)",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.nav>

        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.2 },
            },
          }}
          style={{
            textAlign: "center",
            padding: "1.5rem 0",
            borderTop: "1px solid var(--color-border)",
            color: "var(--color-text-muted)",
            fontSize: "0.9rem",
          }}
        >
          <p style={{ margin: "0 0 0.5rem" }}>
            <strong style={{ color: "var(--color-text)" }}>Email</strong>{" "}
            support@vanguard.example
          </p>
          <p style={{ margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>
              Response time
            </strong>{" "}
            Usually within 24 hours
          </p>
        </motion.div>
      </div>

      <div
        className="footer-bottom"
        style={{
          background: "var(--color-bg)",
          padding: "1.5rem 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p
              className="footer-copy"
              style={{
                margin: 0,
                color: "var(--color-text-muted)",
                fontSize: "0.875rem",
              }}
            >
              © {currentYear} Vanguard. AI-powered antivirus.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
              }}
            >
              <a
                href="/privacy"
                style={{
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  transition: "color 0.2s ease",
                }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                style={{
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  transition: "color 0.2s ease",
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
