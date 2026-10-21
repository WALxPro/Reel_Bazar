
import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const TiltedVideoCard = ({
  videoUrl,
  poster,
  transform = "none",
  width = "292px",
  height = "632px",
  borderRadius = "26px 26px 0 0",
  videoBorderRadius = "20px 20px 0 0",
  autoPlay = true,
}) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div
      className="relative shrink-0"
      style={{
        transform,
        width,
        height,
        maxWidth: "100%",
      }}
    >
      <div
        className="
          relative
          flex
          h-full
          w-full
          overflow-hidden
          bg-white
        "
        style={{
          borderRadius,
          padding: "7px 7px 0",
          boxShadow:
            "0px 24px 52px rgba(13,13,13,0.2)",
        }}
      >
        <div className="relative h-full w-full overflow-hidden">
          <video
            ref={videoRef}
            src={videoUrl}
            poster={poster}
            loop
            muted
            playsInline
            autoPlay={autoPlay}
            preload="metadata"
            className="
              block
              h-full
              w-full
              object-cover
            "
            style={{
              borderRadius: videoBorderRadius,
            }}
          />

          {/* MUTE / UNMUTE BUTTON */}
          <button
            type="button"
            onClick={toggleMute}
            className="
              absolute
              bottom-14
              right-4
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/15
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/25
            "
            style={{
              boxShadow:
                "0px 8px 32px rgba(13,13,13,0.3)",
            }}
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? (
              <VolumeX size={20} />
            ) : (
              <Volume2 size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TiltedVideoCard;
