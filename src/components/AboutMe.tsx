import "country-flag-icons";
import { NP } from "country-flag-icons/react/3x2";
import SVGPerson from "./SVGPerson";
import { motion } from "framer-motion";

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "1rem",
    background: "hsl(var(--primary))",
  } as React.CSSProperties,
  name: {
    fontSize: "calc(2.5em + 1vmin)",
    fontWeight: 700,
    color: "hsl(var(--accent))",
    textTransform: "uppercase",
    letterSpacing: "1px",
  } as React.CSSProperties,
  designation: {
    fontSize: "calc(1em + 1vmin)",
    fontWeight: 700,
    color: "hsl(var(--accent))",
    textTransform: "uppercase",
    letterSpacing: "1px",
  } as React.CSSProperties,
  initials: {
    borderRadius: "50%",
    width: "min(5rem, 10rem)",
    height: "min(5rem, 10rem)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "hsl(var(--accent))",
    fontSize: "calc(0.5em + 1vmin)",
    fontWeight: 600,
  } as React.CSSProperties,
  contact: {
    marginBottom: "2rem",
    fontSize: "calc(1em + 1vmin)",
    lineHeight: "2",
    color: "hsl(var(--accent))",
    textAlign: "center",
    letterSpacing: "2px",
  } as React.CSSProperties,
};

const AboutMe = () => {
  return (
    <header>
      <div style={styles.header}>
        <motion.div
          style={styles.initials}
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
        >
          <NP title="Nepal" className="flag" />
        </motion.div>
        <motion.h1
          style={styles.name}
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
        >
          Nishan Pandit
        </motion.h1>
      </div>
      <div style={styles.header}>
        <motion.h2
          style={styles.designation}
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
        >
          Fullstack WordPress Developer
        </motion.h2>
      </div>
      <div style={styles.contact}>
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
          style={{display: "flex", flexWrap: "wrap", rowGap: "0", columnGap: "20px", justifyContent: "center"}}
        >
          <a href="tel:+9779862409300">📱 (977) 9862-409300</a>
          {" "}
          <a href="mailto:myself@panditnishan.com.np">
            📧 myself@panditnishan.com.np
          </a>
        </motion.div>
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
        >
          📍 Kathmandu, Nepal
        </motion.div>
      </div>
      {/* <div style={{ position: "absolute", bottom: 0, left: 0 }}>
        <SVGPerson />
      </div> */}
    </header>
  );
};

export default AboutMe;
