import { Reveal } from "./Motion";

const reasons = [
  { title: "One studio, zero chaos", description: "Video, social and web work together, so your brand looks and sounds the same everywhere." },
  { title: "Search-friendly by design", description: "Our websites come with clean structure, fast loading and SEO basics built in." },
  { title: "Clear, honest pricing", description: "Websites from $150, social media from $250/month. You know the cost before we begin." },
  { title: "Content with a purpose", description: "Every reel, post and page is created to get views, leads and sales, not just look good." },
];

export default function WhyUs() {
  return (
    <section className="rb-section rb-why">
      <div className="rb-wrap">
        <Reveal variant="heading">
          <p className="rb-eyebrow">Effect controls</p>
          <h2>Made to be seen. <em>Built to grow.</em></h2>
        </Reveal>
        <div className="rb-why-grid">
          {reasons.map((reason) => (
            <Reveal key={reason.title} variant="card">
              <article className="rb-feature-card">
                <span aria-hidden="true" />
                <div><h3>{reason.title}</h3><p>{reason.description}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
