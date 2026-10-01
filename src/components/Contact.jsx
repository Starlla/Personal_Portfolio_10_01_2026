import { useState } from "react";
import { Icon, Squiggle } from "./Icons";
import { PROFILE } from "../data/content";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    const sel = () => { const el = document.getElementById("email-addr"); const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    try { navigator.clipboard.writeText(PROFILE.email).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }).catch(sel); } catch (e) { sel(); }
  };
  const feats = [["smile", "Frontend first", "Interfaces that feel fast and friendly."], ["spark", "Full-stack ready", "Node, Express and MongoDB when needed."], ["phone", "Mobile ready", "Cross-platform apps with React Native."], ["heart", "Detail obsessed", "Loading states, errors, edge cases."]];
  return (<div className="panel cta-band" id="contact">
    <div className="cta-l">
      <h2>Let's build <span className="sw-u">something<Squiggle /></span> awesome together!</h2>
      <svg className="env" viewBox="0 0 160 132" aria-hidden="true">
        <g transform="rotate(-8 80 70)" strokeLinejoin="round" strokeLinecap="round">
          <rect x="18" y="52" width="124" height="72" rx="8" style={{ fill: "color-mix(in srgb,var(--accent) 22%,var(--tile))" }} stroke="var(--accent)" strokeWidth="2.5"/>
          <path d="M18 56 L80 8 L142 56 Z" style={{ fill: "color-mix(in srgb,var(--accent) 12%,var(--tile))" }} stroke="var(--accent)" strokeWidth="2.5"/>
          <rect x="32" y="22" width="96" height="78" rx="6" fill="var(--tile)" stroke="var(--accent)" strokeWidth="2.5"/>
          <path d="M44 32h34M44 39h22" style={{ stroke: "color-mix(in srgb,var(--accent) 45%,var(--tile))" }} strokeWidth="3"/>
          <path d="M80 70c-11-8-17-12-17-19a8.5 8.5 0 0 1 17-2.5 8.5 8.5 0 0 1 17 2.5c0 7-6 11-17 19z" fill="var(--accent)"/>
          <path d="M18 56 L80 96 L142 56 V116 a8 8 0 0 1-8 8 H26 a8 8 0 0 1-8-8 Z" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="2.5"/>
          <path d="M20 122 L66 88 M140 122 L94 88" stroke="var(--accent)" strokeWidth="2.5" fill="none"/>
        </g>
        <path d="M128 14l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6-4.5-4 6-1z" fill="none" stroke="var(--pink)" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M22 18v8M18 22h8" stroke="var(--yellow)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <div className="cta-r">
        <p>Hiring for a frontend role, or have a project in mind? My inbox is always open.</p>
        <div className="mail">
          <span id="email-addr" className="addr">{PROFILE.email}</span>
          <button className="btn sm" onClick={copy}>{copied ? "Copied" : "Copy email"}</button>
        </div>
        <a className="link" style={{ marginTop: 14 }} href={PROFILE.resume} target="_blank" rel="noopener"><Icon n="download" /> View my résumé</a>
      </div>
    </div>
    <div className="feats">
      {feats.map(([ic, t, d]) => (<div key={t} className="feat"><Icon n={ic} /><b>{t}</b><span>{d}</span></div>))}
    </div>
  </div>);
}
