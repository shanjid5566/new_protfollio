import { useEffect } from 'react';
import { sectionSEO } from '../data/seoConfig';

const SECTION_IDS = ['hero', 'about', 'experience', 'skills', 'launchpad', 'education', 'contact'];

export function useDynamicSEO(onSectionChange) {
  useEffect(() => {
    const observers = [];
    const visibleSections = new Map();

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            let bestId = 'hero';
            let bestRatio = 0;
            visibleSections.forEach((ratio, sectionId) => {
              if (ratio > bestRatio) {
                bestRatio = ratio;
                bestId = sectionId;
              }
            });

            const seo = sectionSEO[bestId];
            if (seo) onSectionChange(bestId, seo);
          });
        },
        { threshold: [0.15, 0.35, 0.55, 0.75] }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [onSectionChange]);
}
