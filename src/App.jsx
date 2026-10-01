import { useState } from "react";
import { Bento } from "./components/Bento";
import { Contact } from "./components/Contact";
import { Twin } from "./components/DigitalTwin";
import { Dock } from "./components/Dock";
import { Work } from "./components/FeaturedWork";
import { Hero } from "./components/Hero";
import { Icon } from "./components/Icons";
import { MailPop } from "./components/MailPopover";
import { Three } from "./components/NowSection";
import { Drawer } from "./components/ProjectDrawer";
import { PROFILE } from "./data/content";

export function App() {
  const [open, setOpen] = useState(null);
  return (<>
    <main className="page" id="top">
      <div className="top"><Hero /><Work onOpen={setOpen} /></div>
      <Bento />
      <Three />
      <Twin />
      <Contact />
      <footer>
        <a className="logo" href="#top"><span className="mk">CT</span>Claire Tong</a>
        <small>© {new Date().getFullYear()} Claire Tong · Built with React</small>
        <nav aria-label="Social">
          <a href={PROFILE.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon n="github" /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Icon n="linkedin" /></a>
          <a href={PROFILE.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Icon n="insta" /></a>
          <a href={PROFILE.resume} target="_blank" rel="noopener" aria-label="View résumé"><Icon n="download" /></a>
          <MailPop />
        </nav>
      </footer>
    </main>
    <Dock />
    {open && (<Drawer p={open} onClose={() => setOpen(null)} />)}
  </>);
}
