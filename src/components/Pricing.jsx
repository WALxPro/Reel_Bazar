import React from "react";
import { ArrowUpRight, Info } from "lucide-react";
import { Reveal } from "./Motion";
import { Link } from "react-router-dom";

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

// All CTAs go to the contact section (change if your contact lives on another route)
const CONTACT_HREF = "/contact";

const plans = [
  {
    name: "Short-Form / Reels",
    price: "$30–$40",
    unit: "per video",
    description:
      "Reels, TikToks and Shorts with captions, sound design and motion graphics.",
    cta: "Order a Reel",
    popular: true,
  },
  {
    name: "Bulk Reels",
    custom: true,
    description: "For multiple videos or ongoing monthly content.",
    cta: "Get Custom Quote",
  },
  {
    name: "Long-Form Videos",
    price: "$80–$100",
    unit: "per video",
    description:
      "YouTube videos, podcasts, interviews and branded storytelling.",
    cta: "Start a Project",
  },
  {
    name: "Bulk Long-Form Videos",
    custom: true,
    description:
      "Consistent long-form output with a dedicated editor and priority slots.",
    cta: "Get Custom Quote",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full bg-black px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        {/* Header */}
        <Reveal variant="heading" className="flex flex-col items-center text-center">
          <span
            className="w-fit px-4 py-2 text-sm font-semibold text-white md:px-7 md:py-3"
            style={pillStyle}
          >
            Pricing
          </span>

          <h2 className="mt-5 text-[28px] font-bold leading-[1.05] tracking-[-0.06em] text-white md:text-[48px]">
            Clear rates.
            <br className="hidden md:block" /> No retainers{" "}
            <span className="font-bold italic" style={playfair}>
              you don't need.
            </span>
          </h2>

          <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-white/70 md:text-lg">
            Per-video pricing for one-offs, custom packages once you publish
            consistently.
          </p>
        </Reveal>

        {/* Plans */}
        <div className="grid grid-cols-1 gap-5 pt-3 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Reveal key={plan.name} variant="card" delay={plans.indexOf(plan) * 0.1}><div
              className={`
                group
                relative
                flex
                flex-col
                rounded-[20px]
                border
                bg-[#0d0d0d]
                p-6
                transition-colors
                duration-300
                sm:p-7
                ${
                  plan.popular
                    ? "border-[#4d6bff]/60 lg:-translate-y-2"
                    : "border-white/10 hover:border-white/25"
                }
              `}
              style={
                plan.popular
                  ? { boxShadow: "0 0 40px rgba(0,54,255,0.3)" }
                  : undefined
              }
            >
              {/* glow layer (clipped to the card's rounded corners) */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    plan.popular
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                  style={{ background: BLUE_GLOW }}
                />
              </div>

              {plan.popular && (
                <span
                  className="absolute -top-3 left-6 px-4 py-1 text-xs font-semibold text-white"
                  style={pillStyle}
                >
                  Most Popular
                </span>
              )}

              <div className="relative z-10 flex h-full flex-col">
                <h3 className="text-[20px] font-bold leading-tight tracking-[-0.03em] text-white">
                  {plan.name}
                </h3>

                {/* price block (fixed min-height keeps the cards aligned) */}
                <div className="mt-6 min-h-[84px]">
                  {plan.custom ? (
                    <p
                      className="text-[28px] italic leading-tight text-white"
                      style={playfair}
                    >
                      Custom Pricing
                    </p>
                  ) : (
                    <>
                      <p className="text-[40px] font-bold leading-none tracking-[-0.05em] text-white">
                        {plan.price}
                      </p>
                      <p className="mt-2 text-sm text-white/60">{plan.unit}</p>
                    </>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-white/70">
                  {plan.description}
                </p>

                <Link
                  to={CONTACT_HREF}
                  className={`
                    mt-8
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    transition
                    lg:mt-5
                    ${
                      plan.popular
                        ? "rounded-full bg-white text-black hover:bg-white/85"
                        : "text-white hover:brightness-125"
                    }
                  `}
                  style={plan.popular ? undefined : pillStyle}
                >
                  {plan.cta} <ArrowUpRight size={16} />
                </Link>
              </div>
            </div></Reveal>
          ))}
        </div>

        {/* Note */}
        <p className="mx-auto flex max-w-[640px] items-start justify-center gap-2 text-center text-xs leading-relaxed text-white/50 md:text-sm">
          <Info size={16} className="mt-[2px] shrink-0" />
          Final pricing can depend on editing complexity, video length,
          revision needs and specific project requirements. Every quote is
          confirmed before we start.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
