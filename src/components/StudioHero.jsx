import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

const colors = ["#ff3d1f", "#ffd23f", "#32d6c0"];
const SHOWREEL_DURATION = 23.5;

const formatTime = (seconds) => {
  const wholeSeconds = Math.floor(seconds);
  const frames = Math.floor((seconds % 1) * 25);
  return `00:00:${String(wholeSeconds).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
};

function SplitText({ text }) {
  return (
    <span aria-label={text}>
      {Array.from(text).map((character, index) => (
        <span
          className="rb-showreel-character"
          key={`${character}-${index}`}
          aria-hidden="true"
          style={{ "--character-index": index }}
        >
          {character === " " ? "\u00a0" : character}
        </span>
      ))}
    </span>
  );
}

export default function StudioHero() {
  const lanes = useMemo(
    () =>
      Array.from({ length: 5 }, (_, row) =>
        Array.from({ length: 12 }, () => ({
          width: 50 + Math.random() * 230,
          color: colors[(row + Math.floor(Math.random() * colors.length)) % 3],
        })),
      ),
    [],
  );
  const [time, setTime] = useState(formatTime(0));
  const [loop, setLoop] = useState(true);
  const [runId, setRunId] = useState(0);
  const loopRef = useRef(loop);
  loopRef.current = loop;

  useEffect(() => {
    const start = performance.now();
    let finished = false;
    const tick = () => {
      if (finished) return;
      const elapsed = (performance.now() - start) / 1000;
      if (elapsed >= SHOWREEL_DURATION) {
        finished = true;
        setTime(formatTime(SHOWREEL_DURATION));
        if (loopRef.current) setRunId((current) => current + 1);
        return;
      }
      setTime(formatTime(elapsed));
    };
    tick();
    const id = setInterval(tick, 40);
    return () => clearInterval(id);
  }, [runId]);

  return (
    <section className="rb-hero">
      <div className="rb-lanes" aria-hidden="true">
        {lanes.map((lane, i) => (
          <div className="rb-lane" key={i}>
            {lane.map((clip, j) => (
              <i
                key={j}
                style={{ width: clip.width, background: clip.color }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="rb-wrap rb-hero-grid">
        <div>
          <p className="rb-now">▶ Now playing · Creative studio</p>
          <h1>
            Video editing, social media & websites that <em>get you</em>{" "}
            <span className="rb-selection">noticed.</span>
          </h1>
          <p className="rb-lead">
            One creative team for the edits, online presence and website that
            make your brand impossible to miss.
          </p>
          <div className="rb-actions">
            <Link className="rb-button rb-glow" to="/contact">
              Get a free quote ↗
            </Link>
            <Link className="rb-button rb-outline" to="/case-study">
              See our work
            </Link>
          </div>
          <div className="rb-tags">
            <span>Reels & Shorts</span>
            <span>YouTube edits</span>
            <span>Social media</span>
            <span>Websites</span>
          </div>
        </div>
        <div className="rb-showreel-wrap">
          <div
            className="rb-monitor"
            role="img"
            aria-label="Animated TheReelBazar showreel preview"
          >
            <div className="rb-showreel" key={runId} aria-hidden="true">
              <i className="rb-blob one" />
              <i className="rb-blob two" />
              <i className="rb-blob three" />
              <div className="rb-showreel-shade" />
              <div className="rb-crosshair" />
              <div
                className="rb-showreel-scene"
                style={{ "--scene-delay": "0.3s", "--scene-duration": "3.7s" }}
              >
                <span className="rb-showreel-small">WELCOME TO</span>
                <h2 className="rb-showreel-big">
                  <SplitText text="THEREELBAZAR" />
                </h2>
                <div className="rb-showreel-line" />
              </div>
              <div
                className="rb-showreel-scene"
                style={{ "--scene-delay": "4s", "--scene-duration": "3.8s" }}
              >
                <h2 className="rb-showreel-big rb-showreel-mid">
                  <SplitText text="WE MAKE YOUR" />
                </h2>
                <h2 className="rb-showreel-big rb-showreel-mid rb-showreel-accent">
                  <SplitText text="BRAND MOVE" />
                </h2>
                <span className="rb-showreel-sub">NEW SERVICES — NOW LIVE</span>
              </div>
              <div
                className="rb-showreel-scene"
                style={{ "--scene-delay": "7.8s", "--scene-duration": "3.8s" }}
              >
                <span className="rb-showreel-number">01</span>
                <h2 className="rb-showreel-big rb-showreel-mid">
                  <SplitText text="VIDEO" />
                </h2>
                <h2 className="rb-showreel-big rb-showreel-mid rb-showreel-accent">
                  <SplitText text="EDITING" />
                </h2>
                <span className="rb-showreel-sub">REELS · MOTION GRAPHICS · COLOR GRADE</span>
              </div>
              <div
                className="rb-showreel-scene"
                style={{ "--scene-delay": "11.6s", "--scene-duration": "3.8s" }}
              >
                <span className="rb-showreel-number">02</span>
                <h2 className="rb-showreel-big rb-showreel-mid">
                  <SplitText text="WEBSITE" />
                </h2>
                <h2 className="rb-showreel-big rb-showreel-mid rb-showreel-accent">
                  <SplitText text="DEVELOPMENT" />
                </h2>
                <span className="rb-showreel-sub">FAST · MODERN · BUILT TO CONVERT</span>
              </div>
              <div
                className="rb-showreel-scene"
                style={{ "--scene-delay": "15.4s", "--scene-duration": "3.8s" }}
              >
                <span className="rb-showreel-number">03</span>
                <h2 className="rb-showreel-big rb-showreel-mid">
                  <SplitText text="SOCIAL MEDIA" />
                </h2>
                <h2 className="rb-showreel-big rb-showreel-mid rb-showreel-accent">
                  <SplitText text="MANAGEMENT" />
                </h2>
                <span className="rb-showreel-sub">CONTENT · REELS · GROWTH</span>
              </div>
              <div
                className="rb-showreel-scene is-last"
                style={{ "--scene-delay": "19.2s", "--scene-duration": "4.3s" }}
              >
                <span className="rb-showreel-small">LET’S CREATE</span>
                <h2 className="rb-showreel-big">
                  <SplitText text="THEREELBAZAR" />
                </h2>
                <span className="rb-showreel-cta">THEREELBAZAR.COM</span>
              </div>
              <span className="rb-rec">REC</span>
              <span className="rb-time">{time}</span>
              <span className="rb-monitor-title">THEREELBAZAR — SHOWREEL</span>
              <div className="rb-showreel-bars">
                {Array.from({ length: 7 }, (_, index) => (
                  <i key={index} style={{ "--bar-index": index }} />
                ))}
              </div>
              <div className="rb-showreel-flash" />
            </div>
          </div>
          <div className="rb-showreel-controls" aria-label="Showreel controls">
            <button type="button" onClick={() => setRunId((current) => current + 1)}>
              ↻ REPLAY
            </button>
            <button
              type="button"
              className="is-secondary"
              aria-pressed={loop}
              onClick={() => setLoop((current) => !current)}
            >
              LOOP: {loop ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
