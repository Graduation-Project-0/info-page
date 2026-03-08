import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="hero section"
      role="region"
      aria-labelledby="hero-heading"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBlockStart: "4rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          insetInlineStart: "5%",
          width: "clamp(150px, 30vw, 300px)",
          height: "clamp(150px, 30vw, 300px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(28, 115, 4, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          y: y1,
        }}
        aria-hidden="true"
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "10%",
          insetInlineEnd: "10%",
          width: "clamp(200px, 40vw, 400px)",
          height: "clamp(200px, 40vw, 400px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(28, 115, 4, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          y: y2,
        }}
        aria-hidden="true"
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(28, 115, 4, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28, 115, 4, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "clamp(30px, 5vw, 50px) clamp(30px, 5vw, 50px)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div
        className="hero-bg"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
        aria-hidden="true"
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <motion.h1
          id="hero-heading"
          className="main-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontSize: "clamp(2rem, 8vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "0 0 1.5rem",
          }}
        >
          <span className="line" style={{ display: "block" }}>
            Guardians
          </span>
          <span
            className="line accent"
            style={{
              display: "block",
              color: "var(--color-accent)",
            }}
          >
            Of The Digital Frontier.
          </span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            color: "var(--color-text-muted)",
            maxWidth: "clamp(280px, 90vw, 480px)",
            marginInline: "auto",
            marginBlockEnd: "3rem",
            lineHeight: 1.6,
          }}
        >
          Next-gen antivirus built with AI — real-time threat detection,
          zero-day protection, and peace of mind for your devices.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{
            display: "flex",
            gap: "clamp(0.5rem, 2vw, 1rem)",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBlockStart: "2rem",
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
            }}
          >
            Get Vanguard
          </a>
          <a
            href="#features"
            className="btn btn-ghost"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem 1.5rem",
              fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
              fontWeight: 500,
              borderRadius: "var(--radius)",
              background: "transparent",
              color: "var(--color-text)",
              textDecoration: "none",
              border: "1px solid var(--color-border)",
              cursor: "pointer",
              transition: "0.2s ease",
              minHeight: "44px",
            }}
          >
            See how it works
          </a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          insetInlineStart: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--color-text-muted)",
          fontSize: "0.8rem",
          fontWeight: 500,
        }}
        aria-hidden="true"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, var(--color-border), transparent)",
            borderRadius: "1px",
          }}
        />
      </motion.div>
    </section>
  );
}
