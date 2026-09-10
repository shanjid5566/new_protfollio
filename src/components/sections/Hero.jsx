import { useEffect, useRef } from 'react';
import { heroData } from '../../data/portfolioData';
import RollingButton from '../ui/RollingButton';
import SectionStars from '../effects/SectionStars';

const ORBIT_RADII = { 1: 0.5, 2: 0.34, 3: 0.17 };

export default function Hero({ reduced, finePointer }) {
  const wrapRef = useRef(null);

  /* Orbit + tilt only after preloader finishes — avoids jank during title reveal */
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;

    const sats = [...wrap.querySelectorAll('.sat')];
    sats.forEach((s) => {
      s._angle = parseFloat(s.dataset.angle) * (Math.PI / 180);
    });

    let size = wrap.offsetWidth;
    let frameId = 0;
    let resizeTimer;
    let running = false;
    let astroTween = null;
    let removeMove = null;

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        size = wrap.offsetWidth;
      }, 100);
    };

    const orbitTick = () => {
      if (!running) return;
      sats.forEach((s) => {
        const o = s.dataset.orbit;
        const r = size * ORBIT_RADII[o];
        const speed = reduced ? 0 : o === '1' ? 0.0028 : o === '2' ? 0.004 : 0.0055;
        s._angle += speed;
        const x = Math.cos(s._angle) * r;
        const y = Math.sin(s._angle) * r * 0.98;
        s.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      });
      frameId = requestAnimationFrame(orbitTick);
    };

    const startMotion = () => {
      if (running) return;
      running = true;
      window.addEventListener('resize', onResize);
      orbitTick();

      if (reduced || !window.gsap) return;
      const { gsap } = window;
      astroTween = gsap.to('#astro', {
        y: 20,
        x: -14,
        rotation: 9,
        duration: 3.4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      if (!finePointer) return;
      const ox = gsap.quickTo(wrap, 'rotationY', { duration: 0.8 });
      const oy = gsap.quickTo(wrap, 'rotationX', { duration: 0.8 });
      const onMove = (e) => {
        ox((e.clientX / window.innerWidth - 0.5) * 14);
        oy(-((e.clientY / window.innerHeight - 0.5) * 14));
      };
      window.addEventListener('mousemove', onMove);
      removeMove = () => window.removeEventListener('mousemove', onMove);
    };

    const onLaunched = () => {
      startMotion();
    };

    if (document.body.classList.contains('is-launched')) {
      onLaunched();
    } else {
      window.addEventListener('portfolio:launched', onLaunched, { once: true });
    }

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('portfolio:launched', onLaunched);
      if (removeMove) removeMove();
      if (astroTween) astroTween.kill();
    };
  }, [reduced, finePointer]);

  return (
    <section id="hero" className="panel" aria-label="Hero">
      <SectionStars variant="hero" />
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow reveal-hero">
            <span className="blink" aria-hidden="true" />
            {heroData.eyebrow}
          </div>
          <h1 id="heroTitle">
            <span className="hero-title-line">{heroData.titleLine1}</span>
            <span className="hero-title-line">{heroData.titleLine2}</span>
            <span className="hero-title-line accent">{heroData.titleAccent}</span>
          </h1>
          <p 
            className="hero-sub reveal-hero"
            dangerouslySetInnerHTML={{ __html: heroData.subtitle }}
          />
          <div className="hero-cta reveal-hero">
            <RollingButton href="#launchpad" label="View Projects" variant="cream" />
            <RollingButton href="mailto:shanjidahmed66@gmail.com" label="Contact via gmail" variant="ghost" />
          </div>
        </div>
        <div className="orbit-wrap" id="orbitWrap" ref={wrapRef}>
          <div className="astro" id="astro" aria-hidden="true">
            🧑‍🚀
          </div>
          <div className="orbit o1" />
          <div className="orbit o2" />
          <div className="orbit o3" />  
          <div className="core">
            <span>{heroData.coreLabel}</span>
          </div>
          {heroData.satellites.map((sat) => (
            <div
              key={sat.label}
              className="sat"
              data-orbit={sat.orbit}
              data-angle={sat.angle}
            >
              {sat.label}
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        Scroll to descend
      </div>
    </section>
  );
}
