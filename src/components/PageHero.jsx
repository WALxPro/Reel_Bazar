import { Link } from "react-router-dom";

export default function PageHero({ eyebrow, title, accent, description, video }) {
  return <header className="rb-page-hero">
    {/* {video && <video src={video} autoPlay loop muted playsInline className="rb-page-hero__video" />} */}
    <div className="rb-page-hero__lanes" aria-hidden="true" />
    <div className="rb-page-hero__glow rb-page-hero__glow--red" aria-hidden="true" /><div className="rb-page-hero__glow rb-page-hero__glow--teal" aria-hidden="true" />
    <div className="rb-page-hero__inner"><span>◆ {eyebrow}</span><h1>{title} <em>{accent}</em></h1><p>{description}</p><Link to="/contact">Start a project <b>↗</b></Link></div>
    <div className="rb-page-hero__tape" aria-hidden="true">
      <div className="rb-page-hero__tape-track">
        {[0, 1].map((group) => (
          <div className="rb-page-hero__tape-group" key={group}>
            {[0, 1, 2, 3].map((item) => (
              <span className="rb-page-hero__tape-item" key={item}>
                THE REEL BAZAR · VIDEO · SOCIAL · WEB
                <svg className="rb-page-hero__reel" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="20" cy="20" r="4" fill="currentColor" />
                  <circle cx="20" cy="10" r="2.5" fill="currentColor" />
                  <circle cx="29.5" cy="17" r="2.5" fill="currentColor" />
                  <circle cx="26" cy="28" r="2.5" fill="currentColor" />
                  <circle cx="14" cy="28" r="2.5" fill="currentColor" />
                  <circle cx="10.5" cy="17" r="2.5" fill="currentColor" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </header>;
}
