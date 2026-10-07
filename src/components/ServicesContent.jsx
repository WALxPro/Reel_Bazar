
import { Check, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import { Reveal } from "./Motion";

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

const services = [
  {
    number: "01",
    title: "Short Form Video Editing",
    tag: "Instagram Reels, TikTok and YouTube Shorts.",
    description:
      "Captions, transitions, sound design, motion graphics, B-roll and engaging pacing built to hold attention in the first three seconds.",
    features: [
      "Hook-first pacing",
      "Styled captions",
      "Sound design & SFX",
      "Motion graphics",
      "B-roll sourcing",
      "Vertical-native framing",
    ],
  },
  {
    number: "02",
    title: "Long Form Video Editing",
    tag: "YouTube videos, podcasts, interviews, educational and branded content.",
    description:
      "Story-led structure, clean dialogue edits, colour and audio polish, thumbnails-ready moments and retention-aware cuts.",
    features: [
      "Narrative structure",
      "Multicam & podcast edits",
      "Colour & audio polish",
      "Chapters & lower thirds",
      "Retention-aware cutting",
      "Brand-consistent graphics",
    ],
  },
  {
    number: "03",
    title: "Bulk Video Editing",
    tag: "For creators and brands producing content consistently.",
    description:
      "A dedicated editing pipeline with repeatable templates, consistent turnaround and custom pricing based on volume.",
    features: [
      "Monthly content packages",
      "Dedicated editor",
      "Template systems",
      "Priority turnaround",
      "Volume-based pricing",
      "Ongoing collaboration",
    ],
  },
];

const ServicesContent = () => {
  return (
     <section
      id="services"
      className="w-full bg-black px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        {/* Header */}
        <Reveal variant="heading" className="flex flex-col items-center text-center">
          <span
            className="w-fit px-4 py-2 text-sm font-semibold text-white md:px-7 md:py-3"
            style={pillStyle}
          >
            Services
          </span>

          <h2 className="mt-5 text-[28px] font-bold leading-[1.05] tracking-[-0.06em] text-white md:text-[48px]">
            Editing built around
            <br className="hidden md:block" /> how people{" "}
            <span
              className="font-bold italic"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              actually
            </span>{" "}
            watch.
          </h2>

          <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-white/70 md:text-lg">
            Three ways to work with us one off edits, ongoing long form
            production, or a full content pipeline.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.number} variant="card" delay={services.indexOf(service) * 0.1}><div
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-[20px]
                border
                border-white/10
                bg-[#0d0d0d]
                p-6
                transition-colors
                duration-300
                hover:border-white/25
                sm:p-8
              "
            >
              {/* blue glow, brightens on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: BLUE_GLOW }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <span
                  className="text-[44px] italic leading-none text-white/40"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {service.number}
                </span>

                <h3 className="mt-6 text-[24px] font-bold leading-tight tracking-[-0.04em] text-white">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm font-medium leading-snug text-white/80">
                  {service.tag}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>

                <div className="mt-auto pt-8">
                  <ul className="flex flex-col gap-3 border-t border-white/10 pt-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-white/80"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                          <Check size={12} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div></Reveal>
          ))}
        </div>

        {/* Bulk pricing note */}
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="max-w-[560px] text-sm leading-relaxed text-white/60 md:text-base">
            Bulk editing is priced on volume tell us how much you publish and
            we build a package around it.
          </p>

          
          <Button text="Get a Custom Quote" to="/services" />
        </div>
      </div>
    </section>
  )
}

export default ServicesContent
