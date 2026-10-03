import { useState } from "react";
import { Avatar } from "./Avatar";
import MOCHI from "../assets/mochi.webp";

const DECK = [
  { id: "me", bg: "#efe8e6" },
  { id: "mochi", bg: "#3ea6e6", img: MOCHI, alt: "Mochi the cat in round glasses: small cat, big dreams" },
  { id: "shop", bg: "linear-gradient(170deg,#ffd27a 0%,#ff7a8a 45%,#3a2a8a 100%)", label: "MERN Storefront", sub: "Node · MongoDB" },
  { id: "pace", bg: "linear-gradient(170deg,#7ad3ff 0%,#7b5dff 50%,#24124f 100%)", label: "PaceExchange", sub: "Android · Firebase" },
];

const POS = ["rotate(-4deg)", "translate(26px,-6px) rotate(4deg)", "translate(48px,-4px) rotate(9deg)", "translate(66px,4px) rotate(14deg)"];

export function Deck() {
  const [i, setI] = useState(0);
  return (<button className="deck" onClick={() => setI((i + 1) % DECK.length)} aria-label="Shuffle cards">
    {DECK.map((c, k) => {
      const pos = (k - i + DECK.length) % DECK.length;
      return (<div key={c.id} className="card" style={{ transform: POS[pos], zIndex: 10 - pos, background: c.bg }}>
        {c.id === "me" ? (<Avatar />) : c.img ? (<img className="avatar" src={c.img} alt={c.alt} />) : (<><svg className="doodle" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ inset: 0, width: "100%", height: "100%" }}>
            <circle cx="68" cy="34" r="13" fill="rgba(255,240,200,.75)"/>
            <path d="M0 78 Q 25 66 50 74 T 100 70 L100 100 L0 100Z" fill="rgba(20,10,60,.5)"/>
            <path d="M0 86 Q 30 78 60 86 T 100 84 L100 100 L0 100Z" fill="rgba(20,10,60,.8)"/>
          </svg>
          <div className="lbl">{c.label}<small>{c.sub}</small></div></>)}
        <span className="num">{String(k + 1).padStart(2, "0")}</span>
      </div>);
    })}
    <span className="deck-hint">tap to shuffle ↻</span>
  </button>);
}
