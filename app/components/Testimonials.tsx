import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechCorp Solutions",
    content:
      "Vanguard has transformed our security posture. The AI-driven detection caught threats that our previous antivirus completely missed. It's like having a dedicated security team watching 24/7.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "IT Director",
    company: "Global Finance Inc",
    content:
      "We protect over 5,000 endpoints with Vanguard. The minimal system impact combined with comprehensive protection is exactly what we needed. Our incident response time has dropped by 80%.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Founder & CEO",
    company: "StartupX",
    content:
      "As a small business, we can't afford a full security team. Vanguard gives us enterprise-grade protection at a fraction of the cost. The password manager and VPN integration are lifesavers.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "Security Analyst",
    company: "CyberDefense Systems",
    content:
      "I've evaluated dozens of security solutions. Vanguard's static-first approach is revolutionary. It detects malware without executing it - a game-changer for proactive security.",
    rating: 5,
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < rating ? "var(--color-accent)" : "none"}
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      id="testimonials"
      className="section testimonials"
      ref={ref}
      style={{
        padding: "var(--spacing-section) 0",
        position: "relative",
        background: "var(--color-bg-elevated)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2
            className="main-heading"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 600,
              margin: "0 0 1rem",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Trusted by Security Professionals
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-text-muted)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            See what IT leaders and security experts say about Vanguard's
            protection.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 + index * 0.1 },
                },
              }}
              style={{
                padding: "2rem",
                background: "var(--color-bg-card)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <StarRating rating={testimonial.rating} />
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                "{testimonial.content}"
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "var(--color-accent-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    flexShrink: 0,
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      color: "var(--color-text)",
                      fontSize: "1rem",
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.5 },
            },
          }}
          style={{
            marginTop: "4rem",
            padding: "2rem",
            background: "var(--color-bg-card)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {[
              { number: "500K+", label: "Active Users" },
              { number: "99.9%", label: "Detection Rate" },
              { number: "150+", label: "Countries" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index}>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
