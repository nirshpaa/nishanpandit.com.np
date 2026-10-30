import React, { useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import styles from "./Resume.module.css";

const handleSpotlightMove = (e: React.PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
};

const Contact = () => {
  const [showCalEmbed, setShowCalEmbed] = useState(false);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={styles.sectionCard}
      data-reveal
    >
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeadingGroup}>
          <span className={styles.sectionEyebrow}>Contact</span>
          <h2 id="contact-heading" className={styles.sectionHeading}>
            Get in <em>touch</em>.
          </h2>
        </div>
        <span className={styles.sectionBadge}>
          <MapPin
            className="w-3.5 h-3.5 text-[hsl(var(--accent))]"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          Nashik, Maharashtra, India
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
        {/* Direct Developer Contact Card */}
        <div
          className={`${styles.bentoSubCard} md:col-span-5 flex flex-col gap-4`}
          onPointerMove={handleSpotlightMove}
        >
          <div>
            <h3 className="font-serif text-2xl font-normal text-[hsl(var(--foreground))] m-0 mb-1.5">
              Direct <em>contact</em>
            </h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] m-0">
              Feel free to reach out via WhatsApp, email, or phone for WordPress
              development roles, freelance projects, or technical questions.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/919552096629"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg bg-white/[0.025] border border-white/[0.08] hover:border-[hsl(var(--accent))] text-sm text-[hsl(var(--foreground))] no-underline group"
            >
              <span className="inline-flex items-center gap-2.5">
                <MessageSquare
                  className="w-4 h-4 text-[hsl(var(--accent))] shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="font-mono text-xs">WhatsApp · +91 95520 96629</span>
              </span>
              <ArrowUpRight
                className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent))] shrink-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>

            <a
              href="mailto:myself@panditnishan.com.np"
              className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg bg-white/[0.025] border border-white/[0.08] hover:border-[hsl(var(--accent))] text-sm text-[hsl(var(--foreground))] no-underline group"
            >
              <span className="inline-flex items-center gap-2.5 min-w-0">
                <Mail
                  className="w-4 h-4 text-[hsl(var(--accent))] shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="truncate font-mono text-xs">
                  myself@panditnishan.com.np
                </span>
              </span>
              <ArrowUpRight
                className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent))] shrink-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>

            <a
              href="tel:+919552096629"
              className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg bg-white/[0.025] border border-white/[0.08] hover:border-[hsl(var(--accent))] text-sm text-[hsl(var(--foreground))] no-underline group"
            >
              <span className="inline-flex items-center gap-2.5">
                <Phone
                  className="w-4 h-4 text-[hsl(var(--accent))] shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="font-mono text-xs">Phone · +91 95520 96629</span>
              </span>
              <ArrowUpRight
                className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--accent))] shrink-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Cal.com Booking Card */}
        <div
          className={`${styles.bentoSubCard} md:col-span-7 flex flex-col gap-4`}
          onPointerMove={handleSpotlightMove}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="font-serif text-2xl font-normal text-[hsl(var(--foreground))] m-0 mb-1">
                Book a quick <em>chat</em> on Cal.com
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] m-0">
                Prefer to pick a time directly? Schedule a 15 or 30-minute call on
                my calendar.
              </p>
            </div>
          </div>

          {!showCalEmbed ? (
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://cal.com/nishanpandit"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.primaryCta} contrast-badge`}
              >
                <Calendar className="w-4 h-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <span>Open Cal.com/nishanpandit</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => setShowCalEmbed(true)}
                className={`${styles.actionPill} cursor-pointer`}
              >
                <Calendar
                  className="w-4 h-4 text-[hsl(var(--accent))] shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span>Embed Calendar Inline</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2.5">
              <div className="relative w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#0b0b0f] min-h-[420px]">
                <iframe
                  src="https://cal.com/nishanpandit?embed=true&theme=dark"
                  title="Schedule a call with Nishan Pandit on Cal.com"
                  className="w-full h-[420px] border-0"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[hsl(var(--muted-foreground))]">
                <span>cal.com/nishanpandit</span>
                <button
                  type="button"
                  onClick={() => setShowCalEmbed(false)}
                  className="underline hover:text-[hsl(var(--accent))] bg-transparent border-0 p-0 cursor-pointer font-mono text-xs text-[hsl(var(--muted-foreground))]"
                >
                  Close inline calendar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
