import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

function spawnCollectible(vw, vh, pad = 60) {
  return {
    x: pad + Math.random() * (vw - pad * 2),
    y: pad + Math.random() * (vh - pad * 2),
    r: 10 + Math.random() * 4,
    pulse: Math.random() * Math.PI * 2,
  };
}

function spawnEnemy(vw) {
  return {
    x: 40 + Math.random() * (vw - 80),
    y: -40,
    vx: (Math.random() - 0.5) * 2.2,
    vy: 1.4 + Math.random() * 2.2,
    r: 18,
    rot: Math.random() * 360,
  };
}

function ShipSvg() {
  return (
    <svg className="ship-body" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="118" rx="22" ry="14" fill="url(#exhaustGlow)" opacity="0.55" />
      <path d="M38 72 L14 88 L22 96 L42 84 Z" fill="url(#wingFill)" stroke="rgba(180,170,150,0.4)" strokeWidth="0.8" />
      <path d="M82 72 L106 88 L98 96 L78 84 Z" fill="url(#wingFill)" stroke="rgba(180,170,150,0.4)" strokeWidth="0.8" />
      <path
        d="M60 12 C72 12 78 28 78 48 L76 98 C76 108 70 114 60 114 C50 114 44 108 44 98 L42 48 C42 28 48 12 60 12 Z"
        fill="url(#hullFill)"
        stroke="rgba(200,190,170,0.5)"
        strokeWidth="1"
      />
      <path d="M48 38 H72 M47 58 H73 M46 78 H74" stroke="rgba(120,110,95,0.35)" strokeWidth="0.6" />
      <path d="M60 28 V98" stroke="rgba(140,130,115,0.25)" strokeWidth="0.5" />
      <ellipse cx="60" cy="38" rx="10" ry="14" fill="url(#cockpitFill)" />
      <ellipse cx="60" cy="36" rx="7" ry="10" fill="url(#cockpitGlass)" opacity="0.9" />
      <path d="M56 32 Q60 28 64 32" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" fill="none" />
      <path d="M60 48 L66 68 L54 68 Z" fill="url(#finFill)" stroke="rgba(180,170,150,0.35)" strokeWidth="0.6" />
      <rect x="46" y="98" width="12" height="22" rx="4" fill="url(#nacelleFill)" stroke="rgba(150,140,125,0.45)" strokeWidth="0.7" />
      <rect x="62" y="98" width="12" height="22" rx="4" fill="url(#nacelleFill)" stroke="rgba(150,140,125,0.45)" strokeWidth="0.7" />
      <ellipse cx="52" cy="122" rx="7" ry="4" fill="#3a3835" stroke="rgba(100,95,85,0.6)" strokeWidth="0.6" />
      <ellipse cx="68" cy="122" rx="7" ry="4" fill="#3a3835" stroke="rgba(100,95,85,0.6)" strokeWidth="0.6" />
      <ellipse cx="52" cy="121" rx="4" ry="2.2" fill="url(#engineCoreL)" />
      <ellipse cx="68" cy="121" rx="4" ry="2.2" fill="url(#engineCoreR)" />
      <path d="M60 14 L63 26 L57 26 Z" fill="rgba(255,255,255,0.18)" />
      <defs>
        <linearGradient id="hullFill" x1="60" y1="12" x2="60" y2="114" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f0ebe0" /><stop offset="0.35" stopColor="#d8d0c0" />
          <stop offset="0.7" stopColor="#b0a898" /><stop offset="1" stopColor="#8a8278" />
        </linearGradient>
        <linearGradient id="wingFill" x1="60" y1="72" x2="60" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c8c0b0" /><stop offset="1" stopColor="#989080" />
        </linearGradient>
        <linearGradient id="finFill" x1="60" y1="48" x2="60" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d0c8b8" /><stop offset="1" stopColor="#a09888" />
        </linearGradient>
        <linearGradient id="nacelleFill" x1="52" y1="98" x2="52" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b8b0a0" /><stop offset="1" stopColor="#787068" />
        </linearGradient>
        <radialGradient id="cockpitFill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 38) scale(12)">
          <stop stopColor="#2a3545" /><stop offset="1" stopColor="#1a2030" />
        </radialGradient>
        <radialGradient id="cockpitGlass" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58 34) scale(10)">
          <stop stopColor="rgba(180,220,255,0.7)" /><stop offset="0.6" stopColor="rgba(80,140,200,0.35)" />
          <stop offset="1" stopColor="rgba(40,80,120,0.1)" />
        </radialGradient>
        <radialGradient id="engineCoreL" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52 121) scale(6)">
          <stop stopColor="#fffef0" /><stop offset="0.45" stopColor="#e8c987" /><stop offset="1" stopColor="#e87040" />
        </radialGradient>
        <radialGradient id="engineCoreR" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(68 121) scale(6)">
          <stop stopColor="#fffef0" /><stop offset="0.45" stopColor="#e8c987" /><stop offset="1" stopColor="#e87040" />
        </radialGradient>
        <radialGradient id="exhaustGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 118) scale(24 14)">
          <stop stopColor="rgba(255,200,120,0.5)" /><stop offset="0.5" stopColor="rgba(232,150,80,0.2)" />
          <stop offset="1" stopColor="rgba(232,100,40,0)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function FlyingShip({ reduced }) {
  const shipRef = useRef(null);
  const canvasRef = useRef(null);
  const stateRef = useRef({ x: 0, y: 0, rot: -22, vx: 0, vy: 0 });
  const keysRef = useRef({});
  const collectiblesRef = useRef([]);
  const enemiesRef = useRef([]);
  const particlesRef = useRef([]);
  const pilotRef = useRef(false);
  const touchRef = useRef(null);
  const healthRef = useRef(3);
  const hitFlashRef = useRef(0);

  const [pilotMode, setPilotMode] = useState(false);
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(3);
  const [mounted, setMounted] = useState(false);
  const [showPilotPrompt, setShowPilotPrompt] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (reduced) return undefined;
    if (sessionStorage.getItem('pilotPromptDismissed')) return undefined;
    const timer = setTimeout(() => setShowPilotPrompt(true), 4500);
    return () => clearTimeout(timer);
  }, [reduced]);

  const dismissPilotPrompt = useCallback(() => {
    setShowPilotPrompt(false);
    sessionStorage.setItem('pilotPromptDismissed', '1');
  }, []);

  pilotRef.current = pilotMode;

  const exitPilot = useCallback(() => {
    setPilotMode(false);
    document.body.classList.remove('pilot-locked');
    keysRef.current = {};
    touchRef.current = null;
    enemiesRef.current = [];
    const smoother = window.ScrollSmoother?.get?.();
    if (smoother) smoother.paused(false);
  }, []);

  const startPilot = useCallback(() => {
    setShowPilotPrompt(false);
    sessionStorage.setItem('pilotPromptDismissed', '1');
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    stateRef.current = {
      x: vw * 0.5,
      y: vh * 0.45,
      rot: -22,
      vx: 0,
      vy: 0,
    };
    collectiblesRef.current = Array.from({ length: 6 }, () => spawnCollectible(vw, vh));
    enemiesRef.current = Array.from({ length: 4 }, () => spawnEnemy(vw));
    particlesRef.current = [];
    healthRef.current = 3;
    hitFlashRef.current = 0;
    setScore(0);
    setHealth(3);
    setPilotMode(true);
    document.body.classList.add('pilot-locked');
    const smoother = window.ScrollSmoother?.get?.();
    if (smoother) smoother.paused(true);
  }, []);

  useEffect(() => {
    if (reduced) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape' && pilotRef.current) {
        e.preventDefault();
        exitPilot();
        return;
      }
      if (!pilotRef.current) return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'].includes(e.key)) {
        e.preventDefault();
        keysRef.current[e.key] = true;
      }
    };
    const onKeyUp = (e) => {
      keysRef.current[e.key] = false;
    };

    window.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('keyup', onKeyUp, true);
    return () => {
      window.removeEventListener('keydown', onKeyDown, true);
      window.removeEventListener('keyup', onKeyUp, true);
    };
  }, [reduced, exitPilot]);

  useEffect(() => {
    if (!mounted) return undefined;

    const ship = shipRef.current;
    const canvas = canvasRef.current;
    if (!ship || !canvas || reduced) return undefined;

    const ctx = canvas.getContext('2d');
    let frameId;
    const maxParticles = 70;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawnParticle = (x, y, rot, boost = 1) => {
      const list = particlesRef.current;
      if (list.length >= maxParticles) list.shift();
      const rad = ((rot + 180) * Math.PI) / 180;
      const spread = (Math.random() - 0.5) * 0.35;
      list.push({
        x: x + Math.sin(rad) * 8,
        y: y + Math.cos(rad) * 8,
        vx: Math.sin(rad + spread) * (1.2 + Math.random() * 2.2) * boost,
        vy: Math.cos(rad + spread) * (1.2 + Math.random() * 2.2) * boost,
        life: 1,
        size: 1.5 + Math.random() * 2.5,
      });
    };

    const drawParticles = () => {
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0.04);
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.018;
        p.size *= 0.985;
        const alpha = p.life * 0.65;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        grad.addColorStop(0, `rgba(255,248,230,${alpha})`);
        grad.addColorStop(0.4, `rgba(232,201,135,${alpha * 0.6})`);
        grad.addColorStop(1, 'rgba(232,120,60,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawCollectibles = (time) => {
      for (const c of collectiblesRef.current) {
        const glow = 0.7 + Math.sin(time / 400 + c.pulse) * 0.3;
        const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r * 2.2);
        grad.addColorStop(0, `rgba(255,240,200,${glow})`);
        grad.addColorStop(0.5, `rgba(232,201,135,${glow * 0.7})`);
        grad.addColorStop(1, 'rgba(232,201,135,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r * 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255,250,235,${glow})`;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawEnemy = (e) => {
      ctx.save();
      ctx.translate(e.x, e.y);
      ctx.rotate((e.rot * Math.PI) / 180);
      ctx.fillStyle = 'rgba(220,50,45,0.95)';
      ctx.strokeStyle = 'rgba(255,120,110,0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, -e.r);
      ctx.lineTo(e.r * 0.85, e.r * 0.75);
      ctx.lineTo(0, e.r * 0.35);
      ctx.lineTo(-e.r * 0.85, e.r * 0.75);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,180,170,0.9)';
      ctx.beginPath();
      ctx.arc(0, -4, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const updateEnemies = (vw, vh) => {
      for (const e of enemiesRef.current) {
        e.x += e.vx;
        e.y += e.vy;
        e.rot += 2.5;
        if (e.y > vh + 50 || e.x < -50 || e.x > vw + 50) {
          e.x = 40 + Math.random() * (vw - 80);
          e.y = -40;
          e.vx = (Math.random() - 0.5) * 2.2;
          e.vy = 1.4 + Math.random() * 2.2;
        }
      }
    };

    const applyShipTransform = (x, y, rot, bank = 0) => {
      const skew = bank ? ` skewX(${bank * 0.15}deg)` : '';
      ship.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${rot}deg)${skew}`;
    };

    const tick = (time) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = stateRef.current;
      const prevX = s.x;
      const prevY = s.y;

      if (pilotRef.current) {
        const keys = keysRef.current;
        const accel = 0.85;
        let ax = 0;
        let ay = 0;
        if (keys.ArrowUp || keys.w || keys.W) ay -= accel;
        if (keys.ArrowDown || keys.s || keys.S) ay += accel;
        if (keys.ArrowLeft || keys.a || keys.A) ax -= accel;
        if (keys.ArrowRight || keys.d || keys.D) ax += accel;

        const touch = touchRef.current;
        if (touch) {
          ax += (touch.x - s.x) * 0.035;
          ay += (touch.y - s.y) * 0.035;
        }

        s.vx = (s.vx + ax) * 0.86;
        s.vy = (s.vy + ay) * 0.86;
        s.x = Math.max(40, Math.min(vw - 40, s.x + s.vx));
        s.y = Math.max(70, Math.min(vh - 40, s.y + s.vy));

        const speed = Math.hypot(s.vx, s.vy);
        if (speed > 0.15) {
          s.rot = (Math.atan2(s.vy, s.vx) * 180) / Math.PI + 90;
        }

        for (let i = collectiblesRef.current.length - 1; i >= 0; i -= 1) {
          const c = collectiblesRef.current[i];
          if (Math.hypot(s.x - c.x, s.y - c.y) < c.r + 28) {
            collectiblesRef.current.splice(i, 1);
            collectiblesRef.current.push(spawnCollectible(vw, vh));
            setScore((prev) => prev + 10);
          }
        }

        updateEnemies(vw, vh);
        for (const e of enemiesRef.current) {
          if (Math.hypot(s.x - e.x, s.y - e.y) < e.r + 22) {
            if (hitFlashRef.current <= 0) {
              hitFlashRef.current = 45;
              healthRef.current -= 1;
              setHealth(healthRef.current);
              setScore((prev) => Math.max(0, prev - 5));
              e.x = 40 + Math.random() * (vw - 80);
              e.y = -40;
              if (healthRef.current <= 0) {
                exitPilot();
                break;
              }
            }
          }
        }
        if (hitFlashRef.current > 0) hitFlashRef.current -= 1;

        applyShipTransform(s.x, s.y, s.rot, 0);
        if (speed > 0.2 && Math.random() > 0.2) spawnParticle(s.x, s.y, s.rot, 1.3);
      } else {
        const scrollY = window.ScrollSmoother?.get?.()?.scrollTop?.() ?? window.scrollY;
        const wave = Math.sin(scrollY / 380 + time / 2400);
        const wave2 = Math.cos(scrollY / 620 + time / 3400);
        const drift = Math.sin(time / 900) * 0.04;
        const targetX = vw * (0.12 + 0.76 * ((wave + 1) / 2));
        const targetY = vh * (0.3 + wave2 * 0.05 + drift);

        s.x += (targetX - s.x) * 0.065;
        s.y += (targetY - s.y) * 0.065;
        s.vx = s.x - prevX;
        s.vy = s.y - prevY;

        const speed = Math.hypot(s.vx, s.vy);
        let targetRot = speed > 0.08 ? (Math.atan2(s.vy, s.vx) * 180) / Math.PI + 90 : -18 + wave * 14;
        let rotDiff = targetRot - s.rot;
        while (rotDiff > 180) rotDiff -= 360;
        while (rotDiff < -180) rotDiff += 360;
        s.rot += rotDiff * 0.07;

        const bank = Math.max(-18, Math.min(18, s.vx * 2.2));
        applyShipTransform(s.x, s.y, s.rot, bank);

        if (speed > 0.15 && Math.random() > 0.35) spawnParticle(s.x, s.y, s.rot);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (pilotRef.current) {
        for (const e of enemiesRef.current) drawEnemy(e);
        drawCollectibles(time);
        if (hitFlashRef.current > 0) {
          ctx.fillStyle = `rgba(220,50,45,${Math.min(0.25, hitFlashRef.current / 80)})`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
      drawParticles();

      frameId = requestAnimationFrame(tick);
    };

    resizeCanvas();
    stateRef.current = {
      x: window.innerWidth * 0.68,
      y: window.innerHeight * 0.32,
      rot: -22,
      vx: 0,
      vy: 0,
    };

    window.addEventListener('resize', resizeCanvas);

    const onTouchStart = (e) => {
      if (!pilotRef.current) return;
      const t = e.touches[0];
      touchRef.current = { x: t.clientX, y: t.clientY };
    };
    const onTouchMove = (e) => {
      if (!pilotRef.current) return;
      e.preventDefault();
      const t = e.touches[0];
      touchRef.current = { x: t.clientX, y: t.clientY };
    };
    const onTouchEnd = () => {
      touchRef.current = null;
    };

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);

    const begin = () => {
      frameId = requestAnimationFrame(tick);
    };

    if (document.body.classList.contains('is-launched')) {
      begin();
    } else {
      window.addEventListener('portfolio:launched', begin, { once: true });
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('portfolio:launched', begin);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      document.body.classList.remove('pilot-locked');
    };
  }, [reduced, exitPilot, mounted]);

  if (reduced) return null;

  const layer = (
    <>
      <canvas
        className={`ship-exhaust${pilotMode ? ' is-pilot' : ''}`}
        ref={canvasRef}
        aria-hidden={!pilotMode}
      />
      <div className={`flying-ship${pilotMode ? ' is-pilot' : ''}`} ref={shipRef} aria-hidden="true">
        <ShipSvg />
        <div className="ship-engine ship-engine-l" />
        <div className="ship-engine ship-engine-r" />
        <div className="ship-plume" />
      </div>
    </>
  );

  const ui = mounted
    ? createPortal(
        !pilotMode ? (
          <>
            {showPilotPrompt ? (
              <div className="pilot-callout" role="dialog" aria-labelledby="pilot-callout-title">
                <button type="button" className="pilot-callout-close" onClick={dismissPilotPrompt} aria-label="Dismiss">
                  ✕
                </button>
                <p className="pilot-callout-tag">FLIGHT TEST AVAILABLE</p>
                <h3 className="pilot-callout-title" id="pilot-callout-title">
                  Take the pilot test
                </h3>
                <p className="pilot-callout-text">
                  Fly the ship, collect gold orbs, and dodge red enemies. Can you beat your score?
                </p>
                <button type="button" className="pilot-callout-cta" onClick={startPilot}>
                  START FLIGHT TEST
                </button>
              </div>
            ) : null}
            <button type="button" className="pilot-toggle" onClick={startPilot} aria-label="Start pilot mini game">
              <span className="pilot-toggle-icon" aria-hidden="true">✈</span>
              <span className="pilot-toggle-text">TAKE FLIGHT TEST</span>
            </button>
          </>
        ) : (
          <>
            <div className="pilot-overlay" aria-hidden="true" />
            <button type="button" className="pilot-exit" onClick={exitPilot} aria-label="Exit pilot mode">
              ✕ EXIT
            </button>
            <div className="pilot-hud" role="status" aria-live="polite">
              <div className="pilot-score">
                SCORE <b>{score}</b>
              </div>
              <div className="pilot-health">
                SHIELD{' '}
                {Array.from({ length: 3 }, (_, i) => (
                  <span key={i} className={i < health ? 'on' : 'off'} aria-hidden="true">◆</span>
                ))}
              </div>
              <p className="pilot-help">WASD / Arrows — collect gold · avoid red enemies</p>
            </div>
          </>
        ),
        document.body
      )
    : null;

  return (
    <>
      {mounted ? createPortal(layer, document.body) : null}
      {ui}
    </>
  );
}
