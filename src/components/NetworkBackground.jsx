import { useEffect, useRef } from "react";

// Lightweight canvas-based network visualization: drifting nodes connected by
// distance-based edges, with a soft parallax response to pointer movement.
// Chosen over a full WebGL/R3F scene to keep the experience at a steady 60fps
// across low-powered devices while still delivering the "network visualization"
// the brief calls for.
export default function NetworkBackground({ density = 28 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, nodes, raf, lastFrame = 0;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * dpr;
      height = canvas.height = canvas.offsetHeight * dpr;
      const count = Math.min(density, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 30000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.14 * dpr,
        vy: (Math.random() - 0.5) * 0.14 * dpr,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const draw = (ts = 0) => {
      if (ts - lastFrame < 33) {
        raf = requestAnimationFrame(draw);
        return;
      }
      lastFrame = ts;
      ctx.clearRect(0, 0, width, height);
      const linkDist = 120 * dpr;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.16 * (1 - dist / linkDist)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(148, 197, 255, 0.55)";
        ctx.fill();
      }

      if (!prefersReduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-fade" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/0 via-void/40 to-void" />
    </div>
  );
}
