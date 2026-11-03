import { Link } from "react-router-dom";
import { servicePlans } from "../data/services";
import PricingCard from "./PricingCard";
import { Reveal } from "./Motion";

function PlanGroup({ planGroup, id, label }) {
  return (
    <section className="rb-service-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="rb-service-heading">
        <p className="rb-eyebrow">{label} · {planGroup.unit}</p>
        <h2 id={`${id}-title`}>{planGroup.name}</h2>
      </div>
      {id === "video" && (
        <p className="rb-service-intro">Cinematic edits made to hold attention from the first second. Send your footage and idea, and we turn it into a video people watch to the end.</p>
      )}
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
      {planGroup.buildSteps && (
        <>
          <h3 className="rb-subheading">{id === "video" ? "How we edit it" : "How we build it"}</h3>
          <div className="rb-build-steps">
            {planGroup.buildSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h4>{step.name}</h4>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </>
      )}
      {id === "video" && (
        <p className="rb-pricing-note">All prices in USD per video. Prices depend on length and complexity. Need something bigger? Ask for a custom quote.</p>
      )}
      {id === "website" && (
        <p className="rb-pricing-note">All prices in USD. Domain name and hosting are paid at cost. Need something bigger? Ask for a custom quote.</p>
      )}
      {id === "social" && (
        <p className="rb-pricing-note">All prices in USD per month. Ad budget for paid campaigns is separate and goes directly to the platform.</p>
      )}
    </section>
  );
}

export default function Pricing({ active }) {
  const { video, website, social } = servicePlans;
  const show = (id) => !active || active === id;

  return (
    <section className="rb-section rb-pricing" id="pricing">
      <div className="rb-wrap">
        <Reveal variant="heading">
          <p className="rb-eyebrow">Services &amp; pricing</p>
          <h2>Everything your brand needs to be <em>seen.</em></h2>
          <p className="rb-subtitle">Pick one service or combine all three. Clear packages, honest prices, no hidden surprises.</p>
        </Reveal>

        {show("video") && <PlanGroup key="video" planGroup={video} id="video" label="V1 · Video editing" />}
        {show("website") && <PlanGroup key="website" planGroup={website} id="website" label="W1 · Website development" />}
        {show("social") && <PlanGroup key="social" planGroup={social} id="social" label="S1 · Social media management" />}

        <div className="rb-bundle">
          <p className="rb-eyebrow">Bundle</p>
          <h2>Want all three? <em>Let’s talk.</em></h2>
          <p>Website + social media + video editing from one team means one brand, one plan and a better price.</p>
          <span className="rb-progress-label">Rendering · 100% · Let’s start your project</span>
          <Link className="rb-button rb-glow" to="/contact">Ask for a bundle quote ↗</Link>
        </div>
      </div>
    </section>
  );
}