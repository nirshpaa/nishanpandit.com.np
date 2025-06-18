// import { Circle } from "lucide-react";

import { MotionConfig, motion } from "framer-motion";

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
  skills: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginBottom: "2rem",
    fontSize: "calc(1.5em + 1vmin)",
    lineHeight: "1.75",
    color: "hsl(var(--accent))",
    textAlign: "center",
  } as React.CSSProperties,
  bullets: {
    marginLeft: "1.2rem",
    marginBottom: "1rem",
  },
};

const Skills = ({ sectionTitle }: SectionProps) => {
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
          <h2 style={styles.heading}>SKILLS</h2>
        </div>
      </div>
      <div style={styles.skills}>
        <ul style={styles.bullets}>
          <MotionConfig transition={{ type: "spring" }}>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
            >
              WordPress Theme Development
            </motion.li>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
            >
              PHP/MySQL
            </motion.li>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
            >
              JavaScript/jQuery
            </motion.li>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
            >
              HTML5/CSS3
            </motion.li>
            <motion.li
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
            >
              REST API Development
            </motion.li>
          </MotionConfig>
        </ul>
        <ul style={styles.bullets}>
          <motion.li
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            WooCommerce
          </motion.li>
          <motion.li
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            Git Version Control
          </motion.li>
          <motion.li
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            React.js
          </motion.li>
          <motion.li
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            Responsive Design
          </motion.li>
          <motion.li
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            Performance Optimization
          </motion.li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
