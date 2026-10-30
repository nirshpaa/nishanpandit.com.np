import { useCallback, useEffect, useState } from "react";
import { COUNTRY_THEMES, CountryTheme, getCountryTheme } from "@/lib/country-themes";

const testCountryMap: Record<string, string> = {
  "123.45.67.89": "NP",
};

const TIMEZONE_COUNTRY_MAP: Record<string, string> = {
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",
  "Asia/Kathmandu": "NP",
  "Asia/Katmandu": "NP",
  "America/New_York": "US",
  "America/Chicago": "US",
  "America/Denver": "US",
  "America/Los_Angeles": "US",
  "Europe/London": "GB",
  "Europe/Berlin": "DE",
  "Europe/Paris": "FR",
  "Asia/Tokyo": "JP",
  "Australia/Sydney": "AU",
  "America/Toronto": "CA",
};

function inferInitialCountryCode(): string {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const paramCountry = params.get("country");
    if (paramCountry) {
      return getCountryTheme(paramCountry).code;
    }
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && TIMEZONE_COUNTRY_MAP[tz]) {
        return TIMEZONE_COUNTRY_MAP[tz];
      }
    } catch {
      // Ignore timezone errors
    }
  }
  return "IN";
}

export function applyCountryThemeToDOM(theme: CountryTheme, previousSlug?: string) {
  const root = document.documentElement;
  if (previousSlug && previousSlug !== theme.slug) {
    root.classList.remove(previousSlug);
  }
  root.classList.add(theme.slug);
  root.setAttribute("data-country", theme.code);
  // Country flag drives ONLY --accent (with --secondary aliased for compatibility)
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--secondary", theme.accent);
  root.style.setProperty("--flag-1", theme.palette[0] || "#FF9933");
  root.style.setProperty("--flag-2", theme.palette[1] || "#F4F4F6");
  root.style.setProperty("--flag-3", theme.palette[2] || "#138808");
  root.style.setProperty("--flag-4", theme.palette[3] || theme.palette[0] || "#000080");
}

export const useIPCountryClass = () => {
  const [countryTheme, setCountryTheme] = useState<CountryTheme>(() =>
    getCountryTheme(inferInitialCountryCode())
  );
  const [detectedIp, setDetectedIp] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setCountryByCodeOrName = useCallback((codeOrName: string) => {
    const applyUpdate = () => {
      setCountryTheme((prev) => {
        const next = getCountryTheme(codeOrName);
        applyCountryThemeToDOM(next, prev.slug);
        return next;
      });
    };

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (doc.startViewTransition && !prefersReducedMotion) {
      doc.startViewTransition(() => {
        applyUpdate();
      });
    } else {
      applyUpdate();
    }
  }, []);

  useEffect(() => {
    applyCountryThemeToDOM(countryTheme);
  }, [countryTheme]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("country")) {
      return;
    }

    let isMounted = true;

    const fetchWithTimeout = async (url: string, timeoutMs = 3500) => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
      } finally {
        clearTimeout(timer);
      }
    };

    const detectCountryByIP = async () => {
      try {
        try {
          const data = await fetchWithTimeout("https://ipapi.co/json/");
          if (data && (data.country_code || data.country_name) && !data.error) {
            if (!isMounted) return;
            if (data.ip) setDetectedIp(data.ip);
            const mapped =
              (data.ip && testCountryMap[data.ip]) ||
              data.country_code ||
              data.country_name;
            setCountryByCodeOrName(mapped);
            return;
          }
        } catch {
          // Try next provider
        }

        try {
          const data = await fetchWithTimeout("https://ipwho.is/");
          if (data && data.success !== false && (data.country_code || data.country)) {
            if (!isMounted) return;
            if (data.ip) setDetectedIp(data.ip);
            const mapped =
              (data.ip && testCountryMap[data.ip]) ||
              data.country_code ||
              data.country;
            setCountryByCodeOrName(mapped);
            return;
          }
        } catch {
          // Try next provider
        }

        try {
          const data = await fetchWithTimeout("https://api.country.is/");
          if (data && data.country) {
            if (!isMounted) return;
            if (data.ip) setDetectedIp(data.ip);
            const mapped = (data.ip && testCountryMap[data.ip]) || data.country;
            setCountryByCodeOrName(mapped);
            return;
          }
        } catch {
          // Fallback to inferred timezone country already applied
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    detectCountryByIP();

    return () => {
      isMounted = false;
    };
  }, [setCountryByCodeOrName]);

  return {
    loading,
    error,
    countryTheme,
    detectedIp,
    setCountryByCodeOrName,
    allThemes: COUNTRY_THEMES,
  };
};
