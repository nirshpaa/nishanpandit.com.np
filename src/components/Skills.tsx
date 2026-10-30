import React from "react";
import { Cpu, Globe2, ShieldCheck } from "lucide-react";
import styles from "./Resume.module.css";

const handleSpotlightMove = (e: React.PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
};

const skillCategories = [
  {
    eyebrow: "01 · Engineering Stack",
    titlePrefix: "Core ",
    titleItalic: "Engineering",
    titleSuffix: " & Web Stack",
    items: [
      "PHP",
      "WordPress",
      "JavaScript",
      "JavaScript Framework (React)",
      "CSS",
      "Web Technologies: HTML5, CSS3",
      "Web Services & REST APIs",
      "Gulp / NPM",
    ],
  },
  {
    eyebrow: "02 · Ecosystem & Tooling",
    titlePrefix: "WordPress ",
    titleItalic: "Ecosystem",
    titleSuffix: " & Creative",
    items: [
      "Elementor Pro (Expert)",
      "ACF Pro",
      "Excellent knowledge of WooCommerce & WordPress",
      "Stripe Payments",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Microsoft Office",
    ],
  },
  {
    eyebrow: "03 · Leadership & Collaboration",
    titlePrefix: "Team ",
    titleItalic: "Leadership",
    titleSuffix: " & Strengths",
    items: [
      "Good listener and communicator",
      "Team-work oriented",
      "Written and Verbal skills",
      "Motivated",
      "Critical thinking",
    ],
  },
];

const languages = [
  {
    language: "English",
    listening: "C1",
    reading: "C1",
    writing: "B2",
    spokenProduction: "B2",
    spokenInteraction: "B2",
  },
  {
    language: "Hindi",
    listening: "C2",
    reading: "B2",
    writing: "B1",
    spokenProduction: "C1",
    spokenInteraction: "C1",
  },
];

