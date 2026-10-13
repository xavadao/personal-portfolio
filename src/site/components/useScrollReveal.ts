import { useEffect } from 'react';

/**
 * Attaches IntersectionObserver to all .reveal, .reveal-fade, .reveal-left
 * elements within the document, adding .visible when they enter the viewport.
 * Pass a refresh key when filtering can mount new reveal elements.
 */
export function useScrollReveal(refreshKey?: string) {
  useEffect(() => {
    const selectors = '.reveal, .reveal-fade, .reveal-left';
    const elements = document.querySelectorAll<HTMLElement>(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      // threshold: 0 fires as soon as 1px is visible — eliminates the
      // "flash of invisible content" on elements near the top of the page.
      // rootMargin nudges below-fold elements to reveal slightly before they
      // fully enter the viewport for a smoother feel.
      { threshold: 0, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [refreshKey]);
}
