import siteShot from "../assets/personal-site.webp";

export const PROFILE = {
  first: "Claire", name: "Claire Tong", city: "San Francisco",
  email: "claire.cy.tong@gmail.com",
  github: "https://github.com/Starlla",
  linkedin: "https://www.linkedin.com/in/chuyutong/",
  instagram: "https://www.instagram.com/claire_illust/",
  twin: "https://clairetong-twin.hf.space",
  resume: "https://drive.google.com/file/d/1ff3q-HRJxVWeX9L3hh9gjk5xFsEEn_t3/view?usp=sharing",
};

export const PROJECTS = [
  {
    id: "personal-site", title: "Personal Website", kind: "Frontend", sub: "React · Vercel", year: "2026",
    tags: ["React", "Vite", "Vercel", "Hugging Face"],
    role: "Solo build: design, code and deploy",
    problem: "I wanted a portfolio that presents projects as engineering decisions, not just thumbnails, and lets people get to know me before a first call.",
    did: ["Built a single-page React app with Vite and deployed it on Vercel", "Organized it into Work, Stack, Digital Twin and Contact sections with in-page navigation", "Embedded my AI digital twin (a Hugging Face Space) so visitors can chat with it on the page", "Wrote the copy and project write-ups around the product decisions behind each build"],
    learned: "A portfolio is a product too. Deciding what a recruiter sees in the first ten seconds shaped every section.",
    art: "site",
    image: siteShot,
    links: [{ label: "Visit live site", href: "https://claire-personal-website-may-2026.vercel.app/" }],
  },
  {
    id: "loophaus", title: "Loophaus", kind: "Frontend", sub: "Landing page · React", year: "2026",
    tags: ["React 18", "Vite", "Canvas", "Accessibility"],
    role: "Solo build: design and code",
    problem: "Music makers share work on feeds built for everyone else. I designed a landing page for a fictional sharing platform made just for producers, sound designers and labels, with a look that feels like sound.",
    did: ["Drew an animated canvas waveform with a moving playhead, crisp on high-DPI screens", "Built giant split-word tabs that swap the feature grid for each audience, keyboard accessible with the ARIA tabs pattern", "Made an interactive track card showing tempo, key, LUFS loudness and stem meters, plus a spin counter", "Added a rotating hero headline, scroll-triggered letter reveals, a build timeline and an early-access form with validation", "Respected reduced-motion settings and kept the layout responsive down to about 360px"],
    learned: "Motion works best when it carries the subject. The waveform and letter reveals tell you it's about music before you read a word.",
    art: "loophaus",
    links: [{ label: "Visit live site", href: "https://creative-website-cyan.vercel.app/" }, { label: "View on GitHub", href: "https://github.com/Starlla/Creative-Website" }],
  },
  {
    id: "ecommerce", title: "MERN Storefront", kind: "Full-stack", sub: "E-commerce · API + UI", year: "2021",
    tags: ["React", "Node · Express", "MongoDB", "JWT", "Braintree"],
    role: "End to end: REST API, data models, React storefront",
    problem: "I wanted to build every layer of a real shopping flow myself, from the database to the payment form.",
    did: ["Designed an Express REST API with Mongoose models for users, products, categories and orders", "Implemented sign-up and sign-in with JWT, plus protected user and admin routes", "Built a shop page that filters by category and price range with load-more pagination", "Added a cart, Braintree checkout and order creation; admins can add products (with image upload) and categories"],
    learned: "Owning both sides of the API taught me to shape responses around what the UI actually needs.",
    art: "shop",
    links: [{ label: "Frontend repo", href: "https://github.com/Starlla/ecommerce-front" }, { label: "API repo", href: "https://github.com/Starlla/Ecommerce" }],
  },
  {
    id: "retro-prints", title: "2 Retro Prints", kind: "Mobile", sub: "iOS app · React Native", year: "2026",
    tags: ["React Native", "TypeScript", "Expo"],
    role: "Solo build: design, code and App Store release",
    problem: "Getting a phone photo ready for an Instax-style print means cropping, framing and exporting across several apps. I wanted one polished app that does it in a few taps.",
    did: ["Built the app with Expo and React Native in TypeScript, and shipped it to the App Store", "Let people capture a new photo or pick one from the camera roll with the image picker", "Rendered print-ready Instax-style frames and saved or shared them through the media library", "Added haptic feedback and a clean, modern UI so each step feels responsive"],
    learned: "Native touches like haptics and the system photo picker make a cross-platform app feel at home on the phone.",
    art: "retro",
    links: [{ label: "View on the App Store", href: "https://apps.apple.com/us/app/2-retro-prints/id6758162927" }],
  },
  {
    id: "unity-games", title: "Unity Mini Games", kind: "Games", sub: "6 browser games · Unity", year: "",
    tags: ["Unity", "C#", "WebGL"],
    role: "Solo builds, published on itch.io",
    problem: "I wanted to learn game development by finishing small games, each one built around a single classic mechanic.",
    did: ["Built six small games in Unity: a platformer, a lunar lander, an endless runner, a Bomberman-style game, a color matcher and a primitives game", "Exported each one to WebGL so it plays right in the browser, no download needed", "Kept the controls simple and keyboard-first, like A / D to move and Space to jump", "Published them all on itch.io under my Cyoi profile"],
    learned: "Small finished games teach more than big unfinished ones. Each one made me tune the feel, the controls and the win or lose loop.",
    art: "games",
    games: [
      { name: "Rabbit Run", note: "Platformer", href: "https://cyoi.itch.io/rabbit-run" },
      { name: "Lunar Lander", note: "Physics", href: "https://cyoi.itch.io/lunarlander" },
      { name: "Endless Runner", note: "Runner", href: "https://cyoi.itch.io/endlessrunner" },
      { name: "Bomberman", note: "Arena", href: "https://cyoi.itch.io/bomberman" },
      { name: "Color Matcher", note: "Puzzle", href: "https://cyoi.itch.io/colormatcher" },
      { name: "Game Of Primitives", note: "Arcade", href: "https://cyoi.itch.io/gameofprimitives" },
    ],
    links: [{ label: "See all on itch.io", href: "https://cyoi.itch.io/" }],
  },
];

export const TWIN_ASKS = ["What are you building right now?", "What's your tech stack?", "What kind of role are you looking for?", "Tell me about your projects"];
