import { Link } from "react-router-dom";

export default function PageHero({ eyebrow, title, accent, description, video }) {
  return <header className="rb-page-hero">
    {video && <video src={video} autoPlay loop muted playsInline className="rb-page-hero__video" />}
    <div className="rb-page-hero__lanes" aria-hidden="true" />
    <div className="rb-page-hero__glow rb-page-hero__glow--red" aria-hidden="true" /><div className="rb-page-hero__glow rb-page-hero__glow--teal" aria-hidden="true" />
    <div className="rb-page-hero__inner"><span>◆ {eyebrow}</span><h1>{title} <em>{accent}</em></h1><p>{description}</p><Link to="/contact">Start a project <b>↗</b></Link></div>
    <div className="rb-page-hero__tape">THE REEL BAZAR · VIDEO · SOCIAL · WEB · THE REEL BAZAR · VIDEO · SOCIAL · WEB ·</div>
  </header>;
}
