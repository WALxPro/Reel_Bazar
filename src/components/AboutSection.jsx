import React from "react";
import { Reveal } from "./Motion";

const AboutSection = () => {
  return (
    <section
      className="
        w-full
        bg-black
        px-5
        py-16
        sm:px-8
        md:px-12
        lg:px-20
        lg:py-24
        
      "
    >
      {/* Top Content */}
      <div
        className="
          mx-auto
          max-w-6xl
          flex
          flex-col
          gap-10
          lg:flex-row
          lg:items-center
          lg:gap-16
        "
      >
        {/* Left Content */}
        <div
          className="
            w-full
            lg:w-[38%]
          "
        >
          <Reveal variant="heading"><h2
            className="
              font-serif
              text-4xl
              italic
              font-medium
              text-white
              sm:text-5xl
              lg:text-[38px]
            "
          >
            About Us
          </h2></Reveal>

          <Reveal variant="paragraph" delay={0.1}><p
            className="
    mt-6
    text-sm
    leading-relaxed
    text-white/85
    sm:text-base
    lg:text-lg
  "
          >
            At TheReelBazar, we believe every video has a story waiting to be
            discovered. Our mission is simple: transform raw footage into
            high-impact visual content that captures attention and builds
            stronger connections between brands and their audiences.
            <br />
            
            In a digital world where attention is limited, great editing makes
            the difference. We combine creative storytelling, precise timing,
            and modern editing techniques to create videos that feel engaging,
            authentic, and designed for today's platforms.
            
            <br />
            From short-form reels and social media content to advertisements and
            branded videos, we help creators, businesses, and brands turn their
            ideas into content that people want to watch.
            <br />
            
            At TheReelBazar, every cut has a purpose. We don't just edit videos,
            we craft visual experiences that help brands stand out and leave a
            lasting impression.
          </p></Reveal>
        </div>

        {/* Video */}
        <div
          className="
            w-full
            lg:w-[62%]
          "
        >
          <Reveal variant="image"><video
            src="/about-section.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="
              h-[280px]
              w-full
              rounded-lg
                            object-cover
              shadow-2xl
              sm:h-[380px]
              md:h-[480px]
              lg:h-[500px]
            "
          /></Reveal>
        </div>
      </div>

      {/* Bottom Text */}
      <div
        className="
          mx-auto
          mt-12
          max-w-6xl
          lg:mt-16
        "
      >
       <Reveal variant="paragraph"><p
  className="
    text-sm
    leading-relaxed
    text-white/85
    sm:text-base
    lg:text-lg
  "
>
  Our approach goes beyond traditional video editing. We take the time to
  understand your brand, audience, and goals to create content that feels
  intentional and delivers results.

  <br />
  <br />

  Whether you're building a personal brand, growing a business, or creating
  content at scale, TheReelBazar provides the creative expertise needed to
  turn ideas into memorable videos.

  <br />
  <br />

  <strong className="text-white italic">
    TheReelBazar  Where ideas become videos people remember.
  </strong>
</p></Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
