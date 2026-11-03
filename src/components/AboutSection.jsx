import { Reveal } from "./Motion";

const services = [
  "Video editing",
  "Social media management",
  "Website development",
];

export default function AboutSection() {
  return (
    <section className="rb-section rb-about">
      <div className="rb-wrap">
        <div className="rb-about-main">
          <div className="rb-about-copy">
            <Reveal variant="heading">
              <p className="rb-eyebrow">About the studio</p>
              <h2>One team. Three ways to <em>stand out.</em></h2>
            </Reveal>

            <Reveal variant="paragraph" delay={0.1}>
              <div className="rb-about-description">
                <p>
                  TheReelBazar is a creative studio helping brands show up
                  confidently wherever their audience finds them. We bring
                  video, social media and web together under one roof, making
                  every part of your online presence feel connected.
                </p>
                <p>
                  From scroll-stopping edits and thoughtful social media
                  management to fast, search-friendly websites, we turn your
                  ideas into useful creative work built around your goals.
                </p>
              </div>
            </Reveal>

            <ul className="rb-about-services" aria-label="Our services">
              {services.map((service) => <li key={service}>{service}</li>)}
            </ul>
          </div>

          <div className="rb-about-media">
            <Reveal variant="image">
              <video
                src="/about-section.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="TheReelBazar creative studio showreel"
              />
            </Reveal>
          </div>
        </div>

        <Reveal variant="paragraph">
          <div className="rb-about-outro">
            <span className="rb-about-outro-mark" aria-hidden="true">◆</span>
            <p>
              Good creative should do more than look polished. It should make
              your brand easier to discover, trust and remember.
              <strong> TheReelBazar — ideas made visible, from first frame to final click.</strong>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
