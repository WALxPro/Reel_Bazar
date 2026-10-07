import React, { useEffect, useRef, useState } from "react";
import { Check, Upload } from "lucide-react";

const BLUE_GLOW =
  "radial-gradient(90% 80% at 50% 120%, rgba(0,54,255,0.7) 0%, rgba(15,25,180,0.59) 46.5753%, #000 100%)";

const PILL_BG =
  "linear-gradient(0deg, rgba(0, 54, 255, 0.55) -49%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%)";

const pillStyle = {
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  background: PILL_BG,
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "30px",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 2px 0px",
};

const playfair = { fontFamily: '"Playfair Display", serif' };

/* ---------- tiny visuals, one per step ---------- */

const Chip = ({ children, icon }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/80">
    {icon}
    {children}
  </span>
);

const FilesVisual = () => (
  <div className="mt-5 flex flex-wrap gap-2 rounded-xl border border-white/10 bg-black/40 p-3">
    {["Drive", "Dropbox", "WeTransfer"].map((name) => (
      <Chip key={name} icon={<Upload size={12} />}>
        {name}
      </Chip>
    ))}
  </div>
);

const tracks = [
  { label: "Captions", bars: [[6, 18], [30, 22], [60, 26]] },
  { label: "Sound", bars: [[0, 44], [50, 42]] },
  { label: "Colour", bars: [[10, 70]] },
  { label: "Graphics", bars: [[20, 14], [48, 12], [74, 16]] },
];

