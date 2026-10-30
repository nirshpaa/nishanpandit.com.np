import { useEffect } from "react";

/**
 * Native-first scroll helper.
 * Leaves mouse wheel, trackpad momentum, and touch scrolling 100% native
 * so scrolling never feels heavy, hijacked, or resistant.
 * Provides smooth eased scrolling only for in-page #anchor navigation links.
 */
export const useLenis = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const targetEl = document.querySelector<HTMLElement>(hash);
      if (!targetEl) return;

      e.preventDefault();
      const headerOffset = 84;
      const targetTop = Math.max(
        0,
        targetEl.getBoundingClientRect().top + window.scrollY - headerOffset
      );

      window.scrollTo({
        top: targetTop,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      window.history.pushState(null, "", hash);
    };

    document.addEventListener("click", onAnchorClick);
    return () => {
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);
};
