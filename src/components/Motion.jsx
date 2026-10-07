import { useEffect, useRef, useState } from "react";

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Reveal({ children, className = "", delay = 0, variant = "section" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion() || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18, rootMargin: "0px 0px -8%" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-reveal motion-reveal--${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}s` }}
    >
      {children}
    </div>
  );
}

// Kept available for the requested name/logo treatment without changing copy elsewhere.
export function AnimatedWord({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion() || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2, rootMargin: "0px 0px -8%" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`motion-word ${visible ? "is-visible" : ""} ${className}`} aria-label={children}>
      {[...children].map((letter, index) => (
        <span key={`${letter}-${index}`} style={{ "--letter-delay": `${delay + index * 0.12}s` }} aria-hidden="true">
          {letter}
        </span>
      ))}
    </span>
  );
}
