import { useState, useEffect } from "react";
import { Icon, Star } from "./Icons";

const SCENES = [
  { cap: "golden hour", bg: "linear-gradient(180deg,#ffb36b 0%,#ff6a88 45%,#3a1f6e 100%)", sil: "M0 70 L10 62 L18 66 L26 52 L34 58 L44 46 L52 56 L62 50 L72 58 L84 54 L100 60 L100 100 L0 100Z" },
  { cap: "palm walks", bg: "linear-gradient(180deg,#ff9a76 0%,#c4508a 55%,#2a1a55 100%)", sil: "M47 100 L48.5 52 L50.5 52 L52 100Z M49 52 Q 30 44 22 52 M49 52 Q 66 42 78 50 M49 52 Q 40 36 30 34 M49 52 Q 60 36 72 34" },
  { cap: "coffee & docs", bg: "linear-gradient(180deg,#5a4636 0%,#2c2018 100%)", sil: "M30 70 h34 v8 a10 10 0 0 1-10 10 h-14 a10 10 0 0 1-10-10z M64 72 q10 0 10 6 t-10 6" },
  { cap: "city lights", bg: "linear-gradient(180deg,#1b1240 0%,#3a1f6e 50%,#ff5fa2 120%)", sil: "M0 100 L0 60 L12 60 L12 40 L24 40 L24 66 L36 66 L36 30 L50 30 L50 70 L62 70 L62 46 L76 46 L76 62 L88 62 L88 50 L100 50 L100 100Z" },
];

const SWATCHES = ["#5b3df5", "#ff5fa2", "#16a57a", "#1f8fe0"];

export function Three() {
  const [off, setOff] = useState(0);
  const [tgs, setTgs] = useState([true, true, false, false]);
  const [accent, setAccent] = useState(null);
  useEffect(() => {
    if (accent) document.documentElement.style.setProperty("--accent", accent);
    else document.documentElement.style.removeProperty("--accent");
  }, [accent]);
  const shown = [0, 1, 2, 3].map(k => SCENES[(off + k) % SCENES.length]);
  const cur = accent || SWATCHES[0];
  return (<div className="panel three" id="now">
    <section>
      <div className="sec-t">Now <Star size={26} /></div>
      <div className="now">
        <div className="desk" aria-hidden="true"><div className="lamp"></div><div className="screen"><i></i><i></i><i></i><i></i><i></i></div><div className="stand"></div><div className="table"></div></div>
        <div className="now-list">
          <div><span className="ic"><Icon n="brief" /></span><span><b>Looking for my next role</b><span className="muted">Frontend-focused teams in SF.</span></span></div>
          <div><span className="ic"><Icon n="layers" /></span><span><b>Building data-heavy UIs</b><span className="muted">Live APIs, charts, clean state.</span></span></div>
          <div><span className="ic"><Icon n="edit" /></span><span><b>Sharpening fundamentals</b><span className="muted">Data structures, one problem at a time.</span></span></div>
        </div>
      </div>
      <span className="tag">Always curious ☺</span>
    </section>
    <section>
      <div className="sec-t">Off Screen <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/><circle cx="12" cy="12" r="3"/></svg></div>
      <div className="photos">
        {shown.map((s, k) => (<div key={k} className="photo" style={{ background: s.bg }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true"><path d={s.sil} fill="rgba(15,8,35,.75)" stroke="rgba(15,8,35,.75)" strokeWidth="2.5"/></svg>
          <span>{s.cap}</span></div>))}
      </div>
      <div className="foot-row">
        <p>The places and small moments that recharge me between commits.</p>
        <div className="arrows">
          <button aria-label="Previous" onClick={() => setOff((off + 3) % 4)}><Icon n="left" /></button>
          <button aria-label="Next" onClick={() => setOff((off + 1) % 4)}><Icon n="arrow" /></button>
        </div>
      </div>
    </section>
    <section>
      <div className="sec-t">Playground <svg width="30" height="24" viewBox="0 0 30 24" fill="none" stroke="#2aa8ff" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M2 18 L10 8 L16 14 L26 3M20 3h6v6M4 22h4M12 22h4"/></svg></div>
      <div className="play-grid">
        <div className="lab-card"><b>3D Blob</b><div className="blob"></div></div>
        <div className="lab-card"><b>Glass Orbs</b><div className="orbs">
          <i style={{ width: 34, height: 34, left: 0, top: 18 }}></i><i style={{ width: 30, height: 30, left: 30, top: 0 }}></i><i style={{ width: 26, height: 26, left: 38, top: 32 }}></i></div></div>
        <div className="lab-card"><b>Micro Toggles</b><div className="toggles">
          {tgs.map((on, k) => (<button key={k} className={"tg tg" + (k + 1)} role="switch" aria-checked={on} aria-label={"Toggle " + (k + 1)} onClick={() => setTgs(tgs.map((v, j) => j === k ? !v : v))}></button>))}
        </div></div>
        <div className="lab-card"><b>Theme Me</b><div className="swatches">
          {SWATCHES.map((c, k) => (<button key={c} className="sw" style={{ background: c }} aria-label={"Accent color " + (k + 1)} aria-pressed={cur === c} onClick={() => setAccent(k ? c : null)}></button>))}
        </div></div>
      </div>
      <div className="foot-row">
        <p>Small UI experiments. Flip the toggles, or recolor this whole page.</p>
        <div className="arrows blue">
          <button aria-label="Previous accent" onClick={() => { const n = (SWATCHES.indexOf(cur) + 3) % 4; setAccent(n ? SWATCHES[n] : null); }}><Icon n="left" /></button>
          <button aria-label="Next accent" onClick={() => { const n = (SWATCHES.indexOf(cur) + 1) % 4; setAccent(n ? SWATCHES[n] : null); }}><Icon n="arrow" /></button>
        </div>
      </div>
    </section>
  </div>);
}
