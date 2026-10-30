import React from "react";
import { Award, CheckCircle2, GraduationCap } from "lucide-react";
import styles from "./Resume.module.css";

const handleSpotlightMove = (e: React.PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
};

const bscHighlights = [
  "Exposure to over 13 Programming Languages",
  "Expertise in at least 10 software tools",
  "Strong foundation in Information Technology",
  "Fostered critical thinking and creativity",
  "Manage large volumes of data within organizations effectively",
  "Analyze computer systems' operations",
  "Ensure secure networking for data transfer",
];

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className={styles.sectionCard}
      data-reveal
    >
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeadingGroup}>
          <span className={styles.sectionEyebrow}>
            Academic Background
          </span>
          <h2 id="education-heading" className={styles.sectionHeading}>
            Education &amp; <em>certifications</em>.
          </h2>
        </div>
        <span className={styles.sectionBadge}>
          <GraduationCap className="w-3.5 h-3.5 text-[hsl(var(--accent))]" strokeWidth={1.5} aria-hidden="true" />
          BSc.IT &amp; LinkedIn Learning
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {/* Bachelor of Science in Information Technology */}
        <article
          className={styles.bentoSubCard}
          onPointerMove={handleSpotlightMove}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-white/[0.08]">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[hsl(var(--foreground))] m-0">
                Bachelors of Science in <em>Information</em> Technology
              </h3>
              <p className="m-0 mt-1 font-mono text-xs text-[hsl(var(--muted-foreground))]">
                Lord Buddha Education Foundation · Kathmandu, Nepal · EQF level 6
              </p>
            </div>

            <span className="font-mono text-xs font-medium px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-[hsl(var(--accent))]">
              <time dateTime="2022-02-01">01/02/2022</time> –{" "}
              <time dateTime="2025-09-26">26/09/2025</time>
            </span>
          </div>

          <ul className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[hsl(var(--muted-foreground))]">
            {bscHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-[hsl(var(--foreground))]/90">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Secondary & Earlier Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article
            className={styles.bentoSubCard}
            onPointerMove={handleSpotlightMove}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
              <h3 className="font-serif text-xl font-normal text-[hsl(var(--foreground))] m-0">
                High <em>School</em> (+2)
              </h3>
              <time
                dateTime="2022"
                className="font-mono text-xs text-[hsl(var(--accent))]"
              >
                2022
              </time>
            </div>
            <p className="m-0 text-sm text-[hsl(var(--muted-foreground))]">
              Shikshya Sanskar Higher Secondary School
            </p>
          </article>

          <article
            className={styles.bentoSubCard}
            onPointerMove={handleSpotlightMove}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
              <h3 className="font-serif text-xl font-normal text-[hsl(var(--foreground))] m-0">
                School Leaving <em>Certificate</em> (SLC)
              </h3>
              <time
                dateTime="2012"
                className="font-mono text-xs text-[hsl(var(--accent))]"
              >
                2012
              </time>
            </div>
            <p className="m-0 text-sm text-[hsl(var(--muted-foreground))]">
              Junior Citizens Academy
            </p>
          </article>
        </div>

        {/* Certifications */}
        <article
          className={styles.bentoSubCard}
          onPointerMove={handleSpotlightMove}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <Award
                className="w-4 h-4 text-[hsl(var(--accent))]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="font-serif text-2xl font-normal text-[hsl(var(--foreground))] m-0">
                WordPress <em>Essential</em> Training
              </h3>
            </div>
            <span className="font-mono text-xs font-medium px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-[hsl(var(--muted-foreground))]">
              LinkedIn Learning · <time dateTime="2025-09-08">08/09/2025</time> · Online
            </span>
          </div>

          <ul role="list" className={styles.pillList}>
            {[
              "Back-End Web Development",
              "WordPress Development",
              "WordPress",
            ].map((topic) => (
              <li key={topic} className={styles.skillPill}>
                {topic}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Education;
