import { Circle } from "lucide-react";
import { US, JP } from "country-flag-icons/react/3x2";
import { motion, MotionConfig } from "framer-motion";

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
  jobTitle: {
    fontSize: "calc(1.5em + 1vmin)",
    fontWeight: 600,
    color: "hsl(var(--accent))",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
  company: {
    fontWeight: 500,
    marginBottom: "0.5rem",
    fontSize: "calc(1em + 1vmin)",
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

const WorkHistory = ({ sectionTitle }: SectionProps) => {
  return (
    <>
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
          <h2 style={styles.heading}>WORK HISTORY</h2>
        </div>
      </div>

      <div style={{ marginBottom: "2rem", maxWidth: "calc(40em + 1vmin)", width: "100%" }}>
        <div style={styles.jobTitle}>
          <motion.span
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            Fullstack WordPress Developer
          </motion.span>
          <motion.span
            style={{
              color: "hsl(var(--accent))",
              fontSize: "calc(.5em + 1vmin)",
            }}
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            2023 - 2025
          </motion.span>
        </div>
        <motion.div
          style={styles.company}
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
        >
          Story Designs Pvt. Ltd.{" "}
          <span style={styles.initials}>
            <US title="Nepal" />
          </span>
        </motion.div>
        <ul style={styles.bullets}>
          <MotionConfig transition={{ type: "spring", duration: 2 }}>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Led development of 20+ custom WordPress themes and plugins for
              enterprise clients
            </motion.li>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Implemented headless WordPress architecture using React.js
              frontend
            </motion.li>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Optimized site performance resulting in 40% faster load times
            </motion.li>
          </MotionConfig>
        </ul>
      </div>

      <div style={{ marginBottom: "2rem", maxWidth: "calc(40em + 1vmin)", width: "100%" }}>
        <div style={styles.jobTitle}>
          <motion.span
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            Frontend / WordPress Developer
          </motion.span>
          <motion.span
            style={{
              color: "hsl(var(--accent))",
              fontSize: "calc(.5em + 1vmin)",
            }}
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            2019 - 2023
          </motion.span>
        </div>
        <motion.div
          style={styles.company}
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
        >
          Parijat Infotech Pvt. Ltd.{" "}
          <span style={styles.initials}>
            <JP title="Nepal" />
          </span>
        </motion.div>
        <ul style={styles.bullets}>
          <MotionConfig transition={{ type: "spring", duration: 2 }}>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Led development of 20+ custom WordPress themes and plugins for
              enterprise clients
            </motion.li>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Implemented headless WordPress architecture using React.js
              frontend
            </motion.li>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Optimized site performance resulting in 40% faster load times
            </motion.li>
          </MotionConfig>
        </ul>
      </div>
    </>
  );
};

export default WorkHistory;
