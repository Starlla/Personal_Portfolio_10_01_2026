import { useState } from "react";
import { Icon, Star } from "./Icons";
import { Art } from "./ProjectArt";
import { PROFILE, PROJECTS } from "../data/content";

export function Work({ onOpen }) {
  const [f, setF] = useState("All");
  const kinds = ["All", ...new Set(PROJECTS.map(p => p.kind))];
  const list = PROJECTS.filter(p => f === "All" || p.kind === f);
  return (<section className="panel work" id="work">
    <div className="work-head"><h2>Featured Work</h2><Star size={28} color="var(--pink)" /></div>
    <div className="pills" role="group" aria-label="Filter projects">
      {kinds.map(k => (<button key={k} className="pill" aria-pressed={f === k} onClick={() => setF(k)}>{k}</button>))}
    </div>
    <div className="tiles">
      {list.map((p, idx) => (<button key={p.id}
          className={"tile" + (list.length % 2 && idx === 0 ? " wide" : "") + (p.art === "shop" ? " light" : "")}
          onClick={() => onOpen(p)} aria-label={"Open case study: " + p.title}>
        <b>{p.title}</b><small>{p.sub} · {p.year}</small>
        <Art type={p.art} />
        <Icon n="out" cls="go" />
      </button>))}
    </div>
    <a className="link" href={PROFILE.github} target="_blank" rel="noopener">More on GitHub <Icon n="arrow" /></a>
  </section>);
}
