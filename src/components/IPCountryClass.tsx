import React, { useEffect, useId, useRef, useState } from "react";
import * as Flags from "country-flag-icons/react/3x2";
import { ChevronDown, Globe } from "lucide-react";
import { CountryTheme } from "@/lib/country-themes";

interface IPCountryClassProps {
  countryTheme: CountryTheme;
  onSelectCountry: (code: string) => void;
  allThemes: Record<string, CountryTheme>;
}

const POPULAR_COUNTRIES = [
  "IN",
  "NP",
  "US",
  "GB",
  "AU",
  "CA",
  "DE",
  "JP",
  "BR",
  "FR",
];

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const IPCountryClass: React.FC<IPCountryClassProps> = ({
  countryTheme,
  onSelectCountry,
  allThemes,
}) => {
  const [open, setOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const selectId = useId();
  const panelId = useId();

  const FlagComponent = (Flags as Record<string, React.ComponentType<any>>)[
    countryTheme.code
  ];

  const sortedThemes = Object.values(allThemes).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, {
      passive: true,
    });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [open]);

  const handleCountryChange = (code: string) => {
    const selected = allThemes[code];
    onSelectCountry(code);
    if (selected) {
      setAnnouncement(`Applied ${selected.name} flag accent color`);
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-[1000] bg-[#0b0b0f]/85 backdrop-blur-md border-b border-white/[0.08]">
      {/* Skip Link for Keyboard & Screen Reader Users */}
      <a href="#main-content" className="skip-link visually-hidden">
        Skip to main content
      </a>

      {/* Centralized Polite Live Region for Theme Changes */}
      <div aria-live="polite" aria-atomic="true" className="visually-hidden">
        {announcement}
      </div>

      {/* Subtle 2px Country Flag Ribbon at Top Edge */}
      <div aria-hidden="true" className="flex h-[2px] w-full opacity-90">
        {countryTheme.palette.map((hex, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              backgroundColor: hex,
              transition: "background-color 300ms ease",
            }}
          />
        ))}
      </div>

      {/* Developer Header Container */}
      <div className="w-[min(100%,62rem)] mx-auto px-[clamp(1.25rem,4vw,2.5rem)] py-3 flex items-center justify-between gap-3">
        <a
          href="#about"
          className="font-serif text-xl text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] no-underline shrink-0"
        >
          Nishan <em>Pandit</em>
        </a>

        <nav
          aria-label="Primary"
          className="flex items-center flex-1 justify-start sm:justify-center min-w-0 overflow-x-auto [scrollbar-width:none] touch-pan-x"
        >
          <ul role="list" className="flex items-center gap-0.5 list-none m-0 p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center justify-center px-2.5 py-1.5 rounded-md text-xs sm:text-[0.8125rem] font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-white/[0.04] no-underline whitespace-nowrap transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Country Flag Accent Trigger & Disclosure Panel */}
        <div className="relative shrink-0">
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.09] hover:border-[hsl(var(--accent))] text-[hsl(var(--foreground))] font-mono text-xs font-medium cursor-pointer transition-colors"
          >
            {FlagComponent ? (
              <span
                aria-hidden="true"
                className="w-4 h-3 inline-flex items-center overflow-clip rounded-[2px]"
              >
                <FlagComponent
                  className={countryTheme.code === "NP" ? "flag" : undefined}
                />
              </span>
            ) : (
              <Globe
                className="w-3.5 h-3.5 text-[hsl(var(--accent))]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            )}
            <span>{countryTheme.code}</span>
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-[hsl(var(--accent))]"
            />
            <ChevronDown
              className={`w-3.5 h-3.5 text-[hsl(var(--muted-foreground))] transition-transform ${
                open ? "rotate-180" : ""
              }`}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </button>

          {open && (
            <div
              id={panelId}
              ref={panelRef}
              className="absolute top-[calc(100%+0.5rem)] right-0 w-[min(92vw,19rem)] rounded-xl bg-[#111117] border border-white/[0.12] p-4 text-[hsl(var(--foreground))] shadow-[0_24px_48px_rgba(0,0,0,0.75)] z-[1002]"
            >
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <p className="m-0 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[hsl(var(--accent))]">
                  Country Flag Accent
                </p>
                <span className="font-mono text-[0.68rem] text-[hsl(var(--muted-foreground))]">
                  {countryTheme.name}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3.5">
                {POPULAR_COUNTRIES.map((code) => {
                  const t = allThemes[code];
                  if (!t) return null;
                  const isCurrent = countryTheme.code === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      aria-pressed={isCurrent}
                      onClick={() => handleCountryChange(code)}
                      className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors cursor-pointer border ${
                        isCurrent
                          ? "bg-[hsl(var(--accent))] text-[#0b0b0f] font-semibold border-transparent contrast-badge"
                          : "bg-white/[0.03] text-[hsl(var(--foreground))] border-white/[0.08] hover:border-[hsl(var(--accent))]"
                      }`}
                    >
                      {t.name}
                    </button>
                  );
                })}
              </div>

              <label
                htmlFor={selectId}
                className="block font-mono text-[0.7rem] uppercase tracking-[0.1em] mb-1.5 text-[hsl(var(--muted-foreground))]"
              >
                All {sortedThemes.length} Countries
              </label>
              <select
                id={selectId}
                value={countryTheme.code}
                onChange={(e) => handleCountryChange(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#0b0b0f] text-[hsl(var(--foreground))] border border-white/[0.12] font-mono text-xs"
              >
                {sortedThemes.map((t) => (
                  <option
                    key={t.code}
                    value={t.code}
                    className="bg-[#0b0b0f] text-[#f4f4f6]"
                  >
                    {t.name} ({t.code})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default IPCountryClass;
