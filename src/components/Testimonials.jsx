import React from "react";
import { Star } from "lucide-react";
import { Reveal } from "./Motion";

const testimonials = [
  {
    name: "Ryan Mitchell",
    role: "Founder, Lifestyle Brand",
    rating: 5,
    text: "TheReelBazar took our raw footage and turned it into content that actually feels like our brand. The pacing, transitions, and overall flow were exactly what we were looking for.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Olivia Carter",
    role: "Content Creator",
    rating: 5,
    text: "I’ve worked with different editors before, but what stood out with TheReelBazar was their understanding of the content. They didn’t just edit clips, they knew what moments needed attention.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Marcus Lee",
    role: "Social Media Manager",
    rating: 5,
    text: "Our videos used to feel flat. TheReelBazar helped us create edits that keep people watching longer and made our content look much more professional.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Emma Wilson",
    role: "YouTube Creator",
    rating: 5,
    text: "The process was simple from start to finish. I shared my ideas, and they handled the creative side really well. The final videos were better than what I had imagined.",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Daniel Brooks",
    role: "Creator & Entrepreneur",
    rating: 5,
    text: "What I appreciate most is their attention to small details. The timing, music choices, and transitions always make the videos feel intentional.",
    avatar: "https://i.pravatar.cc/100?img=51",
  },
  {
    name: "Sophia Adams",
    role: "Brand Consultant",
    rating: 5,
    text: "TheReelBazar feels less like an editing service and more like a creative partner. They understand the goal behind the content, not just the footage itself.",
    avatar: "https://i.pravatar.cc/100?img=60",
  },
  {
    name: "James Parker",
    role: "Marketing Lead",
    rating: 5,
    text: "Fast communication, clean edits, and consistent quality. They’ve become our go-to team whenever we need video content done right.",
    avatar: "https://i.pravatar.cc/100?img=68",
  },
  {
    name: "Jason Cooper",
    role: "Digital Creator",
    rating: 5,
    text: "TheReelBazar transformed our video content with strong storytelling, polished visuals, and editing that keeps the audience engaged.",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    name: "Matty Kay",
    role: "Content Creator",
    rating: 5,
    text: "TheReelBazar upgraded our content through polished editing, smooth transitions, and visuals that aligned perfectly with our brand.",
    avatar: "https://i.pravatar.cc/100?img=13",
  },
];

const TestimonialCard = ({ t }) => (
  <div
  className="
    relative
    mx-3
    w-[420px]
    shrink-0
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-[#0d0d0d]
    px-[24px]
    py-[32px]

  "
  
>
    {/* blue radial glow */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(90% 80% at 50% 120%, rgba(0,54,255,0.7) 0%, rgba(15,25,180,0.59) 46.5753%, #000 100%)",
      }}
    />

    <div className="relative flex flex-col gap-7">
      <div className="flex gap-2">
        {Array.from({ length: t.rating }).map((_, i) => (
          <span
            key={i}
            className="flex h-7 w-7 items-center justify-center rounded-md border-white border "
          >
            <Star size={16} className=" text-white fill-white" />
          </span>
        ))}
      </div>

      <p className="text-[14px] leading-relaxed text-white/85">{t.text}</p>

    <div className="flex items-center gap-3 pt-2">
  <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
    <img
      src={t.avatar}
      alt={t.name}
      className="h-9 w-9 rounded-full object-cover"
    />
  </div>

  <div>
    <p className="text-sm font-medium text-white">{t.name}</p>
    <p className="text-xs text-white/50">{t.role}</p>
  </div>
</div>
    </div>
  </div>
);

const MarqueeRow = ({ items, reverse = false, duration = 40 }) => (
  <div
    className="relative flex w-full overflow-hidden"
    style={{
      maskImage:
        "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
    }}
  >
    <div
      className="flex w-max animate-marquee"
      style={{
        animationDuration: `${duration}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {[...items, ...items].map((t, i) => (
        <TestimonialCard key={i} t={t} />
      ))}
    </div>
  </div>
);

const Testimonials = () => {
 const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3, 6);
const row3 = testimonials.slice(6, 9);

  return (
    <section className="w-full overflow-hidden bg-black px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
      `}</style>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <Reveal variant="heading" className="text-center">
         
           <h2 className="mt-5 text-[28px] font-bold leading-[1.05] tracking-[-0.06em] text-white md:text-[48px]">
            Loved by creators
          </h2>
           <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-white/70 md:text-lg mx-auto">
            What creators and brands say about working with us.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6">
          <MarqueeRow items={row1} duration={110} />
          <MarqueeRow items={row2} reverse duration={130} />
          <MarqueeRow items={row3} duration={100} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