const TimelineVisual = ({ active }) => (
  <div className="mt-5 rounded-xl border border-white/10 bg-black/40 p-3">
    <div className="relative flex flex-col gap-2">
      {tracks.map((track) => (
        <div key={track.label} className="flex items-center gap-3">
          <span className="w-14 shrink-0 text-[10px] uppercase tracking-wider text-white/40">
            {track.label}
          </span>
          <div className="relative h-3 flex-1 rounded-full bg-white/5">
            {track.bars.map(([left, width], i) => (
              <span
                key={i}
                className="absolute top-0 h-3 rounded-full"
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                  background: "rgba(77,107,255,0.7)",
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* playhead, only over the bar area (56px label + 12px gap) */}
      <div className="pointer-events-none absolute inset-y-0 left-[68px] right-0">
        <span
          className="absolute bottom-0 top-0 w-px bg-white/80"
          style={{
            left: "8%",
            animation: "hiw-playhead 3.2s ease-in-out infinite alternate",
            animationPlayState: active ? "running" : "paused",
          }}
        />
      </div>
    </div>
  </div>
);

const comments = [
  { time: "00:12", text: "Tighten this cut" },
  { time: "00:34", text: "Make the caption bigger" },
];

const FeedbackVisual = () => (
  <div className="mt-5 flex flex-col gap-2">
    {comments.map((c) => (
      <div
        key={c.time}
        className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-3 py-2"
      >
        <span className="rounded-full border border-[#4d6bff]/40 bg-[#1a2ecc]/40 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-white">
          {c.time}
        </span>
        <span className="text-xs text-white/70">{c.text}</span>
      </div>
    ))}
  </div>
);

const FormatsVisual = () => (
  <div className="mt-5 flex flex-wrap gap-2 rounded-xl border border-white/10 bg-black/40 p-3">
    {["9:16 Vertical", "16:9 Horizontal", "Subtitled"].map((name) => (
      <Chip key={name} icon={<Check size={12} />}>
        {name}
      </Chip>
    ))}
  </div>
);

/* ---------- data ---------- */

const steps = [
  {
    number: "01",
    title: "Send Us Your Footage",
    description:
      "Share raw files through Drive, Dropbox or WeTransfer along with references, brand assets and the outcome you want.",
    Visual: FilesVisual,
  },
  {
    number: "02",
    title: "We Edit Your Content",
    description:
      "Your editor builds the cut: pacing, captions, sound design, colour and graphics that match your brand voice.",
    Visual: TimelineVisual,
  },
  {
    number: "03",
    title: "Review & Feedback",
    description:
      "You get a preview link with timestamped comments. We refine until the edit feels exactly right.",
    Visual: FeedbackVisual,
  },
  {
    number: "04",
    title: "Receive Your Final Video",
    description:
      "Delivered in every format you need — vertical, horizontal, subtitled — ready to publish the same day.",
    Visual: FormatsVisual,
  },
];

/* ---------- section ---------- */

const HowItWorks = () => {
  const containerRef = useRef(null);
  const fillRef = useRef(null);
  const nodeRefs = useRef([]);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const mid = window.innerHeight * 0.55; // the "reading line"

      // glowing progress line
      const height = Math.min(Math.max(mid - rect.top, 0), rect.height);
      if (fillRef.current) fillRef.current.style.height = `${height}px`;

      // a step lights up once the line has reached its node
      let count = 0;
      nodeRefs.current.forEach((node) => {
        if (!node) return;
        const r = node.getBoundingClientRect();
        if (r.top + r.height / 2 <= mid) count += 1;
      });
      setLit(count);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="how-it-works"
      className="w-full bg-black px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24"
    >
      <style>{`
        @keyframes hiw-playhead {
          from { left: 8%; }
          to { left: 92%; }
        }
      `}</style>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span
            className="w-fit px-4 py-2 text-sm font-semibold text-white md:px-7 md:py-3"
            style={pillStyle}
          >
            How It Works
          </span>

          <h2 className="mt-5 text-[28px] font-bold leading-[1.05] tracking-[-0.06em] text-white md:text-[48px]">
            Four steps from raw footage
            <br className="hidden md:block" /> to{" "}
            <span className="font-bold italic" style={playfair}>
              published.
            </span>
          </h2>

          <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-white/70 md:text-lg">
            No briefs lost in DMs, no guessing. A simple, repeatable pipeline
            you can plan your content calendar around.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* base line */}
          <div className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-white/10 md:left-1/2" />

          {/* glowing progress line */}
          <div
            ref={fillRef}
            className="absolute left-5 top-0 w-[2px] -translate-x-1/2 md:left-1/2"
            style={{
              height: 0,
              background:
                "linear-gradient(to bottom, rgba(77,107,255,0.1), #4d6bff)",
              boxShadow: "0 0 14px rgba(0,54,255,0.9)",
            }}
          />

          {steps.map((step, index) => {
            const active = index < lit;
            const onLeft = index % 2 === 0;
            const { Visual } = step;

            return (
              <div
                key={step.number}
                className="relative pb-10 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-x-24 md:pb-14 md:pl-0"
              >
                {/* node on the line */}
                <div
                  ref={(el) => (nodeRefs.current[index] = el)}
                  className="absolute left-5 top-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border transition-all duration-500 md:left-1/2"
                  style={{
                    background: active ? "#0d1670" : "#000",
                    borderColor: active
                      ? "#4d6bff"
                      : "rgba(255,255,255,0.15)",
                    boxShadow: active
                      ? "0 0 22px rgba(0,54,255,0.85)"
                      : "none",
                  }}
                >
                  <span
                    className={`text-[15px] italic transition-colors duration-500 ${
                      active ? "text-white" : "text-white/40"
                    }`}
                    style={playfair}
                  >
                    {step.number}
                  </span>
                </div>

                {/* card */}
                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-[20px]
                    border
                    bg-[#0d0d0d]
                    p-6
                    transition-all
                    duration-500
                    sm:p-8
                    ${onLeft ? "md:col-start-1" : "md:col-start-2"}
                    ${
                      active
                        ? "border-white/25 opacity-100"
                        : "border-white/10 opacity-40"
                    }
                  `}
                >
                  {/* blue glow fades in when the step is reached */}
                  <div
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                      active ? "opacity-60" : "opacity-0"
                    }`}
                    style={{ background: BLUE_GLOW }}
                  />

                  {/* big faint number */}
                  <span
                    className="pointer-events-none absolute right-5 top-2 text-[88px] italic leading-none text-white/[0.05]"
                    style={playfair}
                  >
                    {step.number}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-[22px] font-bold leading-tight tracking-[-0.04em] text-white md:text-[26px]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {step.description}
                    </p>

                    <Visual active={active} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;