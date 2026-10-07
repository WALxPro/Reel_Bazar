import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";

const ProjectCard = ({
  number = "0.7",
  title = "Lifestyle Reset",
  type = "Long Form",
  category = "Lifestyle",
  video,
  slug,
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [muted, setMuted] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false); // controls src attach (lazy load)
  const [isInView, setIsInView] = useState(false); // controls play/pause

  // Lazy-load: only attach the video src once the card is near the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const loadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            loadObserver.disconnect(); // only need to trigger this once
          }
        });
      },
      { rootMargin: "300px 0px" }, // start loading a bit before it's visible
    );

    loadObserver.observe(el);
    return () => loadObserver.disconnect();
  }, []);

  // Play/pause: only play the video while it's actually visible on screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const playObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.4 }, // needs to be reasonably visible before playing
    );

    playObserver.observe(el);
    return () => playObserver.disconnect();
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !shouldLoad) return;

    if (isInView) {
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was blocked (e.g. browser policy) — safe to ignore
        });
      }
    } else {
      vid.pause();
    }
  }, [isInView, shouldLoad]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div
      ref={containerRef}
      className="
        w-full
        self-start
        overflow-hidden
        rounded-2xl
        border
        border-white/25
        bg-[#121212]
        transition-transform
        duration-300
        hover:-translate-y-1
      "
    >
      {/* Top */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-[38px]
              min-w-[38px]
              items-center
              justify-center
              rounded-[10px]
              bg-[#212121]
              px-2
              text-[18px]
              text-white
            "
          >
            {number}
          </div>

          <h4 className="text-[18px] font-medium text-white">{title}</h4>
        </div>

        <div className="h-2 w-2 rounded-full bg-[#717171]" />
      </div>

      {/* Video */}
      <div className="relative w-full bg-[#1a1a1a] min-h-[200px]">
        {shouldLoad ? (
          <video
            ref={videoRef}
            src={video}
            loop
            muted
            playsInline
            preload="none"
            className="block w-full h-auto"
          />
        ) : (
          // lightweight placeholder while the video hasn't loaded yet
          <div className="flex h-[200px] w-full items-center justify-center">
            <div className="h-8 w-8 animate-pulse rounded-full bg-white/10" />
          </div>
        )}

        <Link
          to={`/case-study/${slug}`}
          className="
    absolute
    right-4
    bottom-4
    z-10
    inline-flex
    items-center
    gap-[6px]
    rounded-full
    border
    border-white/20
    bg-white/[0.12]
    px-[18px]
    py-[7px]
    text-[12px]
    font-semibold
    text-white
    backdrop-blur-lg
  "
        >
          See Case Study <ArrowUpRight size={17} />
        </Link>

        {/* Mute */}
        <button
          onClick={toggleMute}
          className="
            absolute
            left-4
            bottom-4
            z-10
            flex
            h-[35px]
            w-[35px]
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/[0.12]
            text-white
            backdrop-blur-xl
          "
        >
          {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
        </button>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between px-4 py-4">
        <h5 className="text-sm text-white/70">{type}</h5>

        <div
          className="
            rounded-[10px]
            bg-[#212121]
            px-3
            py-2
            text-xs
            text-white/80
          "
        >
          {category}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
