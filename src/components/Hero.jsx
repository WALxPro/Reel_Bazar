import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function ReelGraphic() {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="98" />
      <circle cx="100" cy="100" r="92" strokeDasharray="1.5 3" />
      <circle cx="100" cy="100" r="30" />
      <circle cx="100" cy="100" r="9" />
      <circle cx="100" cy="46" r="19" />
      <circle cx="146.8" cy="73" r="19" />
      <circle cx="146.8" cy="127" r="19" />
      <circle cx="100" cy="154" r="19" />
      <circle cx="53.2" cy="127" r="19" />
      <circle cx="53.2" cy="73" r="19" />
      <path d="M100 9V25M100 175V191M21 54.5L35 62.5M165 137.5L179 145.5M21 145.5L35 137.5M165 62.5L179 54.5" />
    </svg>
  );
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: 0.4 + Math.random() * 1.5,
      speed: 0.0002 + Math.random() * 0.0007,
      phase: Math.random() * Math.PI * 2,
      twinkle: 0.5 + Math.random() * 1.5,
    }));

    let width = 0;
    let height = 0;
    let animationFrame;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (!reducedMotion) {
          particle.y -= particle.speed;
          particle.x += Math.sin(time / 2000 + particle.phase) * 0.0002;
          if (particle.y < -0.02) {
            particle.y = 1.02;
            particle.x = Math.random();
          }
        }

        const opacity =
          0.25 +
          0.6 *
            Math.abs(
              Math.sin((time / 900) * particle.twinkle + particle.phase),
            );
        context.beginPath();
        context.arc(
          particle.x * width,
          particle.y * height,
          particle.radius * (width / 1600 + 0.6),
          0,
          Math.PI * 2,
        );
        context.fillStyle = `rgba(255, 226, 170, ${opacity.toFixed(2)})`;
        context.shadowColor = "rgba(255, 210, 140, 0.9)";
        context.shadowBlur = 8;
        context.fill();
      });

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const handleResize = () => {
      resize();
      if (reducedMotion) draw();
    };

    resize();
    draw();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <header className="hero-banner" aria-label="TheReelBazar creative video studio">
      <div className="hero-reel hero-reel--left">
        <ReelGraphic />
      </div>
      <div className="hero-reel hero-reel--right">
        <ReelGraphic />
      </div>

      <div className="hero-light-streak" aria-hidden="true" />
      <canvas ref={canvasRef} className="hero-dust" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-label">Creative Video Studio</p>
        <h1 className="hero-logo">
          <span className="hero-logo__the">The</span>
          <span className="hero-logo__reel">Reel</span>
          <span className="hero-logo__bazar">Bazar</span>
        </h1>
        <p className="hero-tagline">Stories, framed beautifully.</p>
      </div>

      <div className="hero-footer">
        <span>Reels&nbsp; · &nbsp;Brand Films&nbsp; · &nbsp;Ad Creatives</span>
        <Link to="/contact">Start a Project</Link>
      </div>

      <div className="hero-frame" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
    </header>
  );
}
