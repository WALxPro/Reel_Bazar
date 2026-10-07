import React from "react";

const LEAF_OPACITY = 0.22;

// top = visible, bottom = fades into the background
const LEAF_MASK =
  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.05) 100%)";

const leafStyle = {
  opacity: LEAF_OPACITY,
  maskImage: LEAF_MASK,
  WebkitMaskImage: LEAF_MASK,
};

const TrustedBy = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black px-5 pt-36 pb-24 sm:px-8 md:pt-44 md:pb-32">
      <div className="relative mx-auto flex min-h-[300px] w-full max-w-[940px] flex-col items-center justify-center text-center">
        {/* Laurels (desktop only) */}
        <img
          src="/leafRight.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/2 hidden h-[250px] w-auto -translate-y-1/2 select-none md:block"
          style={leafStyle}
        />
        <img
          src="/leafLeft.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 hidden h-[250px] w-auto -translate-y-1/2 select-none md:block"
          style={leafStyle}
        />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[26px] font-medium leading-tight tracking-[-0.04em] text-white sm:text-[32px] md:text-[40px]">
            Editing For Every Format You Publish
          </h2>

          <p className="mt-3 max-w-[500px] text-sm leading-snug text-white/70 md:text-lg">
            Whether it's one Reel or twenty videos a month, we build the edit
            around the platform, the audience and your brand
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;