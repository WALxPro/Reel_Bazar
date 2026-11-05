import { Link } from "react-router-dom";
import { Reveal } from "./Motion";
const services = [
  {
    code: "V1 · Video",
    title: "Video Editing",
    color: "#ff3d1f",
    description: "Cinematic edits made to hold attention from the first second.",
    features: ["Reels, Shorts & TikTok edits", "YouTube long-form videos", "Ads & promo videos", "Subtitles, motion graphics, sound"],
    href: "/services#video",
  },
  {
    code: "S1 · Social",
    title: "Social Media Handling",
    color: "#ffd23f",
    description: "We plan, create and post, so you can focus on your business.",
    features: ["Content calendar & strategy", "Reels, posts & stories", "Captions, hashtags & engagement", "Monthly performance report"],
    href: "/services#social",
  },
  {
    code: "W1 · Web",
    title: "Website Development",
    color: "#32d6c0",
    description: "Fast, mobile-first websites built to rank and convert visitors.",
    features: ["Business & portfolio websites", "SEO-ready structure & speed", "Online store & booking options", "Domain & hosting setup"],
    href: "/services#website",
  },
];

export default function ServicesContent() {
  return (
    <section className="rb-section" id="services">
      <div className="rb-wrap">
        <Reveal variant="heading">
          <p className="rb-eyebrow">V1 · S1 · W1 — Tracks</p>
          <h2>Three skills. <em>One</em> creative team.</h2>
          <p className="rb-subtitle">Stop juggling freelancers. Get your videos, socials and website from one studio that understands your brand.</p>
        </Reveal>
        <div className="rb-service-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} variant="card">
            <article className="rb-service-card" style={{ "--accent": service.color }}>
              <p className="rb-card-strip"><span>{service.code}</span><span>{String(index + 1).padStart(2, "0")}</span></p>
              <div className="rb-service-card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <strong>{service.price}</strong>
                <Link className="rb-button" to={service.href}>Explore ↗</Link>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
