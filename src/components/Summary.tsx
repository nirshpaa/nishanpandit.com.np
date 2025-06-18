// import { Circle } from "lucide-react";
import { motion } from "framer-motion";

type SectionProps = {
  sectionTitle?: string;
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1rem",
    background: "hsl(var(--primary))",
  } as React.CSSProperties,
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
  content: {
    marginBottom: "2rem",
    fontSize: "calc(1.5em + 1vmin)",
    lineHeight: "1.75",
    color: "hsl(var(--accent))",
    textAlign: "center",
  } as React.CSSProperties,
};

const Summary = ({ sectionTitle }: SectionProps) => {
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
          <h2 style={styles.heading}>PROFESSIONAL SUMMARY</h2>
        </div>
      </div>
      <motion.p
        style={styles.content}
        initial={{ y: "-100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 2 }}
      >
        Full Stack WordPress Developer with 6+ years of experience in developing
        and maintaining custom WordPress themes and plugins. Proficient in PHP,
        JavaScript, and modern web technologies. Demonstrated ability to
        transform complex requirements into scalable solutions.
      </motion.p>
    </>
  );
};

export default Summary;
