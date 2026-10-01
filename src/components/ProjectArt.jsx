export function Art({ type }) {
  if (type === "site") return (<div className="art" style={{ background: "linear-gradient(160deg,#efeaff,#ffffff)", padding: 10, display: "grid", gap: 6, alignContent: "start" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ width: 16, height: 16, borderRadius: 4, background: "#141226" }}></span>
      <span style={{ display: "flex", gap: 4 }}>{[18, 14, 22, 16].map((w, i) => (<i key={i} style={{ width: w, height: 4, borderRadius: 2, background: "#cfc8ef" }}></i>))}</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 8, alignItems: "center" }}>
      <div style={{ display: "grid", gap: 4 }}>
        <i style={{ height: 7, width: "90%", borderRadius: 3, background: "#16132b" }}></i>
        <i style={{ height: 7, width: "70%", borderRadius: 3, background: "#5b3df5" }}></i>
        <i style={{ height: 4, width: "80%", borderRadius: 2, background: "#cfc8ef" }}></i>
        <i style={{ height: 10, width: 38, borderRadius: 4, background: "#5b3df5", marginTop: 2 }}></i>
      </div>
      <div style={{ background: "#141226", borderRadius: 7, padding: 5, display: "grid", gap: 3 }}>
        <i style={{ height: 6, width: "75%", borderRadius: 3, background: "#3a3366" }}></i>
        <i style={{ height: 6, width: "55%", borderRadius: 3, background: "#7b5dff", justifySelf: "end" }}></i>
        <i style={{ height: 6, width: "65%", borderRadius: 3, background: "#3a3366" }}></i>
      </div>
    </div></div>);
  if (type === "crypto") return (<div className="art" style={{ background: "linear-gradient(160deg,#241a55,#120e2b)" }}>
    <svg viewBox="0 0 200 80" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <defs><linearGradient id="cg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#7b5dff" stopOpacity=".55"/><stop offset="1" stopColor="#7b5dff" stopOpacity="0"/></linearGradient></defs>
      <path d="M0 62 L20 55 L38 58 L56 44 L74 48 L92 30 L112 36 L130 22 L150 28 L170 12 L200 16 L200 80 L0 80Z" fill="url(#cg)"/>
      <path d="M0 62 L20 55 L38 58 L56 44 L74 48 L92 30 L112 36 L130 22 L150 28 L170 12 L200 16" fill="none" stroke="#9d8bff" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
    </svg>
    <div style={{ position: "absolute", left: 10, top: 8, display: "flex", gap: 6 }}>
      {["BTC", "ETH", "SOL"].map((s, i) => (<span key={s} style={{ fontFamily: "var(--f-mono)", fontSize: 10, padding: "2px 7px", borderRadius: 6, background: i ? "rgba(255,255,255,.12)" : "#5b3df5", color: "#fff" }}>{s}</span>))}
    </div></div>);
  if (type === "shop") return (<div className="art" style={{ background: "var(--accent-soft)", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, padding: 10 }}>
    {["#ffe14d", "#ff5fa2", "#7b5dff"].map((c, i) => (<div key={i} style={{ background: "var(--tile)", borderRadius: 8, padding: 6, display: "grid", gap: 4, alignContent: "start" }}>
      <div style={{ background: c, opacity: .75, borderRadius: 5, height: 38 }}></div>
      <div style={{ height: 4, borderRadius: 3, background: "var(--line)" }}></div>
      <div style={{ fontFamily: "var(--f-mono)", fontSize: 9, color: "var(--ink-soft)" }}>${[24, 38, 19][i]}</div></div>))}
  </div>);
  return (<div className="art" style={{ background: "linear-gradient(135deg,#2a1a6e,#7b3df5 60%,#ff5fa2)", display: "grid", placeItems: "center" }}>
    <div style={{ width: 50, height: 84, borderRadius: 10, border: "2px solid #fff", padding: 4, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, alignContent: "start", marginTop: 26 }}>
      {[0, 1, 2, 3].map(i => (<i key={i} style={{ aspectRatio: "1", borderRadius: 3, background: "rgba(255,255,255," + (.35 + i * .12) + ")" }}></i>))}
    </div></div>);
}
