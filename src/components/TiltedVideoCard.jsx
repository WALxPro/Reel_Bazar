import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const TiltedVideoCard = ({
  videoUrl = "https://cdn.shopify.com/videos/c/o/v/c2bef9c47b8843e7b8dd4efab4fafcc8.mp4",
  poster = "https://framerusercontent.com/images/x8CwbIJQWF7CqfUW5XtH1girM.jpg?width=1080&height=1920",

  transform = "rotate(-5deg) skewY(8deg)",
  width = "392px",
  height = "632px",

  borderRadius = "26px 26px 0 0",
  videoBorderRadius = "20px 20px 0 0",

  boxShadow =
    "0px 24px 52px 0px rgba(13,13,13,0.2), 0px -0.72px 1.01px -1.25px rgba(0,0,0,0.07), 0px -2.75px 3.84px -2.5px rgba(0,0,0,0.06), 0px -12px 16.8px -3.75px rgba(0,0,0,0.03)",

  buttonShadow = "0px 8px 32px 0px rgba(13,13,13,0.3)",

  autoPlay = true,
}) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.muted = !vid.muted;
    setMuted(vid.muted);
  };

  return (
    <div
      className="relative"
      style={{
        transform,
        width,
        height,
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    >
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white"
        style={{
          borderRadius,
          padding: "7px 7px 0",
          boxShadow,
        }}
      >
        <div className="relative z-0 h-full w-full">
          <video
            ref={videoRef}
            src={videoUrl}
            poster={poster}
            loop
            muted
            playsInline
            autoPlay={autoPlay}
            preload="auto"
            className="block h-full w-full object-cover"
            style={{
              borderRadius: videoBorderRadius,
            }}
          />

          {/* Mute / Unmute */}
          <button
            onClick={toggleMute}
            className="absolute bottom-14 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full  border-white/20
          bg-white/[0.12]
          text-white
          backdrop-blur-xl"
            style={{ boxShadow: buttonShadow }}
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