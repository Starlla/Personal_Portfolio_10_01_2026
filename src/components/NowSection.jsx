import { useState, useEffect } from "react";
import { Icon, Star } from "./Icons";
import RED_POPPY from "../assets/paintings/red-poppy.webp";
import ALSTROEMERIA from "../assets/paintings/alstroemeria.webp";
import ALPINE_MEADOW from "../assets/paintings/alpine-meadow.webp";
import CHERRY_BLOSSOM from "../assets/paintings/cherry-blossom.webp";
import BLUE_POPPY from "../assets/paintings/blue-poppy.webp";

const SCENES = [
  { cap: "red poppy", alt: "Watercolor of a red poppy with buds and feathery leaves", src: RED_POPPY },
  { cap: "alstroemeria", alt: "Watercolor of pink alstroemeria flowers with teal leaves", src: ALSTROEMERIA },
  { cap: "alpine meadow", alt: "Watercolor landscape of snowy mountains, pine trees and a green meadow", src: ALPINE_MEADOW },
  { cap: "cherry blossom", alt: "Watercolor of a cluster of pink cherry blossoms", src: CHERRY_BLOSSOM },
  { cap: "blue poppy", alt: "Watercolor of two blue Himalayan poppies with buds", src: BLUE_POPPY },
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
        {shown.map((s, k) => (<div key={s.cap} className="photo"><img src={s.src} alt={s.alt} loading="lazy" /><span>{s.cap}</span></div>))}
      </div>
      <div className="foot-row">
        <p>Watercolors I paint to unwind between commits.</p>
        <div className="arrows">
          <button aria-label="Previous paintings" onClick={() => setOff((off + SCENES.length - 1) % SCENES.length)}><Icon n="left" /></button>
          <button aria-label="Next paintings" onClick={() => setOff((off + 1) % SCENES.length)}><Icon n="arrow" /></button>
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
