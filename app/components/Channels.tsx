import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, useReducedMotion } from "framer-motion";

const DESKTOP_BG = "/assets/desktop.png";
const WEBSITE_BG = "/assets/website.png";
const EXTENSIONS_BG = "/assets/extension.jpg";

const CHANNELS_FLEX_TRANSITION_MS = 600;
const CHANNELS_REVEAL_DURATION_MS = 550;

const channelItems = [
  {
    id: "desktop",
    title: "Shield every workstation",
    icon: "fa-solid fa-desktop",
    description:
      "Run Vanguard natively on Windows and macOS with full-system scanning, real-time shields, and policies that still work when the network drops—so laptops and desktops stay consistent with your org’s bar for safety.",
    backgroundImage: DESKTOP_BG,
  },
  {
    id: "website",
    title: "Browse with clarity",
    icon: "fa-solid fa-globe",
    description:
      "Cloud-backed URL intelligence and risky-site signals follow your users across the web. Fewer impostor pages, less guesswork, and a lighter load on your team when links are shared inside the business.",
    backgroundImage: WEBSITE_BG,
  },
  {
    id: "extensions",
    title: "Protection inside your apps",
    icon: "fa-solid fa-puzzle-piece",
    description:
      "Bring checks into the tools people already use—browsers, mail surfaces, and dev workflows—so files and links are handled in context, without forcing another portal or breaking flow.",
    backgroundImage: EXTENSIONS_BG,
  },
] as const;

