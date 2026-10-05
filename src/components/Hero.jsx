import { Deck } from "./Deck";
import { Icon, Squiggle } from "./Icons";
import { PROFILE } from "../data/content";

export function Hero() {
  return (<section className="panel hero" id="about">
    <span className="hero-blob" aria-hidden="true"></span>
    <svg className="hero-zig" viewBox="0 0 220 60" aria-hidden="true"><path d="M6 42 C 12 14, 24 8, 30 30 S 42 54, 52 28 S 66 4, 76 26 S 92 50, 104 24 S 120 6, 130 30 S 148 48, 158 22 S 176 10, 186 28 S 204 38, 214 16" fill="none" stroke="#2aa8ff" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 46 C 18 22, 26 16, 32 34 S 46 50, 56 32" fill="none" stroke="#2aa8ff" strokeWidth="3" strokeLinecap="round" opacity=".45"/></svg>

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
        <span className="badge">Full stack developer · {PROFILE.city}</span>
        <div className="iam">I am <span className="hand">{PROFILE.first}</span> –</div>
        <h1>Dream<span className="dot">.</span> Code<span className="dot">.</span><br/><span className="u">Build<Squiggle /></span><span className="dot">.</span></h1>
        <p className="lede">A full stack developer who turns live data, APIs and half-formed ideas into products people actually enjoy using.</p>
        <div className="cta">
          <a className="btn" href="#work"><Icon n="brief" /> See my work</a>
          <a className="btn ghost" href={PROFILE.resume} target="_blank" rel="noopener"><Icon n="download" /> View résumé</a>
          <a className="link" href="#contact">Open to full stack roles <Icon n="arrow" /></a>
        </div>
      </div>
      <div className="deck-wrap">
        <svg className="burst" viewBox="0 0 200 200" aria-hidden="true"><path d="M100.0 5.4 L111.7 33.8 L133.2 8.7 L133.3 42.3 L161.9 26.2 L152.8 55.7 L180.1 53.8 L165.8 76.0 L190.9 84.0 L169.5 100.0 L191.2 116.1 L162.7 122.8 L182.6 147.7 L155.6 146.7 L159.8 171.2 L133.9 158.7 L133.2 191.2 L112.8 172.5 L100.0 196.6 L88.0 168.1 L65.9 193.8 L66.8 157.5 L36.4 175.7 L47.7 143.9 L19.3 146.6 L37.1 122.9 L7.0 116.4 L27.5 100.0 L8.0 83.8 L33.6 75.8 L15.9 51.4 L47.2 55.7 L38.0 26.2 L66.7 42.4 L68.4 13.1 L88.3 33.4Z" fill="#ffc83d"/></svg>
        <svg className="loop" viewBox="0 0 120 90" aria-hidden="true"><path d="M8 72 C 28 24, 72 18, 62 50 C 54 76, 18 62, 40 40 C 62 18, 98 28, 112 10" fill="none" stroke="#2aa8ff" strokeWidth="6" strokeLinecap="round"/></svg>
        <Deck />
      </div>
    </div>
  </section>);
}
