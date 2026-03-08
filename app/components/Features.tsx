import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const featuresData = [
  {
    id: "url-scanning",
    filter: "URL Scanning",
    image: "/assets/icons/URL Scann.svg",
    title: "URL Scanning",
    description:
      "Detect phishing, malicious redirects, and dangerous domains before you click.",
  },
  {
    id: "file-scanning",
    filter: "File Scanning",
    image: "/assets/icons/file.svg",
    title: "File Scanning",
    description:
      "Static-first file inspection to catch malware without executing suspicious content.",
  },
  {
    id: "email-scanning",
    filter: "Email Scanning",
    image: "/assets/icons/email.svg",
    title: "Email Scanning",
    description:
      "Spot malicious attachments and social‑engineering patterns in emails.",
  },
  {
    id: "vs-extension",
    filter: "VS Extension",
    image: "/assets/icons/code.svg",
    title: "VS Extension",
    description:
      "Analyze code and dependencies to reduce supply‑chain and vulnerability risk.",
  },
  {
    id: "multimedia-scanning",
    filter: "Multimedia Scanning",
    image: "/assets/icons/media.svg",
    title: "Multimedia Scanning",
    description:
      "Detect hidden payloads and suspicious data inside images, audio, and video.",
  },
];

const filters = [
  "All",
  "URL Scanning",
  "File Scanning",
  "Email Scanning",
  "VS Extension",
  "Multimedia Scanning",
];

export function Features() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const filteredFeatures =
    activeFilter === "All"
      ? featuresData
      : featuresData.filter((f) => f.filter === activeFilter);

  return (
    <section
      id="features"
      className="section features our-work"
      role="region"
      aria-labelledby="features-heading"
      ref={ref}
      style={{
        padding: "var(--spacing-section) 0",
        position: "relative",
      }}
    >
      <div className="container">
        <motion.h2
          id="features-heading"
          className="main-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 600,
            marginBlockEnd: "3rem",
            letterSpacing: "-0.02em",
            textAlign: "center",
            position: "relative",
          }}
        >
          Features
        </motion.h2>

        <motion.ul
          className="our-work-filters"
          role="tablist"
          aria-label="Feature categories"
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
            gap: "0.5rem",
            listStyle: "none",
            padding: 0,
            marginBlockEnd: "3rem",
          }}
        >
          {filters.map((filter) => (
            <li key={filter} role="none">
              <button
                role="tab"
                aria-selected={activeFilter === filter}
                aria-controls="features-panel"
                onClick={() => setActiveFilter(filter)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveFilter(filter);
                  }
                }}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius)",
                  border: "none",
                  background:
                    activeFilter === filter
                      ? "var(--color-accent)"
                      : "transparent",
                  color:
                    activeFilter === filter
                      ? "#fff"
                      : "var(--color-text-muted)",
                  cursor: "pointer",
                  fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
                  fontWeight: 500,
                  transition: "0.2s ease",
                  minHeight: "44px",
                  minWidth: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {filter}
              </button>
            </li>
          ))}
        </motion.ul>

        <div
          id="features-panel"
          role="tabpanel"
          aria-labelledby={`${activeFilter.toLowerCase()}-tab`}
          className="features-grid our-work-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
            gap: "clamp(1rem, 3vw, 2rem)",
          }}
        >
          {filteredFeatures.map((feature, index) => (
            <motion.article
              key={`${activeFilter}-${feature.id}`}
              className="feature-card"
              data-work={feature.filter}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              style={{
                background: "var(--color-bg-card)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                overflow: "hidden",
                transition: "0.3s ease",
              }}
            >
              <div
                className="feature-card-media"
                style={{
                  padding: "clamp(1.5rem, 5vw, 2rem)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "var(--color-accent-soft)",
                  minHeight: "clamp(120px, 20vw, 160px)",
                }}
              >
                <img
                  src={feature.image}
                  alt=""
                  role="img"
                  aria-hidden="true"
                  style={{
                    width: "clamp(60px, 10vw, 80px)",
                    height: "clamp(60px, 10vw, 80px)",
                    objectFit: "contain",
                  }}
                  loading="lazy"
                />
              </div>
              <div
                className="feature-card-body"
                style={{
                  padding: "clamp(1rem, 3vw, 1.5rem)",
                }}
              >
                <h3
                  className="feature-card-title"
                  style={{
                    fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)",
                    fontWeight: 600,
                    marginBlockEnd: "0.75rem",
                    color: "var(--color-text)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="feature-card-desc"
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                    margin: 0,
                    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="features-cta"
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
            textAlign: "center",
            marginBlockStart: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          <a
            href="#contact"
            className="btn btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem 1.5rem",
              fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
              fontWeight: 500,
              borderRadius: "var(--radius)",
              background: "var(--color-accent)",
              color: "#fff",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s ease",
              minHeight: "44px",
              minWidth: "140px",
            }}
          >
            Get Vanguard
          </a>
        </motion.div>
      </div>
    </section>
  );
}
