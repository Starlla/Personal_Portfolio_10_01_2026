import { useEffect } from "react";
import { Icon } from "./Icons";
import { Art } from "./ProjectArt";

export function Drawer({ p, onClose }) {
  useEffect(() => { const k = e => e.key === "Escape" && onClose(); addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, []);
  return (<div className="scrim" onClick={onClose}>
    <aside className="drawer" role="dialog" aria-modal="true" aria-label={p.title + " case study"} onClick={e => e.stopPropagation()}>
      <div className="top-r"><span className="badge">{p.kind} · {p.year}</span><button className="x" onClick={onClose} aria-label="Close" autoFocus><Icon n="x" /></button></div>
      <h2>{p.title}</h2>
      {p.image ? (<img className="shot" src={p.image} alt={p.title + " screenshot"} />) : (<Art type={p.art} />)}
      <h4>Role</h4><p>{p.role}</p>
      <h4>The problem</h4><p>{p.problem}</p>
      <h4>What I did</h4><ul>{p.did.map(d => (<li key={d}>{d}</li>))}</ul>
      <h4>What I took away</h4><div className="note">{p.learned}</div>
      <h4>Stack</h4><div className="tags">{p.tags.map(t => (<span key={t}>{t}</span>))}</div>
      <div className="links">{p.links.map((l, i) => (<a key={l.href} className={i ? "link" : "btn"} href={l.href} target="_blank" rel="noopener">{l.label} <Icon n="out" /></a>))}</div>
    </aside>
  </div>);
}
