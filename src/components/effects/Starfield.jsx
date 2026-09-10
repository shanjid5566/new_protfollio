import { useEffect, useRef } from 'react';

export default function Starfield({ reduced }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return undefined;

    const ctx = cv.getContext('2d');
    let W;
    let H;
    let stars = [];
    let meteors = [];
    let scrollVel = 0;
    let lastY = window.scrollY;
    let frameId;
    let meteorTimeout;

    const resize = () => {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
      stars = Array.from({ length: Math.min(160, W / 7) }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.2,
        s: Math.random() * 0.28 + 0.06,
        tw: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.18 ? '#f5f0e4' : '#ffffff',
      }));
    };

    const onScroll = () => {
      scrollVel = (window.scrollY - lastY) * 0.06;
      lastY = window.scrollY;
    };

    const spawnMeteor = () => {
      if (reduced) return;
      meteors.push({
        x: Math.random() * W * 0.9,
        y: Math.random() * H * 0.35,
        vx: -(6 + Math.random() * 9),
        vy: 3.5 + Math.random() * 5,
        life: 1,
        tail: 80 + Math.random() * 60,
      });
      meteorTimeout = setTimeout(spawnMeteor, 1200 + Math.random() * 2200);
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, W, H);
      for (const st of stars) {
        const a = 0.42 + Math.sin(t / 650 + st.tw) * 0.35;
        ctx.globalAlpha = Math.max(0.12, a);
        ctx.fillStyle = st.hue;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, 7);
        ctx.fill();
        if (!reduced) {
          st.y += st.s + scrollVel * st.r * 0.15 + 0.05;
          if (st.y > H) {
            st.y = 0;
            st.x = Math.random() * W;
          }
          if (st.y < 0) st.y = H;
        }
      }
      ctx.globalAlpha = 1;
      meteors = meteors.filter((m) => m.life > 0);
      for (const m of meteors) {
        const tailLen = m.tail ?? 72;
        const tx = m.x - m.vx * (tailLen / 12);
        const ty = m.y - m.vy * (tailLen / 12);
        const g = ctx.createLinearGradient(m.x, m.y, tx, ty);
        g.addColorStop(0, `rgba(255,252,245,${0.95 * m.life})`);
        g.addColorStop(0.25, `rgba(245,240,228,${0.55 * m.life})`);
        g.addColorStop(1, 'rgba(245,240,228,0)');
        ctx.strokeStyle = g;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();
        ctx.fillStyle = `rgba(255,255,255,${0.8 * m.life})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        m.x += m.vx;
        m.y += m.vy;
        m.life -= 0.016;
      }
      scrollVel *= 0.92;
      frameId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });

    const begin = () => {
      meteorTimeout = setTimeout(spawnMeteor, 1800);
      frameId = requestAnimationFrame(draw);
    };

    if (document.body.classList.contains('is-launched')) {
      begin();
    } else {
      window.addEventListener('portfolio:launched', begin, { once: true });
    }

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(meteorTimeout);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('portfolio:launched', begin);
    };
  }, [reduced]);

  return <canvas id="stars" ref={canvasRef} aria-hidden="true" />;
}
