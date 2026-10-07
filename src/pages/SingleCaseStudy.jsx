import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VolumeX, Volume2 } from "lucide-react";
import { projects } from "../data";

const SingleCaseStudy = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [aspectRatio, setAspectRatio] = useState(16 / 9);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const applyAspectRatio = () => {
    const vid = videoRef.current;

    if (!vid || !vid.videoWidth || !vid.videoHeight) return;

    setAspectRatio(vid.videoWidth / vid.videoHeight);
  };

  useEffect(() => {
    const vid = videoRef.current;

    if (!vid) return;

    if (vid.readyState >= 1) {
      applyAspectRatio();
    }
  }, [project?.video]);

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-white/60">Project not found.</p>
      </section>
    );
  }

  return (
    <section className="w-full bg-black px-5 pb-[100px] pt-[120px] sm:px-8 md:px-12 md:pt-[150px] lg:px-20">
      <div className="mx-auto w-full max-w-6xl">
        {/* TOP CONTENT */}
        <div className="mx-auto mb-10 flex max-w-4xl flex-col items-center text-center">
          {/* Type */}
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#1c1c1c] px-4 py-2 text-sm text-white/80">
            <span className="text-white/40">•</span>
            {project.type}
          </div>

          {/* Project Name */}
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          {/* Small info */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-white/50">
            {project.number && <span>{project.number}</span>}

            {project.orientation && (
              <>
                <span>•</span>
                <span>{project.orientation}</span>
              </>
            )}

            {project.category && (
              <>
                <span>•</span>
                <span>{project.category}</span>
              </>
            )}
          </div>
        </div>

        {/* VIDEO */}
        {/* VIDEO */}
        <div className="flex w-full justify-center">
          <div
            className="
      relative
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-[#0d0d0d]
    "
            style={{
              aspectRatio,
              width: "auto",
              height: "min(65vh, 580px)",
              maxWidth: "100%",
            }}
          >
            <video
              ref={videoRef}
              src={project.video}
              onLoadedMetadata={applyAspectRatio}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-contain"
            />

            <button
              onClick={toggleMute}
              className="
        absolute
        bottom-4
        left-4
        z-10
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        bg-white/[0.12]
        text-white
        backdrop-blur-xl
      "
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-[15px] leading-7 text-white/60 sm:text-base">
            {project.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCaseStudy;