function ChannelCardForeground({
  item,
  isActive,
}: {
  item: (typeof channelItems)[number];
  isActive: boolean;
}) {
  return (
    <div className={`channels-card-fg card-expandable${isActive ? " active" : ""}`}>
      <div className="channels-card-top">
        <div className="channels-card-icon-wrap" aria-hidden>
          <i className={item.icon} />
        </div>
        <div className="channels-card-top-text">
          <h3 className="channels-card-title">{item.title}</h3>
        </div>
      </div>
      <div className="card-expandable-hidden">
        <div className="channels-card-description">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export function Channels() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();
  const [activeChannelId, setActiveChannelId] = useState<string>("desktop");
  const [suppressChannelForeground, setSuppressChannelForeground] =
    useState(false);
  const [revealChannelForeground, setRevealChannelForeground] =
    useState(false);
  const skipNextForegroundTransition = useRef(true);
  const columnRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (skipNextForegroundTransition.current) {
      skipNextForegroundTransition.current = false;
      return;
    }
    setSuppressChannelForeground(true);
    setRevealChannelForeground(false);

    const revealMs = reduceMotion ? 0 : CHANNELS_REVEAL_DURATION_MS;

    const showTimer = window.setTimeout(() => {
      setSuppressChannelForeground(false);
      if (revealMs > 0) {
        setRevealChannelForeground(true);
      }
    }, CHANNELS_FLEX_TRANSITION_MS);

    const clearRevealTimer =
      revealMs > 0
        ? window.setTimeout(() => {
            setRevealChannelForeground(false);
          }, CHANNELS_FLEX_TRANSITION_MS + revealMs)
        : null;

    return () => {
      window.clearTimeout(showTimer);
      if (clearRevealTimer !== null) window.clearTimeout(clearRevealTimer);
    };
  }, [activeChannelId, reduceMotion]);

  const activeIndex = Math.max(
    0,
    channelItems.findIndex((c) => c.id === activeChannelId)
  );

  function goTo(id: (typeof channelItems)[number]["id"]) {
    setActiveChannelId(id);
    columnRefs.current[id]?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <section
      id="channels"
      className={`section channels${
        suppressChannelForeground ? " channels--suppress-foreground" : ""
      }${revealChannelForeground ? " channels--reveal-foreground" : ""}`}
      role="region"
      aria-labelledby="channels-heading"
      ref={ref}
      style={{
        padding: "var(--spacing-section) 0",
        position: "relative",
        overflow: "hidden", 
      }}
    >
      <div className="container">
        <motion.h2
          id="channels-heading"
          className="main-heading"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 600,
            marginBlockEnd: "2.5rem",
            letterSpacing: "0.04em",
            textAlign: "center",
            position: "relative",
          }}
        >
          Our channels
        </motion.h2>

        <style>{`
          .channels-columns {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            width: 100%;
            max-width: 100%;
            align-items: stretch;
            overflow: hidden; 
          }

          .channels-column {
            position: relative;
            min-width: 0;
            flex: 1;
            transition: flex 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            border-radius: var(--radius-lg, 12px);
          }

          @media (min-width: 901px) {
            .channels-column.is-active {
              flex: 1.8; 
            }
            .channels-column.is-folded {
              flex: 0.7;
            }
          }

          .channels-article {
            position: relative;
            width: 100%;
            height: 100%;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          .channels-bg-layer {
            position: absolute;
            inset: 0;
            /* منع الـ Scaling تماماً: نستخدم الحجم الافتراضي للصورة */
            background-size: cover; 
            background-position: center;
            background-repeat: no-repeat;
            z-index: 0;
            /* إزالة أي transition للـ background-size لمنع الـ scaling animation */
            transition: filter 0.5s ease, opacity 0.5s ease;
          }

          @media (max-width: 900px) {
            .channels-columns {
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              gap: 0;
            }
            .channels-column {
              flex: 0 0 100%;
              scroll-snap-align: center;
            }
          }

          .channels-bullets {
            display: none;
            align-items: center;
            justify-content: center;
            gap: 0.55rem;
            margin-block-start: 1.5rem;
          }

          .channels-bullet {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid rgba(226, 235, 224, 0.35);
            background: rgba(226, 235, 224, 0.18);
            padding: 0;
            cursor: pointer;
          }

          .channels-bullet.is-active {
            background: rgba(28, 115, 4, 0.85);
            border-color: rgba(28, 115, 4, 0.95);
          }

          @media (max-width: 900px) {
            .channels-bullets {
              display: flex;
            }
          }
        `}</style>

        <motion.div
          className="channels-columns"
          initial={{ opacity: 0, y: 24 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.1 },
            },
          }}
        >
          {channelItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`channels-column ${
                activeChannelId === item.id ? " is-active" : " is-folded"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              onMouseEnter={() => setActiveChannelId(item.id)}
              ref={(el) => {
                columnRefs.current[item.id] = el;
              }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.15 + index * 0.08 },
                },
              }}
            >
              <article className="channels-article">
                <div
                  aria-hidden
                  className="channels-bg-layer"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                    filter:
                      activeChannelId === item.id
                        ? "grayscale(0) saturate(1) brightness(1)"
                        : "grayscale(1) saturate(0.2) brightness(0.7)",
                    opacity: activeChannelId === item.id ? 1 : 0.4,
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background:
                      "linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)",
                    pointerEvents: "none",
                  }}
                />
                <ChannelCardForeground
                  item={item}
                  isActive={activeChannelId === item.id}
                />
              </article>
            </motion.div>
          ))}
        </motion.div>

        <div className="channels-bullets" aria-label="Channels slider">
          {channelItems.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`channels-bullet${i === activeIndex ? " is-active" : ""}`}
              aria-label={`Go to ${item.title}`}
              onClick={() => goTo(item.id)}
            />
          ))}
        </div>

        <motion.div
          className="channels-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.5 },
            },
          }}
          style={{ textAlign: "center", marginBlockStart: "3rem" }}
        >
          <a
            href="#contact"
            className="btn btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem 2rem",
              fontSize: "0.95rem",
              fontWeight: 500,
              borderRadius: "8px",
              background: "#1c7304",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Get Vanguard
          </a>
        </motion.div>
      </div>
    </section>
  );
}