import { useEffect } from 'react';

const LAPTOP_MIN_WIDTH = 1024;
const MOBILE_MAX_WIDTH = 820;
const DESKTOP_HERO_HEIGHT = 580;
/** Approximate hero-inner height at mobile scale 1 */
const MOBILE_HERO_HEIGHT = 520;

function getHeroScale(width, height) {
  if (width < LAPTOP_MIN_WIDTH) return 1;

  const reserved = height <= 900 ? 158 : 188;
  const available = height - reserved;

  if (available >= DESKTOP_HERO_HEIGHT) return 1;

  return Math.max(0.88, available / DESKTOP_HERO_HEIGHT);
}

function getMobileHeroScale(width, height) {
  if (width > MOBILE_MAX_WIDTH) return 1;

  const navPx = width <= 380 ? 50 : 52;
  const reserved = navPx + 36;
  const available = height - reserved;

  if (available >= MOBILE_HERO_HEIGHT) return 1;

  return Math.max(0.76, available / MOBILE_HERO_HEIGHT);
}

function updateViewportVars() {
  const root = document.documentElement;
  const height = window.visualViewport?.height ?? window.innerHeight;
  const width = window.innerWidth;
  const isMobile = width <= MOBILE_MAX_WIDTH;

  const navOffset = isMobile ? '3.25rem' : height <= 900 ? '4rem' : '4.75rem';

  root.style.setProperty('--section-h', `${height}px`);
  root.style.setProperty('--nav-offset', navOffset);
  root.style.setProperty('--hero-scale', String(getHeroScale(width, height)));
  root.style.setProperty('--mobile-hero-scale', String(getMobileHeroScale(width, height)));

  if (isMobile) {
    const orbitSize = Math.round(Math.min(width * 0.58, height * 0.26));
    root.style.setProperty('--orbit-size', `${Math.max(160, orbitSize)}px`);
  } else {
    root.style.removeProperty('--orbit-size');
  }

  if (window.ScrollTrigger) {
    window.ScrollTrigger.refresh();
  }
}

export function useViewportHeight() {
  useEffect(() => {
    updateViewportVars();

    window.addEventListener('resize', updateViewportVars);
    window.visualViewport?.addEventListener('resize', updateViewportVars);
    window.visualViewport?.addEventListener('scroll', updateViewportVars);
    window.addEventListener('orientationchange', updateViewportVars);

    return () => {
      window.removeEventListener('resize', updateViewportVars);
      window.visualViewport?.removeEventListener('resize', updateViewportVars);
      window.visualViewport?.removeEventListener('scroll', updateViewportVars);
      window.removeEventListener('orientationchange', updateViewportVars);
    };
  }, []);
}