const digitalSkills = [
  {
    name: "Information and data literacy",
    tier: "ADVANCED",
    score: 6,
    max: 6,
  },
  {
    name: "Communication and collaboration",
    tier: "ADVANCED",
    score: 6,
    max: 6,
  },
  {
    name: "Digital content creation",
    tier: "ADVANCED",
    score: 6,
    max: 6,
  },
  {
    name: "Safety",
    tier: "ADVANCED",
    score: 5,
    max: 6,
  },
  {
    name: "Problem solving",
    tier: "ADVANCED",
    score: 6,
    max: 6,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={styles.sectionCard}
      data-reveal
    >
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeadingGroup}>
          <span className={styles.sectionEyebrow}>Technical &amp; Linguistic</span>
          <h2 id="skills-heading" className={styles.sectionHeading}>
            Skills &amp; <em>languages</em>.
          </h2>
        </div>
        <span className={styles.sectionBadge}>
          <Cpu className="w-3.5 h-3.5 text-[hsl(var(--accent))]" strokeWidth={1.5} aria-hidden="true" />
          Stack, CEFR &amp; DigComp
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {/* Categorized Technical & Soft Skills Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((group) => (
            <div
              key={group.eyebrow}
              className={styles.bentoSubCard}
              onPointerMove={handleSpotlightMove}
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[hsl(var(--accent))] m-0 mb-1">
                {group.eyebrow}
              </p>
              <h3 className="font-serif text-xl font-normal text-[hsl(var(--foreground))] m-0 mb-3.5">
                {group.titlePrefix}
                <em>{group.titleItalic}</em>
                {group.titleSuffix}
              </h3>
              <ul role="list" className={styles.pillList}>
                {group.items.map((skill) => (
                  <li key={skill} className={styles.skillPill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Language Skills & Digital Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Language Skills */}
          <div
            className={`${styles.bentoSubCard} min-w-0`}
            onPointerMove={handleSpotlightMove}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[hsl(var(--accent))] m-0">
                  CEFR Linguistic Matrix
                </p>
                <h3 className="font-serif text-xl font-normal text-[hsl(var(--foreground))] m-0">
                  Language <em>proficiency</em>
                </h3>
              </div>
              <Globe2
                className="w-4 h-4 text-[hsl(var(--muted-foreground))]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            <p className="m-0 mb-4 px-3 py-2 rounded-lg bg-white/[0.025] border border-white/[0.07] font-mono text-xs text-[hsl(var(--foreground))]">
              <span className="text-[hsl(var(--muted-foreground))]">Mother tongue(s):</span>{" "}
              <strong className="text-[hsl(var(--accent))]">Nepali</strong>
            </p>

            <div className="overflow-x-auto touch-pan-x mb-3">
              <table className="w-full border-collapse text-xs text-left">
                <caption className="visually-hidden">
                  Other language proficiencies according to the Common European
                  Framework of Reference for Languages (CEFR)
                </caption>
                <thead>
                  <tr className="border-b border-white/[0.1] font-mono text-[0.68rem] uppercase tracking-[0.06em] text-[hsl(var(--muted-foreground))]">
                    <th scope="col" className="py-2 pr-2">
                      Language
                    </th>
                    <th scope="col" className="py-2 px-1.5">
                      Listening
                    </th>
                    <th scope="col" className="py-2 px-1.5">
                      Reading
                    </th>
                    <th scope="col" className="py-2 px-1.5">
                      Writing
                    </th>
                    <th scope="col" className="py-2 px-1.5">
                      Spoken Prod.
                    </th>
                    <th scope="col" className="py-2 pl-1.5">
                      Spoken Inter.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {languages.map((row) => (
                    <tr
                      key={row.language}
                      className="border-b border-white/[0.06]"
                    >
                      <th
                        scope="row"
                        className="py-2.5 pr-2 font-medium text-[hsl(var(--foreground))]"
                      >
                        {row.language}
                      </th>
                      {[
                        row.listening,
                        row.reading,
                        row.writing,
                        row.spokenProduction,
                        row.spokenInteraction,
                      ].map((lvl, idx) => (
                        <td key={idx} className="py-2.5 px-1.5">
                          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.1] font-mono text-xs font-medium text-[hsl(var(--foreground))]">
                            {lvl}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="m-0 font-mono text-[0.7rem] text-[hsl(var(--muted-foreground))]">
              CEFR Scale: A1/A2 Basic user · B1/B2 Independent user · C1/C2 Proficient user
            </p>
          </div>

          {/* Digital Skills Test Results */}
          <div
            className={styles.bentoSubCard}
            onPointerMove={handleSpotlightMove}
          >
            <div className="flex items-center justify-between gap-2 mb-4">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[hsl(var(--accent))] m-0">
                  DigComp 2.1 Assessment
                </p>
                <h3 className="font-serif text-xl font-normal text-[hsl(var(--foreground))] m-0">
                  Digital <em>competence</em>
                </h3>
              </div>
              <ShieldCheck
                className="w-4 h-4 text-[hsl(var(--muted-foreground))]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            <ul role="list" className="flex flex-col gap-3.5 list-none m-0 p-0">
              {digitalSkills.map((item) => (
                <li key={item.name}>
                  <div className="flex flex-wrap justify-between items-center gap-2 text-xs mb-1.5">
                    <span className="font-medium text-[hsl(var(--foreground))]">
                      {item.name}
                    </span>
                    <span className="font-mono text-[0.7rem] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.09] text-[hsl(var(--accent))]">
                      {item.tier} · Level {item.score}/{item.max}
                    </span>
                  </div>
                  {/* Segmented 6-Block Executive Gauge */}
                  <div
                    aria-hidden="true"
                    className="grid grid-cols-6 gap-1.5"
                  >
                    {Array.from({ length: item.max }).map((_, idx) => {
                      const filled = idx < item.score;
                      return (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full ${
                            filled
                              ? "bg-[hsl(var(--accent))]"
                              : "bg-white/[0.08]"
                          }`}
                        />
                      );
                    })}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
