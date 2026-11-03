import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const colors = ["#ff3d1f", "#ffd23f", "#32d6c0"];
export default function StudioHero() {
  const lanes = useMemo(() => Array.from({ length: 5 }, (_, row) => Array.from({ length: 12 }, () => ({ width: 50 + Math.random() * 230, color: colors[(row + Math.floor(Math.random() * colors.length)) % 3] }))), []);
  const [time, setTime] = useState("00:00:00:00");
  useEffect(() => { const start = Date.now(); const tick = () => { const v = (Date.now() - start) / 1000; setTime(`00:00:${String(Math.floor(v) % 60).padStart(2,"0")}:${String(Math.floor((v % 1) * 24)).padStart(2,"0")}`); }; tick(); const id = setInterval(tick, 42); return () => clearInterval(id); }, []);
  return <section className="rb-hero"><div className="rb-lanes" aria-hidden="true">{lanes.map((lane, i) => <div className="rb-lane" key={i}>{lane.map((clip, j) => <i key={j} style={{ width: clip.width, background: clip.color }} />)}</div>)}</div><div className="rb-wrap rb-hero-grid"><div>
    <p className="rb-now">▶ Now playing · Creative studio</p><h1>Video editing, social media & websites that <em>get you</em> <span className="rb-selection">noticed.</span></h1><p className="rb-lead">One creative team for the edits, online presence and website that make your brand impossible to miss.</p><div className="rb-actions"><Link className="rb-button rb-glow" to="/contact">Get a free quote ↗</Link><Link className="rb-button rb-outline" to="/case-study">See our work</Link></div><div className="rb-tags"><span>Reels & Shorts</span><span>YouTube edits</span><span>Social media</span><span>Websites</span></div>
  </div><div className="rb-monitor" role="img" aria-label="TheReelBazar showreel preview"><i className="rb-blob one"/><i className="rb-blob two"/><i className="rb-blob three"/><div className="rb-crosshair"/><span className="rb-rec">REC</span><span className="rb-time">{time}</span><span className="rb-play"/><span className="rb-monitor-title">TheReelBazar — Showreel</span><div className="rb-vu">{Array.from({length: 6}, (_, i) => <i key={i} style={{ animationDelay: `${i * -.12}s` }}/>)}</div></div></div></section>;
}
