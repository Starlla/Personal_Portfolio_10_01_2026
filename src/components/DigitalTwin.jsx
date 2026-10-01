import { useState, useEffect } from "react";
import { Icon } from "./Icons";
import { PROFILE, TWIN_ASKS } from "../data/content";

/**
 * Digital twin section.
 * Shows an animated chat preview until the visitor starts a chat, then swaps
 * in the live Hugging Face Space as an iframe (loaded on demand, since the
 * Space can take a few seconds to wake up).
 */
export function Twin() {
  const [q, setQ] = useState(0);
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (live || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setQ((v) => (v + 1) % TWIN_ASKS.length), 3200);
    return () => clearInterval(t);
  }, [live]);

  const start = (e) => {
    e?.preventDefault();
    setLive(true);
    document.getElementById("twin")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="panel twin" id="twin" aria-labelledby="twin-title">
      <div>
        <span className="eyebrow"><i></i>Digital Twin · Live</span>
        <h2 id="twin-title">Chat with my <span className="hand">digital twin</span></h2>
        <p className="lede">An AI version of me that knows my background, projects and career goals. Ask it anything you'd ask in a first call, any time of day.</p>
        <div className="asks" aria-label="Questions to try">
          {TWIN_ASKS.map((a) => (
            <a key={a} href={PROFILE.twin} onClick={start}>{a}</a>
          ))}
        </div>
        <div className="cta">
          {live ? (
            <a className="btn" href={PROFILE.twin} target="_blank" rel="noopener"><Icon n="out" /> Open full screen</a>
          ) : (
            <button className="btn" onClick={start}><Icon n="bot" /> Start chatting</button>
          )}
        </div>
        <p className="fine">Answers are AI-generated, so confirm the important stuff with the real me.</p>
      </div>

      {live ? (
        <div className="chatwin live">
          <div className="bar"><span className="av">CT</span><span><b>Claire's Twin</b><small>Hosted on Hugging Face · may take a few seconds to wake up</small></span></div>
          <iframe
            src={PROFILE.twin}
            title="Claire's digital twin"
            allow="clipboard-read; clipboard-write; autoplay"
            loading="lazy"
          />
        </div>
      ) : (
        <a className="chatwin" href={PROFILE.twin} onClick={start} aria-label="Start a chat with the digital twin">
          <div className="bar"><span className="av">CT</span><span><b>Claire's Twin</b><small>AI · usually replies instantly</small></span></div>
          <div className="msgs">
            <div className="msg bot">Hi! I'm Claire's digital twin. Ask me about her projects, her stack, or the roles she's looking for.</div>
            <div className="msg me" key={q}>{TWIN_ASKS[q]}</div>
            <span className="typing" aria-hidden="true"><i></i><i></i><i></i></span>
          </div>
          <div className="composer"><span>Ask Claire's twin anything…</span><b>Start chat <Icon n="arrow" /></b></div>
        </a>
      )}
    </section>
  );
}
