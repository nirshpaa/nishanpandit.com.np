import React from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "@/hooks/use-lenis";
import { useScrollReveal } from "@/hooks/use-in-view";
import AboutMe from "./AboutMe";
import WorkHistory from "./WorkHistory";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import styles from "./Resume.module.css";

const Resume: React.FC = () => {
  useLenis();
  useScrollReveal();

  return (
    <div className={styles.pageWrapper}>
      <main
        id="main-content"
        tabIndex={-1}
        className={styles.mainContainer}
      >
        <AboutMe />
        <WorkHistory />
        <Portfolio />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="relative z-[2] border-t border-white/[0.08] bg-[#0b0b0f] py-8 px-[clamp(1.25rem,4vw,2.5rem)] text-xs text-[hsl(var(--muted-foreground))]">
        <div className="w-[min(100%,62rem)] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="font-serif text-base text-[hsl(var(--foreground))]">
              Nishan <em>Pandit</em>
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-white/20">
              ·
            </span>
            <p className="m-0 font-mono text-[0.72rem] text-[hsl(var(--muted-foreground))]">
              © {new Date().getFullYear()} · Full-Stack WordPress Developer · Nashik, India
            </p>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:border-[hsl(var(--accent))] text-[hsl(var(--foreground))] no-underline"
          >
            <ArrowUp
              className="w-3.5 h-3.5 text-[hsl(var(--accent))]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span>Back to top</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
