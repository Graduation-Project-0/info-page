import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const statsData = [
  {
    icon: "fa-user",
    number: "860K",
    label: "Internet Crimes",
  },
  {
    icon: "fa-database",
    number: "1.3B",
    label: "Data Breaches",
  },
  {
    icon: "fa-globe",
    number: "10's of millions",
    label: "Financial Costs",
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <>
      <style>{`
        #problem::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(10, 12, 10, 0.88);
          z-index: 0;
        }
      `}</style>
      <div
        id="problem"
        className="stats"
        ref={ref}
        style={{
          paddingTop: "var(--spacing-section)",
          paddingBottom: "var(--spacing-section)",
          position: "relative",
          background: "url(/assets/map2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "320px",
        }}
      >
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.h2
            className="section-title main-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 600,
              margin: "0 auto 3rem",
              color: "var(--color-text)",
              textAlign: "center",
              position: "relative",
            }}
          >
            Statistics
          </motion.h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="stats-box"
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.2 + index * 0.15 },
                  },
                }}
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  background: "var(--color-bg-card)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  minWidth: "200px",
                }}
              >
                <i
                  className={`fa-solid ${stat.icon} fa-2x fa-fw`}
                  aria-hidden="true"
                  style={{
                    display: "block",
                    marginBottom: "1rem",
                    color: "var(--color-accent)",
                  }}
                />
                <span
                  className="stats-number"
                  style={{
                    display: "block",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className="stats-label"
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "1rem",
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
