import React, { useEffect, useRef, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import AboutMe from "./AboutMe";
import Summary from "./Summary";
import Skills from "./Skills";
import WorkHistory from "./WorkHistory";
import Education from "./Education";
import { motion } from "framer-motion";
import styles from "./Resume.module.css";
import Portfolio from "./Portfolio";

const sections = [
  <AboutMe />,
  <Summary sectionTitle={styles.sectionTitle} />,
  <Skills sectionTitle={styles.sectionTitle} />,
  <WorkHistory sectionTitle={styles.sectionTitle} />,
  <Education sectionTitle={styles.sectionTitle} />,
  <Portfolio sectionTitle={styles.sectionTitle} />,
];

const Resume = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (delta: number) => {
    const now = Date.now();
    const timeDiff = now - lastScrollTime.current;

    // Only scroll if enough time has passed AND scroll intent is clear
    if (timeDiff > 800 && Math.abs(delta) > 20) {
      lastScrollTime.current = now;

      if (delta > 0 && currentIndex < sections.length - 1) {
        const next = currentIndex + 1;
        setCurrentIndex(next);
        scrollToIndex(next);
      } else if (delta < 0 && currentIndex > 0) {
        const next = currentIndex - 1;
        setCurrentIndex(next);
        scrollToIndex(next);
      }
    }
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleScroll(e.deltaY);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        handleScroll(100); // simulate downward scroll
      } else if (e.key === "ArrowUp") {
        handleScroll(-100); // simulate upward scroll
      }
    };

    const container = containerRef.current;
    if (container) container.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      container?.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [currentIndex]);

  return (
    <>
      {/* <div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={60}
        />
      </div> */}

      <motion.div
        ref={containerRef}
        className={styles.content}
        // className="texturedBg"
        initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type: "spring"}}
      >
        {sections.map((Component, i) => (
          <div
            key={i}
            style={{
              height: "100vh",
              scrollSnapAlign: "start",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              position: "relative",
              // padding: "calc(10em + 1vmin)",
            }}
          >
            {Component}
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Resume;
