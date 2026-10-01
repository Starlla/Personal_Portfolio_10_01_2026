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
    id: "crypto-dash", title: "Crypto Dash", kind: "Frontend", sub: "React dashboard", year: "2026",
    tags: ["React 19", "Vite", "React Router", "Chart.js"],
    role: "Solo build",
    problem: "Market data is noisy. I wanted a fast way to scan the top coins, reorder them by what I care about, and look closer at one.",
    did: ["Pulled live market data from the CoinGecko API with loading and error states", "Added search by name or symbol, a result-count selector, and sorting by market cap, price or 24h change", "Built a coin detail page with a time-series price chart (Chart.js + date-fns)", "Set up client-side routing with an About page and a custom 404"],
    learned: "Keeping filter, sort and limit as plain state in one place made every control easy to combine.",
    art: "crypto",
    links: [{ label: "View on GitHub", href: "https://github.com/Starlla/crypto_dash" }],
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
    id: "pace-exchange", title: "PaceExchange", kind: "Mobile", sub: "Android · Firebase", year: "2019",
    tags: ["Android", "Java", "Firebase"],
    role: "App design and development, including the custom icon set",
    problem: "Students had no easy, trusted place to swap things with each other on campus.",
    did: ["Built listings with photo upload and image processing (rotation, scaling)", "Created a shop feed, likes, and a profile with your own items", "Designed an offer flow: send offers from your inventory, then receive and confirm them", "Stored users, posts and offers in Firebase; drew most of the app's vector icons myself"],
    learned: "My first big project. Shipping a complete flow taught me more than any single feature.",
    art: "mobile",
    links: [{ label: "View on GitHub", href: "https://github.com/Starlla/PaceExchange" }],
  },
];

export const TWIN_ASKS = ["What are you building right now?", "What's your tech stack?", "What kind of role are you looking for?", "Tell me about Crypto Dash"];
