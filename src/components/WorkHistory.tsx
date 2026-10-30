import React from "react";
import { Briefcase, Building2, CheckCircle2 } from "lucide-react";
import styles from "./Resume.module.css";

const handleSpotlightMove = (e: React.PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
};

const webExpertsBullets = [
  "Develop, customize, and maintain WordPress websites, themes, and plugins.",
  "Implement responsive and user-friendly website interfaces.",
  "Integrate third-party APIs, payment gateways, and external services.",
  "Troubleshoot and resolve website bugs, performance issues, and security vulnerabilities.",
  "Optimize websites for speed, SEO, and overall user experience.",
  "Work with WooCommerce and other WordPress-based solutions as required.",
  "Perform website updates, backups, and ongoing maintenance.",
  "Collaborate with designers, project managers, and team members to deliver client projects.",
  "Ensure code quality, security, and adherence to WordPress development best practices.",
  "Provide technical support and enhancements for existing websites.",
];

const WorkHistory = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={styles.sectionCard}
      data-reveal
    >
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeadingGroup}>
          <span className={styles.sectionEyebrow}>Career History</span>
          <h2 id="experience-heading" className={styles.sectionHeading}>
            Work <em>experience</em>.
          </h2>
        </div>
        <span className={styles.sectionBadge}>
          <Briefcase className="w-3.5 h-3.5 text-[hsl(var(--accent))]" strokeWidth={1.5} aria-hidden="true" />
          6+ Years
        </span>
      </div>

      <ol role="list" className="flex flex-col gap-5 list-none m-0 p-0">
        {/* Role 1: Web Experts Nepal Pvt. Ltd. */}
        <li>
          <article
            className={styles.bentoSubCard}
            onPointerMove={handleSpotlightMove}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-white/[0.08]">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[hsl(var(--foreground))] m-0">
                  Senior <em>WordPress</em> Developer
                </h3>
                <p className="m-0 mt-1 flex items-center gap-2 text-xs font-mono text-[hsl(var(--muted-foreground))]">
                  <Building2 className="w-3.5 h-3.5 text-[hsl(var(--accent))]" strokeWidth={1.5} aria-hidden="true" />
                  <span>Web Experts Nepal Pvt. Ltd. · Lalitpur, Nepal</span>
                </p>
              </div>

              <span className="font-mono text-xs font-medium px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-[hsl(var(--accent))]">
                <time dateTime="2026-05-01">01/05/2026</time> – Current
              </span>
            </div>

            <ul className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-[hsl(var(--muted-foreground))]">
              {webExpertsBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="text-[hsl(var(--foreground))]/90">{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        </li>

        {/* Role 2: Story Company Pvt. Ltd. */}
        <li>
          <article
            className={styles.bentoSubCard}
            onPointerMove={handleSpotlightMove}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-white/[0.08]">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[hsl(var(--foreground))] m-0">
                  Fullstack <em>WordPress</em> Developer
                </h3>
                <p className="m-0 mt-1 flex items-center gap-2 text-xs font-mono text-[hsl(var(--muted-foreground))]">
                  <Building2 className="w-3.5 h-3.5 text-[hsl(var(--accent))]" strokeWidth={1.5} aria-hidden="true" />
                  <span>Story Company Pvt. Ltd. · Lalitpur, Nepal</span>
                </p>
              </div>

              <span className="font-mono text-xs font-medium px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-[hsl(var(--muted-foreground))]">
                <time dateTime="2023-02-15">15/02/2023</time> –{" "}
                <time dateTime="2025-04-13">13/04/2025</time>
              </span>
            </div>

            <p className="m-0 text-sm leading-[1.75] text-[hsl(var(--muted-foreground))] max-w-[68ch]">
              At Story Designs, I worked as a Fullstack WordPress Developer
              building custom themes and plugins tailored to specific client
              needs. My responsibilities included extending WooCommerce
              functionalities, optimizing site performance and security, and
              maintaining legacy PHP code to ensure long-term stability. I
              managed deployments using platforms like Kinsta, Plesk, and
              ManageWP, and actively collaborated with international clients
              through Slack and Jira. Additionally, I supported the technical
              hiring process by screening resumes, creating test tasks, and
              mentoring junior developers. My role blended hands-on development
              with project management and team coordination to deliver
              high-quality, scalable WordPress solutions.
            </p>
          </article>
        </li>

        {/* Role 3: Parijat Infotech Pvt. Ltd. */}
        <li>
          <article
            className={styles.bentoSubCard}
            onPointerMove={handleSpotlightMove}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-white/[0.08]">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[hsl(var(--foreground))] m-0">
                  Frontend / <em>WordPress</em> Developer
                </h3>
                <p className="m-0 mt-1 flex items-center gap-2 text-xs font-mono text-[hsl(var(--muted-foreground))]">
                  <Building2 className="w-3.5 h-3.5 text-[hsl(var(--accent))]" strokeWidth={1.5} aria-hidden="true" />
                  <span>Parijat Infotech Pvt. Ltd. · Kathmandu, Nepal</span>
                </p>
              </div>

              <span className="font-mono text-xs font-medium px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-[hsl(var(--muted-foreground))]">
                <time dateTime="2019-03-01">01/03/2019</time> –{" "}
                <time dateTime="2023-02-14">14/02/2023</time>
              </span>
            </div>

            <p className="m-0 text-sm leading-[1.75] text-[hsl(var(--muted-foreground))] max-w-[68ch]">
              I began my journey at Parijat Infotech as a Frontend Developer,
              where I gradually took on broader responsibilities including
              project management and mentoring junior team members. I focused on
              building fully customizable WordPress themes, integrating custom
              Gutenberg blocks, and delivering deadline-driven projects with
              precision. My role also involved researching and implementing
              solutions for complex development tasks while maintaining clean and
              reusable code. This experience honed my technical and communication
              skills and laid the foundation for my growth into fullstack
              development.
            </p>
          </article>
        </li>
      </ol>
    </section>
  );
};

export default WorkHistory;
