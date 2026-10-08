import { Icon } from "./Icons";
import { PROFILE, PROJECTS } from "../data/content";

export function Bento() {
  return (<div className="panel bento">
    <div className="box">
      <h3>My Internet <svg width="28" height="28" viewBox="0 0 30 30" fill="none" stroke="var(--mint)" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="15" cy="15" r="5"/><path d="M15 2v6M15 22v6M2 15h6M22 15h6M6 6l4 4M20 20l4 4M24 6l-4 4M10 20l-4 4"/></svg></h3>
      <p>A peek into my corner of the web: code on GitHub, career on LinkedIn, illustrations on Instagram.</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <a className="tag" href={PROFILE.github} target="_blank" rel="noopener">GitHub ↗</a>
        <a className="tag" href={PROFILE.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
        <a className="tag" href={PROFILE.instagram} target="_blank" rel="noopener">Instagram ↗</a>
      </div>
      <svg width="56" height="10" viewBox="0 0 56 10" style={{ marginTop: "auto" }} aria-hidden="true"><path d="M2 6 Q 8 1 14 6 T 26 6 T 38 6 T 54 6" fill="none" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round"/></svg>
    </div>
    <div className="box warm">
      <h3>Now Shipping <span className="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span></h3>
      <div className="player"><div className="cover">LH</div><div><b>loophaus</b><span>React · Canvas</span></div></div>
      <div className="track" style={{ background: "color-mix(in srgb,#ff8a3d 20%,var(--tile))" }}><i style={{ width: "72%", background: "#ff8a3d" }}></i></div>
    </div>
    <div className="box">
      <h3>Looking For <span style={{ color: "var(--accent)" }}><Icon n="code" /></span></h3>
      {[["Frontend roles", 70], ["Full-stack roles", 30]].map(([l, v]) => (<div key={l} className="bar-row">
        <div className="lab"><span>{l}</span><span>{v}%</span></div><div className="track"><i style={{ width: v + "%" }}></i></div></div>))}
      <p style={{ marginTop: "auto" }}>Based in {PROFILE.city}.</p>
    </div>
    <div className="box rose">
      <h3>Focus Areas <span style={{ color: "var(--pink)" }}><Icon n="spark" /></span></h3>
      <p>Making data-heavy screens feel calm and fast.</p>
      <div><b style={{ fontSize: 13 }}>What I reach for:</b>
        <ul style={{ marginTop: 6 }}><li>React, Angular & Vite</li><li>Charts and live API data</li><li>Node, Express & MongoDB</li><li>Django & Postgres</li></ul></div>
    </div>
    <div className="box mintbg">
      <h3>Build Log <span style={{ color: "var(--mint)" }}><Icon n="code" /></span></h3>
      <div className="log">
        {PROJECTS.slice().reverse().map(p => (<div key={p.id}><span>{p.year}</span><b style={{ fontWeight: 600 }}>{p.title}</b></div>))}
      </div>
      <span className="chip">Ships when it works</span>
    </div>
  </div>);
}
