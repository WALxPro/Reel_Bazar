import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [project]);

  if (!project) return null;

  return createPortal(
    <div className="rb-modal" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }} role="presentation">
      <article className="rb-modal-card" role="dialog" aria-modal="true" aria-label={`${project.brand} project details`} tabIndex={-1}>
        <button type="button" className="rb-close" onClick={onClose} aria-label="Close project">×</button>
      
        <div className="rb-modal-media">
  {project.videoUrl ? (
    <video
      src={project.videoUrl}
      poster={project.thumbnail}
      controls
      autoPlay
      playsInline
      preload="metadata"
    />
  ) : project.thumbnail ? (
    <img
      src={project.thumbnail}
      alt={project.label || project.brand}
    />
  ) : (
    <span className="rb-instagram-mock" aria-hidden="true">
      {/* Existing Instagram mockup */}
    </span>
  )}
</div>
        <div className="rb-modal-content">
          <p className="rb-mono">{project.type}</p>
          <h2>{project.brand}</h2>
          <p>{project.description}</p>
          <h3>What we delivered</h3>
          <ul>{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="rb-modal-actions">
             
            <Link className="rb-button" to="/contact" onClick={onClose}>Start a similar project ↗</Link>
          </div>
        </div>
      </article>
    </div>,
    document.body
  );
}