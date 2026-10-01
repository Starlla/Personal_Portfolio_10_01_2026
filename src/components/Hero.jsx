import { Deck } from "./Deck";
import { Icon, Squiggle } from "./Icons";
import { PROFILE } from "../data/content";

export function Hero() {
  return (<section className="panel hero" id="about">
    <div className="brand">
      <a className="logo" href="#top"><span className="mk">CT</span>Claire Tong</a>
      <div className="brand-r">
        <a className="ic" href={PROFILE.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon n="github" /></a>
        <a className="ic" href={PROFILE.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Icon n="linkedin" /></a>
        <a className="ic" href={PROFILE.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Icon n="insta" /></a>
        <a className="btn sm" href="#contact">SAY HELLO <Icon n="out" /></a>
      </div>
    </div>
    <div className="hero-body">
      <div>
        <span className="badge">Frontend engineer · {PROFILE.city}</span>
        <div className="iam">I am <span className="hand">{PROFILE.first}</span> –</div>
        <h1>Building<br/>my <span className="u">internet<Squiggle /></span><span className="dot">.</span></h1>
        <p className="lede">A frontend engineer who turns live data, APIs and half-formed ideas into interfaces people actually enjoy using.</p>
        <div className="cta">
          <a className="btn" href="#work"><Icon n="brief" /> See my work</a>
          <a className="btn ghost" href={PROFILE.resume} target="_blank" rel="noopener"><Icon n="download" /> View résumé</a>
          <a className="link" href="#contact">Open to frontend roles <Icon n="arrow" /></a>
        </div>
      </div>
      <Deck />
    </div>
  </section>);
}
