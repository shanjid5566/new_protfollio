import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

let initialized = false;

/** Register plugins once and expose on window for components that read globals. */
export function ensureGsap() {
  if (!initialized) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
    window.gsap = gsap;
    window.ScrollTrigger = ScrollTrigger;
    window.ScrollSmoother = ScrollSmoother;
    window.SplitText = SplitText;
    initialized = true;
  }
  return gsap;
}

export function waitForGsap() {
  return Promise.resolve(ensureGsap());
}

/** Wait until webfonts are applied so SplitText measures correct metrics. */
export function waitForFonts(timeoutMs = 2500) {
  if (!document.fonts?.ready) return Promise.resolve();
  return Promise.race([
    document.fonts.ready,
    new Promise((resolve) => {
      window.setTimeout(resolve, timeoutMs);
    }),
  ]);
}

export function useReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useMediaQuery(query) {
  return window.matchMedia(query).matches;
}
