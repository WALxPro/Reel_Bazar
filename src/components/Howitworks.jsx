import { Reveal } from "./Motion";

const steps = [
  { number: "KF 01", title: "Tell us your idea", description: "Send a message or fill the quote form. No complicated process." },
  { number: "KF 02", title: "Get a clear plan", description: "We share the scope, quote and timeline before we start." },
  { number: "KF 03", title: "We create", description: "You review the work and we refine it until you love it." },
  { number: "KF 04", title: "Launch & grow", description: "We deliver, publish and keep your brand moving." },
];

export default function HowItWorks() {
  return (
    <section className="rb-section rb-process" id="how-it-works">
      <div className="rb-wrap">
        <Reveal variant="heading">
          <p className="rb-eyebrow">Keyframes</p>
          <h2>Ordering is <em>easy.</em> Really.</h2>
          <p className="rb-subtitle">A clear, repeatable process for video, social media and web projects.</p>
        </Reveal>
        <div className="rb-steps">
          {steps.map((step) => (
            <Reveal key={step.number} variant="card">
              <article className="rb-step">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
