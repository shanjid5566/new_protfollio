export function scrollToSection(event, href) {
  if (!href?.startsWith('#')) return;

  const target = document.querySelector(href);
  if (!target) return;

  event.preventDefault();

  const smoother = window.ScrollSmoother?.get?.();
  if (smoother) {
    smoother.scrollTo(target, true, 'top top');
    return;
  }

  const root = document.documentElement;
  const navOffset =
    parseFloat(getComputedStyle(root).getPropertyValue('--nav-offset')) || 52;

  const top =
    target.getBoundingClientRect().top + window.pageYOffset - navOffset;

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}
