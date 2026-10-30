import React from "react";
import { ArrowUpRight, Code2, ExternalLink, Play } from "lucide-react";
import styles from "./Resume.module.css";

const handleSpotlightMove = (e: React.PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
};

interface ProjectItem {
  id: string;
  titlePrefix: string;
  titleItalic: string;
  titleSuffix: string;
  subtitle: string;
  metric: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  primaryLink?: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
  logoSrc?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "chitra-stream",
    titlePrefix: "Chitra ",
    titleItalic: "Stream",
    titleSuffix: "",
    subtitle: "Streaming discovery web application for movies, anime & TV shows",
    metric: "< 1.2s Catalog Load",
    problem:
      "Finding and browsing movies, anime, and TV series across multiple catalogs often feels slow and cluttered on mobile and desktop.",
    approach:
      "Built a responsive React frontend (with a Next.js staging architecture) integrating the TMDB API for catalog metadata and VidSrc for embedded streaming playback.",
    result:
      "Delivered a fast, clean streaming discovery experience with sub-1.2s catalog browsing across production and staging.",
    stack: ["ReactJS", "NextJS (Staging)", "TMDB API", "VidSrc"],
    primaryLink: { label: "chitra.stream", href: "https://chitra.stream" },
    secondaryLink: {
      label: "stg.chitra.stream",
      href: "https://stg.chitra.stream",
    },
    logoSrc: "/chitrastream.svg",
  },
  {
    id: "woocommerce-stripe",
    titlePrefix: "Custom ",
    titleItalic: "WooCommerce",
    titleSuffix: " & Stripe Integrations",
    subtitle: "E-commerce plugin development & third-party API workflows",
    metric: "+35% Checkout Reliability",
    problem:
      "Standard off-the-shelf WooCommerce plugins slowed down checkout pages and struggled with custom payment and third-party API requirements.",
    approach:
      "Developed lightweight custom WooCommerce extensions, Stripe payment gateway integrations, and external REST API handlers in PHP.",
    result:
      "Improved checkout speed and reliability by 35% while keeping the codebase easy to maintain and update.",
    stack: ["PHP", "WordPress", "WooCommerce", "Stripe Payments", "REST APIs"],
  },
  {
    id: "gutenberg-themes",
    titlePrefix: "Custom Themes & ",
    titleItalic: "Gutenberg",
    titleSuffix: " Blocks",
    subtitle: "React-powered block development, ACF Pro & Elementor Pro",
    metric: "~40% Faster Page Loads",
    problem:
      "Heavy multipurpose themes made content editing difficult for clients and hurt Core Web Vitals and SEO scores.",
    approach:
      "Created custom WordPress themes from scratch using React-based Gutenberg blocks, ACF Pro field groups, and optimized CSS/JS bundles.",
    result:
      "Reduced average page load times by ~40% and gave content teams flexible, reusable blocks without layout bloat.",
    stack: [
      "WordPress",
      "React (Gutenberg)",
      "ACF Pro",
      "Elementor Pro",
      "HTML5 / CSS3",
    ],
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className={styles.sectionCard}
      data-reveal
    >
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeadingGroup}>
          <span className={styles.sectionEyebrow}>Projects &amp; Case Studies</span>
          <h2 id="portfolio-heading" className={styles.sectionHeading}>
            Featured <em>projects</em> &amp; work.
          </h2>
        </div>
        <span className={styles.sectionBadge}>
          <Code2
            className="w-3.5 h-3.5 text-[hsl(var(--accent))]"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          Selected Work
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className={`${styles.bentoSubCard} flex flex-col gap-5`}
            onPointerMove={handleSpotlightMove}
          >
            {/* Header Row */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[hsl(var(--foreground))] m-0">
                    {project.titlePrefix}
                    <em>{project.titleItalic}</em>
                    {project.titleSuffix}
                  </h3>
                  <span className="font-mono text-[0.72rem] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-[hsl(var(--accent))]">
                    {project.metric}
                  </span>
                </div>
                <p className="m-0 text-sm text-[hsl(var(--muted-foreground))]">
                  {project.subtitle}
                </p>
              </div>

              {project.logoSrc && (
                <div className="px-3.5 py-2 rounded-lg bg-[#0b0b0f] border border-white/[0.08] flex items-center">
                  <img
                    src={project.logoSrc}
                    alt="Chitra Stream logo"
                    width={148}
                    height={36}
                    loading="lazy"
                    className="block h-6 w-auto"
                  />
                </div>
              )}
            </div>

            {/* Problem -> Approach -> Result */}
            <dl className="grid grid-cols-1 md:grid-cols-3 gap-3 m-0">
              <div className="p-3 rounded-lg bg-black/25 border border-white/[0.06]">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[hsl(var(--muted-foreground))] mb-1">
                  Problem
                </dt>
                <dd className="m-0 text-xs sm:text-sm leading-[1.6] text-[hsl(var(--muted-foreground))]">
                  {project.problem}
                </dd>
              </div>

              <div className="p-3 rounded-lg bg-black/25 border border-white/[0.06]">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[hsl(var(--accent))] mb-1">
                  Approach
                </dt>
                <dd className="m-0 text-xs sm:text-sm leading-[1.6] text-[hsl(var(--foreground))]">
                  {project.approach}
                </dd>
              </div>

              <div className="p-3 rounded-lg bg-black/25 border border-white/[0.06]">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-emerald-400 mb-1">
                  Result
                </dt>
                <dd className="m-0 text-xs sm:text-sm leading-[1.6] text-[hsl(var(--foreground))]">
                  {project.result}
                </dd>
              </div>
            </dl>

            {/* Tech Stack & Live Links */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/[0.06]">
              <ul role="list" className={styles.pillList}>
                {project.stack.map((tech) => (
                  <li key={tech} className={styles.skillPill}>
                    {tech}
                  </li>
                ))}
              </ul>

              {(project.primaryLink || project.secondaryLink) && (
                <div className="flex flex-wrap items-center gap-2">
                  {project.primaryLink && (
                    <a
                      href={project.primaryLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.primaryCta} contrast-badge !py-1.5 !px-3 !text-xs font-mono`}
                    >
                      <Play className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>{project.primaryLink.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  )}
                  {project.secondaryLink && (
                    <a
                      href={project.secondaryLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionPill} !py-1.5 !px-3 !text-xs font-mono`}
                    >
                      <ExternalLink
                        className="w-3.5 h-3.5 text-[hsl(var(--accent))]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span>{project.secondaryLink.label}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
