import React from "react";
import { Reveal } from "./Motion";

const CaseStudyHero = () => {
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
        src="/case.mp4"
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
        "
      />

      {/* Dark Overlay (optional) */}
      <div
        className="
          absolute
          inset-0
          bg-black/30
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <Reveal variant="heading"><h1
          className="
            text-[40px]
            font-bold
            leading-none
            tracking-[-0.04em]
            text-white
            sm:text-[52px]
            md:text-[64px]
          "
        >
          Work that holds attention.
        </h1></Reveal>

        <Reveal variant="paragraph" delay={0.12}><p
          className="
            mt-4
            max-w-[520px]
            text-[16px]
            leading-snug
            text-white/80
            md:text-[22px]
          "
          style={{ fontFamily: '"Satoshi", sans-serif' }}
        >
          Filter by format and press play. Every cut below was edited in-house from raw client footage.
        </p></Reveal>
      </div>

     
    </section>
  );
};

export default CaseStudyHero;
