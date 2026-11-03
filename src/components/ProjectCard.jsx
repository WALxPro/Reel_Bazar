import { useEffect, useRef, useState } from "react";
import ProjectModal from "./ProjectModal";

const typeClass = {
  Websites: "website",
  "Social media": "social",
  "Video editing": "video",
};

function WebsiteMock() {
  return (
    <span className="rb-browser-mock" aria-hidden="true">
      <span className="rb-browser-bar"><i /><i /><i /><u /></span>
      <span className="rb-browser-hero"><i /><i /></span>
      <span className="rb-browser-blocks"><i /><i /><i /></span>
    </span>
  );
}

function SocialMock() {
  return (
    <span className="rb-instagram-mock" aria-hidden="true">
      <span className="rb-instagram-profile"><i /><u /></span>
      <span className="rb-instagram-grid">
        {Array.from({ length: 9 }, (_, i) => <i key={i} />)}
      </span>
    </span>
  );
}

export default function ProjectCard({ project }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const isVideo = project.type === "Video editing";
  const hasVideo = isVideo && Boolean(project.videoUrl);
  const hasImage = !isVideo && Boolean(project.thumbnail);
  const hasMedia = hasVideo || hasImage;

  // Viewport ke paas aane par hi video load karo
  useEffect(() => {
    const card = cardRef.current;
    if (!card || !("IntersectionObserver" in window)) {
      setNearViewport(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  // Card screen par ho to video chale, warna ruk jaye
  useEffect(() => {
    const card = cardRef.current;
    if (!card || !hasVideo) return undefined;
    if (!("IntersectionObserver" in window)) {
      setPlaying(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [hasVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  }, [playing, nearViewport]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setModalOpen(true);
    }
  };

  return (
    <>
      <article ref={cardRef} className="rb-project-card">
        <div className={`rb-project-thumbnail${hasMedia ? " has-media" : ""}`}>
          {/* Video */}
          {hasVideo && (
            <video
              ref={videoRef}
              className="rb-project-media"
              src={nearViewport ? project.videoUrl : undefined}
              poster={project.thumbnail}
              muted
              loop
              playsInline
              preload="none"
              aria-label={`${project.brand} video preview`}
            />
          )}
          {isVideo && !project.videoUrl && (
            <span className="rb-video-mock"><i /><b /></span>
          )}

          {/* Social / Website: real image ho to wo, warna mock */}
          {hasImage && (
            <img
              className="rb-project-media"
              src={project.thumbnail}
              alt={`${project.brand}: ${project.label}`}
              loading="lazy"
            />
          )}
          {!isVideo && !project.thumbnail && project.type === "Websites" && <WebsiteMock />}
          {!isVideo && !project.thumbnail && project.type === "Social media" && <SocialMock />}

          {isVideo && <span className="rb-video-play" aria-hidden="true">▶</span>}
          {isVideo && <span className="rb-video-progress" aria-hidden="true"><i /></span>}
        </div>

        <div className="rb-project-info">
          <span className={`rb-project-type ${typeClass[project.type] || ""}`}>
            {project.type}
          </span>
          <h3>{project.brand}</h3>
          <p>{project.label}</p>
        </div>

        <button
          type="button"
          className="rb-project-open"
          onClick={() => setModalOpen(true)}
          onKeyDown={handleKeyDown}
          aria-label={`View ${project.brand}: ${project.label}`}
        />
      </article>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}