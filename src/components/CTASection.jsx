
import { Link } from "react-router-dom";
import { Reveal } from "./Motion";

const CTASection = () => {
  return (
    <section className="rb-section rb-cta-section">
      <div className="rb-wrap">
        <Reveal className="rb-export">
          <p className="rb-eyebrow">Export</p>
          <h2>Ready to export your <em>big idea?</em></h2>
          <div className="rb-progress" role="progressbar" aria-label="Project readiness" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100"><i /></div>
          <p className="rb-progress-label">Rendering · 100% · Let’s start your project</p>
          <div className="rb-export-actions">
            <Link className="rb-button rb-glow" to="/contact">Get a free quote ↗</Link>
            <Link className="rb-button rb-outline" to="/case-study">See our work</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
