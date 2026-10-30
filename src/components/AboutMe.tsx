import React from "react";
import {
  ArrowUpRight,
  Calendar,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import styles from "./Resume.module.css";

const handleSpotlightMove = (e: React.PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
};

const AboutMe = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`${styles.sectionCard} is-visible`}
      data-reveal
    >
      <div className="flex flex-col gap-7">
        {/* Top Developer Status & Location Pill */}
        <div className="flex flex-wrap items-center gap-3">
          <span className={styles.sectionBadge}>
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            />
            Available for Full-Time &amp; Freelance Roles
          </span>

          <span className="font-mono text-xs text-[hsl(var(--muted-foreground))] inline-flex items-center gap-1.5">
            <MapPin
              className="w-3.5 h-3.5 text-[hsl(var(--accent))]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            Nashik, Maharashtra, India
          </span>
        </div>

        {/* Personal Developer Intro */}
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[hsl(var(--accent))] m-0">
            Full-Stack WordPress Developer · 6+ Years Experience
          </p>

          <h1
            id="about-heading"
            className="font-serif text-[clamp(2.5rem,2rem+3vw,4.25rem)] font-normal leading-[1.06] tracking-[-0.02em] text-[hsl(var(--foreground))] m-0"
          >
            Hi, I&apos;m <em>Nishan</em> Pandit.
          </h1>

          <p className="text-[clamp(1rem,0.96rem+0.25vw,1.125rem)] leading-[1.7] text-[hsl(var(--muted-foreground))] max-w-[65ch] m-0">
            Full-Stack WordPress Developer with 6+ years of professional
            experience delivering custom WordPress solutions for international
            clients. Specialized in custom themes, plugins, Gutenberg
            development (React), WooCommerce extensions, API integrations,
            performance optimization, and website security. Experienced in
            working with distributed teams, managing deployments, and
            maintaining scalable web applications. Strong problem-solving
            skills, mentoring experience, and a commitment to clean,
            maintainable code and modern development practices.
          </p>
        </div>

        {/* Developer Contact & Social Links */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <a
            href="https://wa.me/919552096629"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.primaryCta} contrast-badge`}
          >
            <MessageSquare
              className="w-4 h-4 shrink-0"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span>WhatsApp · +91 95520 96629</span>
          </a>

          <a
            href="mailto:myself@panditnishan.com.np"
            className={styles.actionPill}
          >
            <Mail
              className="w-4 h-4 text-[hsl(var(--accent))] shrink-0"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span>myself@panditnishan.com.np</span>
          </a>

          <a href="tel:+919552096629" className={styles.actionPill}>
            <Phone
              className="w-4 h-4 text-[hsl(var(--accent))] shrink-0"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span>+91 95520 96629</span>
          </a>

          <a href="#contact" className={styles.actionPill}>
            <Calendar
              className="w-4 h-4 text-[hsl(var(--accent))] shrink-0"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span>Schedule a Call</span>
          </a>
        </div>

        {/* Compact Personal Details Row */}
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 m-0">
          <div
            className={styles.bentoSubCard}
            onPointerMove={handleSpotlightMove}
          >
            <dt className="flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[hsl(var(--muted-foreground))]">
              <MapPin
                className="w-3.5 h-3.5 text-[hsl(var(--accent))]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span>Location</span>
            </dt>
            <dd className="m-0 mt-1 text-sm font-medium text-[hsl(var(--foreground))]">
              Nashik, Maharashtra, India
            </dd>
          </div>

          <div
            className={styles.bentoSubCard}
            onPointerMove={handleSpotlightMove}
          >
            <dt className="flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[hsl(var(--muted-foreground))]">
              <User
                className="w-3.5 h-3.5 text-[hsl(var(--accent))]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span>Personal Info</span>
            </dt>
            <dd className="m-0 mt-1 text-sm font-medium text-[hsl(var(--foreground))]">
              Nepalese · Male
            </dd>
            <dd className="m-0 mt-0.5 font-mono text-[0.72rem] text-[hsl(var(--muted-foreground))]">
              DOB: <time dateTime="1997-03-01">01/03/1997</time>
            </dd>
          </div>

          <div
            className={styles.bentoSubCard}
            onPointerMove={handleSpotlightMove}
          >
            <dt className="flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[hsl(var(--muted-foreground))]">
              <MapPin
                className="w-3.5 h-3.5 text-[hsl(var(--accent))]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span>Place of Birth</span>
            </dt>
            <dd className="m-0 mt-1 text-sm font-medium text-[hsl(var(--foreground))]">
              Kathmandu, Nepal
            </dd>
          </div>

          <div
            className={styles.bentoSubCard}
            onPointerMove={handleSpotlightMove}
          >
            <dt className="flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[hsl(var(--muted-foreground))]">
              <Globe
                className="w-3.5 h-3.5 text-[hsl(var(--accent))]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span>Websites</span>
            </dt>
            <dd className="m-0 mt-1 font-mono text-xs text-[hsl(var(--foreground))] flex flex-col gap-0.5">
              <a
                href="https://panditnishan.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--accent))] no-underline inline-flex items-center gap-1"
              >
                <span>panditnishan.com.np</span>
                <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href="https://nishanpandit.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--accent))] no-underline inline-flex items-center gap-1 text-[hsl(var(--muted-foreground))]"
              >
                <span>nishanpandit.com.np</span>
                <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} aria-hidden="true" />
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default AboutMe;
