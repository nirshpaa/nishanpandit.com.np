import React from "react";
import { Code2, ShieldCheck, Terminal, Workflow } from "lucide-react";
import styles from "./Resume.module.css";

const handleSpotlightMove = (e: React.PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
};

const highlights = [
  {
    metric: "6+ Years",
    title: "Production Experience",
    detail:
      "Delivering enterprise-grade WordPress solutions for international clients across distributed teams.",
    icon: Terminal,
  },
  {
    metric: "React & PHP",
    title: "Custom Architecture",
    detail:
      "Bespoke themes, plugins, ACF Pro schemas, Elementor Pro widgets, and React Gutenberg blocks.",
    icon: Code2,
  },
  {
    metric: "Commerce",
    title: "WooCommerce & APIs",
    detail:
      "Custom WooCommerce extensions, Stripe payment flows, and resilient REST/webhook integrations.",
    icon: Workflow,
  },
  {
    metric: "Scale & Ops",
    title: "Performance & Security",
    detail:
      "Kinsta, Plesk, and ManageWP fleet operations, Core Web Vitals optimization, and security audits.",
    icon: ShieldCheck,
  },
];

const Summary = () => {
  return (
    <section
      id="summary"
      aria-labelledby="summary-heading"
      className={styles.sectionCard}
      data-reveal
    >
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeadingGroup}>
          <span className={styles.sectionEyebrow}>02 // Executive Summary</span>
          <h2 id="summary-heading" className={styles.sectionHeading}>
            Engineering <em>philosophy</em> &amp; scope.
          </h2>
        </div>
        <span className={styles.sectionBadge}>Professional Profile</span>
      </div>

      <blockquote className="m-0 mb-8 pl-5 border-l-2 border-[hsl(var(--accent))] max-w-[68ch] text-[clamp(1rem,0.96rem+0.3vw,1.15rem)] leading-[1.75] text-[hsl(var(--foreground))]">
        Full-Stack WordPress Developer with 6+ years of professional experience
        delivering custom WordPress solutions for international clients.
        Specialized in custom themes, plugins, Gutenberg development (React),
        WooCommerce extensions, API integrations, performance optimization, and
        website security. Experienced in working with distributed teams,
        managing deployments, and maintaining scalable web applications. Strong
        problem-solving skills, mentoring experience, and a commitment to clean,
        maintainable code and modern development practices.
      </blockquote>

      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0"
      >
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.title}
              className={styles.bentoSubCard}
              onPointerMove={handleSpotlightMove}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-serif italic text-2xl text-[hsl(var(--accent))]">
                  {item.metric}
                </span>
                <Icon
                  className="w-4 h-4 text-[hsl(var(--muted-foreground))]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-sm font-semibold text-[hsl(var(--foreground))] m-0 mb-1.5">
                {item.title}
              </h3>
              <p className="m-0 text-xs leading-[1.6] text-[hsl(var(--muted-foreground))]">
                {item.detail}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Summary;
