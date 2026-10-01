import { useState, useEffect } from "react";
import { Icon } from "./Icons";
import { PROFILE } from "../data/content";

export function MailPop() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = e => { if (!e.target.closest || !e.target.closest(".mailpop-wrap")) setOpen(false); };
    const esc = e => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", close); document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("click", close); document.removeEventListener("keydown", esc); };
  }, [open]);
  const copy = () => {
    const sel = () => { const el = document.getElementById("pop-addr"); const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    try { navigator.clipboard.writeText(PROFILE.email).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); }).catch(sel); } catch (e) { sel(); }
  };
  return (<span className="mailpop-wrap">
    <button className="mail-ic" aria-label="Show email" aria-expanded={open} onClick={() => setOpen(!open)}><Icon n="mail" /></button>
    {open && (<div className="mailpop" role="dialog" aria-label="Email address">
      <small>Email me at</small>
      <span id="pop-addr" className="pop-addr">{PROFILE.email}</span>
      <button className="btn sm" onClick={copy}>{copied ? "Copied" : "Copy email"}</button>
    </div>)}
  </span>);
}
