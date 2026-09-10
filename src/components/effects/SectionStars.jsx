import { useEffect, useRef } from 'react';

export default function SectionStars({ variant = 'default' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const parent = canvas.parentElement;
    if (!parent) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let stars = [];
    let meteors = [];
    let frameId;
    let meteorTimeout;
    let visible = true;

    const density = variant === 'hero' ? 0.0002 : 0.00026;
    const fallSpeed = variant === 'hero' ? 0.38 : 0.58;
    const meteorInterval = variant === 'hero' ? [1400, 3800] : [900, 2800];

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;

      const count = Math.min(130, Math.max(45, Math.floor(width * height * density)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        speed: Math.random() * fallSpeed + 0.2,
        drift: (Math.random() - 0.5) * 0.1,
        tw: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.2 ? '#f5f0e4' : '#ffffff',
      }));
    };

    const spawnMeteor = () => {
      if (reduced || !visible) {
        meteorTimeout = setTimeout(spawnMeteor, meteorInterval[0]);
        return;
      }

      meteors.push({
        x: width * (0.15 + Math.random() * 0.75),
        y: Math.random() * height * 0.28,
        vx: -(5 + Math.random() * 9),
        vy: 3 + Math.random() * 5.5,
        life: 1,
        tail: 70 + Math.random() * 90,
      });

      meteorTimeout = setTimeout(
        spawnMeteor,
        meteorInterval[0] + Math.random() * (meteorInterval[1] - meteorInterval[0])
      );
    };

    const drawMeteor = (m) => {
      const tailX = m.x - m.vx * (m.tail / 12);
      const tailY = m.y - m.vy * (m.tail / 12);
      const gradient = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
      gradient.addColorStop(0, `rgba(255,252,245,${0.95 * m.life})`);
      gradient.addColorStop(0.2, `rgba(245,240,228,${0.65 * m.life})`);
      gradient.addColorStop(1, 'rgba(245,240,228,0)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();

      ctx.fillStyle = `rgba(255,255,255,${0.85 * m.life})`;
      ctx.beginPath();
      ctx.arc(m.x, m.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = (time) => {
      if (!visible) {
        frameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        const alpha = 0.28 + Math.sin(time / 700 + star.tw) * 0.24;
        ctx.globalAlpha = Math.max(0.14, alpha);
        ctx.fillStyle = star.hue;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();

        if (!reduced) {
          star.y += star.speed;
          star.x += star.drift;
          if (star.y > height + 4) {
            star.y = -4;
            star.x = Math.random() * width;
          }
          if (star.x < -4) star.x = width + 4;
          if (star.x > width + 4) star.x = -4;
        }
      }

      meteors = meteors.filter((m) => m.life > 0);
      for (const meteor of meteors) {
        drawMeteor(meteor);
        if (!reduced) {
          meteor.x += meteor.vx;
          meteor.y += meteor.vy;
          meteor.life -= 0.016;
        }
      }

      ctx.globalAlpha = 1;
      frameId = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !meteorTimeout) {
          meteorTimeout = setTimeout(spawnMeteor, 600);
        }
      },
      { threshold: 0.08 }
    );

    resize();
    observer.observe(parent);
    window.addEventListener('resize', resize);

    const begin = () => {
      frameId = requestAnimationFrame(draw);
      meteorTimeout = setTimeout(spawnMeteor, 800);
    };

    if (document.body.classList.contains('is-launched')) {
      begin();
    } else {
      window.addEventListener('portfolio:launched', begin, { once: true });
    }

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(meteorTimeout);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('portfolio:launched', begin);
    };
  }, [variant]);

  return <canvas className="section-stars" ref={canvasRef} aria-hidden="true" />;
}
