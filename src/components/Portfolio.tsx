import { motion} from "framer-motion";
import { relative } from "path";

type SectionProps = {
  sectionTitle?: string;
};

const styles = {
  heading: {
    fontSize: "calc(2.5em + 1vmin)",
    color: "hsl(var(--accent))",
    fontFamily: `"Fraunces", serif`,
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontWeight: "900",
    fontVariationSettings: `"SOFT" 100,
    "WONK" 1`,
  } as React.CSSProperties,
  portfolioTitle: {
    fontSize: "calc(2em + 1vmin)",
    fontWeight: 600,
    color: "hsl(var(--accent))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
  },
  portfolioSubtitle: {
    fontWeight: 500,
    marginBottom: "0.5rem",
    fontSize: "calc(1.5em + 1vmin)",
    color: "hsl(var(--accent))",
  },
  bullets: {
    marginBottom: "1rem",
    color: "hsl(var(--accent))",
    fontSize: "calc(.75em + 1vmin)",
  },
  initials: {
    borderRadius: "50%",
    width: "1.5rem",
    height: "1.5rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "hsl(var(--accent))",
    fontSize: "calc(0.5em + 1vmin)",
    fontWeight: 600,
  } as React.CSSProperties,
};

const Portfolio = ({ sectionTitle }: SectionProps) => {
  return (
    <>
    <motion.div className="chitradesign" initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}></motion.div>
      <div className={sectionTitle}>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Circle
            size={50}
            fill="hsl(var(--secondary))"
            color="hsl(var(--accent))"
          /> */}
          <h2 style={styles.heading}>PORTFOLIO</h2>
        </div>
      </div>

      <div
        style={{
          marginBottom: "2rem",
          maxWidth: "calc(40em + 1vmin)",
          width: "100%",
          position: "relative",
          zIndex: 1
        }}
      >
        <motion.div>
          <a
            href="https://chitra.stream"
            target="_blank"
            style={{ ...styles.portfolioTitle, textDecoration: "underline" }}
          >
            <img src="/chitrastream.svg" width={"100%"} />
          </a>
        </motion.div>
        <motion.div style={{ textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: "calc(1em + 1vmin)" }}>
            To watch movies, animes and tv shows.
          </p>
          <h4 style={styles.portfolioSubtitle}>Used Stacks and Resources:</h4>
          <ul style={styles.bullets}>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
              style={{ color: "#fff", fontSize: "calc(1em + 1vmin)" }}
            >
              ReactJS
            </motion.li>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
              style={{ color: "#fff", fontSize: "calc(1em + 1vmin)" }}
            >
              NextJS{" "}
              <span>
                (currently in development at{" "}
                <a
                  href="https://stg.chitra.stream"
                  style={{
                    color: "hsl(var(--accent))",
                    textDecoration: "underline",
                  }}
                >
                  https://stg.chitra.stream
                </a>
                )
              </span>
            </motion.li>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
              style={{ color: "#fff", fontSize: "calc(1em + 1vmin)" }}
            >
              TMDB API (for movie, animes and tv shows lists)
            </motion.li>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
              style={{ color: "#fff", fontSize: "calc(1em + 1vmin)" }}
            >
              VidSrc (to embed the available movies, animes and tv shows)
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
