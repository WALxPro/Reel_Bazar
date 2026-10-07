import { Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState } from "react";

const AboutHero = () => {
     const videoRef = useRef(null);
      const [muted, setMuted] = useState(true);
    
      const toggleMute = () => {
        if (!videoRef.current) return;
    
        videoRef.current.muted = !videoRef.current.muted;
        setMuted(videoRef.current.muted);
      };
  return (
    <section
      className="
        relative
        w-full
        min-h-[627px]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      {/* Background Video */}
      <video
              ref={videoRef}

        src="/about.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[50%_50%]
          md:object-center
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="
          absolute
           bottom-7
          left-10
          z-10
          flex
          h-[55px]
          w-[55px]
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
        {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </section>
  );
};

export default AboutHero;