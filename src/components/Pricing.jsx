import { Link } from "react-router-dom";
import { servicePlans } from "../data/services";
import PricingCard from "./PricingCard";
import { Reveal } from "./Motion";

const videoDetails = {
  description: "Cinematic edits made to hold attention from the first second. Send your footage and idea, and we turn it into a video people watch to the end.",
  formats: ["Reels", "YouTube Shorts", "TikTok", "YouTube", "Ads"],
  features: ["Reels, Shorts & TikTok edits", "YouTube long-form videos", "Ads & promo videos", "Subtitles & captions", "Motion graphics & transitions", "Color correction & sound design"],
  price: "Reels from $30–$40 · Long-form from $80–$100",
};

function PlanGroup({ planGroup, id, label }) {
  return (
    <section className="rb-service-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="rb-service-heading">
        <p className="rb-eyebrow">{label} · {planGroup.unit}</p>
        <h2 id={`${id}-title`}>{planGroup.name}</h2>
      </div>
      {id === "website" && (
        <p className="rb-service-intro">From a landing page to a full online store. Every site is mobile-first, fast and built with SEO in mind so customers can find you on Google.</p>
      )}
      {id === "social" && (
        <>
          <p className="rb-service-intro">Strategy, content, posting and community, all handled by one team. Consistent, on-brand social media that grows your audience and brings in customers.</p>
          <div className="rb-platform-chips" aria-label="Supported social platforms">
            {planGroup.platforms.map((platform) => <span key={platform}>{platform}</span>)}
          </div>
          <h3 className="rb-subheading">Our monthly cycle</h3>
          <div className="rb-cycle">
            {planGroup.cycle.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</div>)}
          </div>
        </>
      )}
      <div className="rb-pricing-grid">
        {planGroup.plans.map((plan) => (
          <Reveal key={plan.name} variant="card">
            <PricingCard plan={plan} accent={planGroup.accent} service={planGroup.name} />
          </Reveal>
        ))}
      </div>
      <div className="rb-addons">
        <h3>Add-ons</h3>
        <div>{planGroup.addons.map((addon) => <span key={addon}>{addon}</span>)}</div>
      </div>
      {id === "website" && (
        <>
          <h3 className="rb-subheading">How we build it</h3>
          <div className="rb-build-steps">
            {planGroup.buildSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h4>{step.name}</h4>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
          <p className="rb-pricing-note">All prices in USD. Domain name and hosting are paid at cost. Need something bigger? Ask for a custom quote.</p>
        </>
      )}
      {id === "social" && (
        <p className="rb-pricing-note">All prices in USD per month. Ad budget for paid campaigns is separate and goes directly to the platform.</p>
      )}
    </section>
  );
}

export default function Pricing() {
  const { website, social } = servicePlans;

  return (
    <section className="rb-section rb-pricing" id="pricing">
      <div className="rb-wrap">
        <Reveal variant="heading">
          <p className="rb-eyebrow">Services &amp; pricing</p>
          <h2>Everything your brand needs to be <em>seen.</em></h2>
          <p className="rb-subtitle">Pick one service or combine all three. Clear packages, honest prices, no hidden surprises.</p>
        </Reveal>

        <section className="rb-service-section rb-video-service" id="video" aria-labelledby="video-title">
          <div className="rb-service-heading">
            <p className="rb-eyebrow">V1 · Video editing</p>
            <h2 id="video-title">Video editing that <em>stops the scroll.</em></h2>
          </div>
          <div className="rb-video-service-grid">
            <div>
              <p className="rb-service-intro">{videoDetails.description}</p>
              <div className="rb-platform-chips">{videoDetails.formats.map((format) => <span key={format}>{format}</span>)}</div>
              <p className="rb-video-price-label">Custom quote per project</p>
              <p className="rb-pricing-note">Every video is different, so we quote per project. Share your footage and goals and we will send a clear price.</p>
              <Link className="rb-button" to="/contact">Get a custom quote ↗</Link>
            </div>
            <article className="rb-video-checklist">
              <div className="rb-card-strip"><span>V1 · Video</span><span>What’s included</span></div>
              <div className="rb-video-checklist__body">
                <ul>{videoDetails.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <div className="rb-waveform" aria-hidden="true">
                  {Array.from({ length: 42 }, (_, index) => <i key={index} style={{ "--bar-height": `${24 + Math.abs(Math.sin(index * 1.7) * 55)}%`, "--bar-delay": `${index * -0.07}s` }} />)}
                </div>
                <strong>{videoDetails.price}</strong>
              </div>
            </article>
          </div>
        </section>

        <PlanGroup planGroup={website} id="website" label="W1 · Website development" />
        <PlanGroup planGroup={social} id="social" label="S1 · Social media management" />

        <div className="rb-bundle">
          <p className="rb-eyebrow">Bundle</p>
          <h2>Want all three? <em>Let’s talk.</em></h2>
          <p>Website + social media + video editing from one team means one brand, one plan and a better price.</p>
          <div className="rb-progress" role="progressbar" aria-label="Your next project is ready" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100"><i /></div>
          <span className="rb-progress-label">Rendering · 100% · Let’s start your project</span>
          <Link className="rb-button rb-glow" to="/contact">Ask for a bundle quote ↗</Link>
        </div>
      </div>
    </section>
  );
}
