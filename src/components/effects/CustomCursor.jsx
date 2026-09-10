import { useEffect } from 'react';

export default function CustomCursor({ reduced, finePointer }) {
  useEffect(() => {
    if (!finePointer || reduced || !window.gsap) return undefined;

    const { gsap } = window;
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return undefined;

    const dx = gsap.quickTo(dot, 'x', { duration: 0.08 });
    const dy = gsap.quickTo(dot, 'y', { duration: 0.08 });
    const rx = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3' });
    const ry = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3' });

    const onMove = (e) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };

    const hoverEls = document.querySelectorAll('a, button, .sys');
    const launchEls = document.querySelectorAll('.launch');
    const magneticEls = document.querySelectorAll('.magnetic');

    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
    });

    launchEls.forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('view'));
      el.addEventListener('mouseleave', () => ring.classList.remove('view'));
    });

    const magneticCleanups = [];
    magneticEls.forEach((el) => {
      const qx = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' });
      const qy = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' });
      const onMagMove = (e) => {
        const r = el.getBoundingClientRect();
        qx((e.clientX - (r.left + r.width / 2)) * 0.35);
        qy((e.clientY - (r.top + r.height / 2)) * 0.35);
      };
      const onMagLeave = () => {
        qx(0);
        qy(0);
      };
      el.addEventListener('mousemove', onMagMove);
      el.addEventListener('mouseleave', onMagLeave);
      magneticCleanups.push(() => {
        el.removeEventListener('mousemove', onMagMove);
        el.removeEventListener('mouseleave', onMagLeave);
      });
    });

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      magneticCleanups.forEach((fn) => fn());
    };
  }, [reduced, finePointer]);

  if (!finePointer || reduced) return null;

  return (
    <>
      <div id="cursorDot" aria-hidden="true" />
      <div id="cursorRing" aria-hidden="true">
        <span id="cursorLabel">VIEW ↗</span>
      </div>
    </>
  );
}
