import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
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
        h-[85vh]
        min-h-[500px]
        w-full
        overflow-hidden
        bg-black
        sm:h-[85vh]
        md:h-[90vh]
        lg:h-[85vh]
      "
    >
      <video
        ref={videoRef}
        src="/public/Home.mp4"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          hero-media-reveal
        "
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
       
      </video>

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
}
