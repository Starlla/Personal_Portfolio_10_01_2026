import { Icon } from "./Icons";
import { PROFILE } from "../data/content";

export function Dock() {
  const items = [["user", "About", "#about"], ["brief", "Work", "#work"], ["clock", "Now", "#now"], ["bot", "Digital Twin", "#twin"], ["chat", "Contact", "#contact"]];
  return (<nav className="dock" aria-label="Sections">
    {items.map(([ic, l, h]) => (<a key={l} href={h} aria-label={l}><Icon n={ic} /><span>{l}</span></a>))}
    <a href={PROFILE.resume} target="_blank" rel="noopener" aria-label="View résumé"><Icon n="download" /><span>Résumé</span></a>
    <a href={PROFILE.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon n="github" /><span>GitHub</span></a>
  </nav>);
}
