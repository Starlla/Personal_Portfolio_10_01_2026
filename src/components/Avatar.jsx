import { useEffect, useRef } from "react";
import AVATAR from "../assets/claire-avatar.webp";

export function Avatar() {
  const eyeRef = useRef(null), irisRef = useRef(null);
  useEffect(() => {
    let raf = 0;
    const move = e => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const eye = eyeRef.current, iris = irisRef.current;
        if (!eye || !iris) return;
        const r = eye.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        const d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 220);
        iris.style.transform = "translate(" + (dx / d * k * 13).toFixed(2) + "px," + (dy / d * k * 9).toFixed(2) + "px)";
      });
    };
    const reset = () => { if (irisRef.current) irisRef.current.style.transform = "translate(0px,0px)"; };
    addEventListener("pointermove", move);
    document.addEventListener("pointerleave", reset);
    return () => { removeEventListener("pointermove", move); document.removeEventListener("pointerleave", reset); cancelAnimationFrame(raf); };
  }, []);
  return (<>
    <img className="avatar" src={AVATAR} alt="Illustrated portrait of Claire" />
    <svg className="avatar" viewBox="0 0 1254 1254" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <clipPath id="eyeclip"><path d="M471 352 C 468 318, 505 302, 535 304 C 560 306, 574 325, 571 352 C 569 376, 548 386, 522 384 C 494 382, 474 372, 471 352 Z"/></clipPath>
        <radialGradient id="eyewhite" cx="45%" cy="62%" r="65%"><stop offset="0.55" stopColor="#fbfbfb"/><stop offset="1" stopColor="#d9d6db"/></radialGradient>
        <linearGradient id="eyelid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8a7f86" stopOpacity=".6"/><stop offset=".3" stopColor="#8a7f86" stopOpacity="0"/></linearGradient>
        <radialGradient id="irisg" cx="50%" cy="60%" r="55%"><stop offset="0" stopColor="#2a1408"/><stop offset=".5" stopColor="#5a2f12"/><stop offset=".82" stopColor="#9a5a24"/><stop offset="1" stopColor="#4a250c"/></radialGradient>
      </defs>
      <g clipPath="url(#eyeclip)">
        <rect ref={eyeRef} x="465" y="300" width="112" height="90" fill="url(#eyewhite)"/>
        <g ref={irisRef} style={{ transition: "transform .12s ease-out" }}>
          <circle cx="531" cy="348" r="37" fill="url(#irisg)" stroke="#231005" strokeWidth="2.5"/>
          <circle cx="531" cy="349" r="21" fill="#120703"/>
          <circle cx="543" cy="332" r="7.5" fill="#fff"/>
          <circle cx="519" cy="334" r="4" fill="#fff" opacity=".9"/>
        </g>
        <rect x="465" y="300" width="112" height="90" fill="url(#eyelid)"/>
      </g>
    </svg>
  </>);
}
