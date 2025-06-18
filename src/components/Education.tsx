// import { Circle } from "lucide-react";
import { motion } from "framer-motion";

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
    fontSize: "calc(1em + 1vmin)",
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
    fontSize: "calc(.8em + 1vmin)",
    color: "hsl(var(--accent))",
  },
};

const Education = ({ sectionTitle }: SectionProps) => {
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
          <h2 style={styles.heading}>EDUCATION</h2>
        </div>
      </div>
      <div style={{ marginBottom: "2rem", maxWidth: "calc(40em + 1vmin)", width: "100%" }}>
        <div style={styles.jobTitle}>
          <motion.span
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            Bachelor of Science in Information Technology
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
            2025
          </motion.span>
        </div>
        <motion.div
          style={styles.company}
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
        >
          Lord Buddha Education Foundation
        </motion.div>
      </div>
      <div style={{ marginBottom: "2rem", maxWidth: "calc(40em + 1vmin)", width: "100%" }}>
        <div style={styles.jobTitle}>
          <motion.span
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            High School (+2)
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
            2022
          </motion.span>
        </div>
        <motion.div
          style={styles.company}
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
        >
          Shikshya Sanskar Higher Secondary School
        </motion.div>
      </div>
      <div style={{ marginBottom: "2rem", maxWidth: "calc(40em + 1vmin)", width: "100%" }}>
        <div style={styles.jobTitle}>
          <motion.span
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2 }}
          >
            School Leaving Certificate (SLC)
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
            2012
          </motion.span>
        </div>
        <motion.div
          style={styles.company}
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
        >
          Junior Citizens Academy
        </motion.div>
      </div>
    </>
  );
};

export default Education;
