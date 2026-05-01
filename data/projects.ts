export interface Project {
  id: string;
  title: string;
  category: "Sports" | "Corporate" | "Social" | "Documentary" | "Originals";
  slug: string;
  thumbnail: string;
  description: string;
  vimeoId: string;
  year?: string;
  location?: string;
}

export const projects: Project[] = [
  // ─── CORPORATE ──────────────────────────────────────────────────────
  {
    id: "corporate-1",
    title: "Corporate Film 01",
    category: "Corporate",
    slug: "corporate",
    vimeoId: "673166538",
    thumbnail: `https://vumbnail.com/673166538.jpg`,
    description: "A cinematic brand identity film for a global enterprise.",
    year: "2022",
  },
  {
    id: "corporate-2",
    title: "Corporate Film 02",
    category: "Corporate",
    slug: "corporate",
    vimeoId: "390278908",
    thumbnail: `https://vumbnail.com/390278908.jpg`,
    description: "Elevating corporate narrative with high-production storytelling.",
    year: "2020",
  },
  {
    id: "corporate-3",
    title: "Corporate Film 03",
    category: "Corporate",
    slug: "corporate",
    vimeoId: "598532085",
    thumbnail: `https://vumbnail.com/598532085.jpg`,
    description: "A brand documentary capturing the essence of organizational identity.",
    year: "2021",
  },

  // ─── SPORTS ─────────────────────────────────────────────────────────
  {
    id: "bvb-asia-tour",
    title: "BVB Asia Tour 2020",
    category: "Sports",
    slug: "sports",
    vimeoId: "456438949",
    thumbnail: `https://vumbnail.com/456438949.jpg`,
    description: "Borussia Dortmund Black & Yellow Asia Tour 2020 highlights.",
    year: "2020",
  },
  {
    id: "sports-2",
    title: "Sports Feature 02",
    category: "Sports",
    slug: "sports",
    vimeoId: "351354734",
    thumbnail: `https://vumbnail.com/351354734.jpg`,
    description: "Capturing the intensity and passion of elite competition.",
    year: "2019",
  },
  {
    id: "sports-3",
    title: "Sports Feature 03",
    category: "Sports",
    slug: "sports",
    vimeoId: "220442039",
    thumbnail: `https://vumbnail.com/220442039.jpg`,
    description: "High-velocity storytelling at the intersection of sport and cinema.",
    year: "2017",
  },

  // ─── SOCIAL IMPACT ───────────────────────────────────────────────────
  {
    id: "aasha",
    title: "AASHA",
    category: "Social",
    slug: "impact-stories",
    vimeoId: "259339935",
    thumbnail: `https://vumbnail.com/259339935.jpg`,
    description: "A story of hope and resilience in the heart of the community.",
    year: "2018",
  },
  {
    id: "social-2",
    title: "Social Impact 02",
    category: "Social",
    slug: "impact-stories",
    vimeoId: "321624356",
    thumbnail: `https://vumbnail.com/321624356.jpg`,
    description: "Documenting grassroots change through the power of film.",
    year: "2019",
  },
  {
    id: "social-3",
    title: "Social Impact 03",
    category: "Social",
    slug: "impact-stories",
    vimeoId: "399122701",
    thumbnail: `https://vumbnail.com/399122701.jpg`,
    description: "Films from the heart — stories that drive systemic change.",
    year: "2019",
  },

  // ─── DOCUMENTARIES ───────────────────────────────────────────────────
  {
    id: "docu-1",
    title: "Documentary 01",
    category: "Documentary",
    slug: "documentaries",
    vimeoId: "381462546",
    thumbnail: `https://vumbnail.com/381462546.jpg`,
    description: "An unflinching look at craft, tradition, and the human condition.",
    year: "2019",
  },
  {
    id: "docu-2",
    title: "Documentary 02",
    category: "Documentary",
    slug: "documentaries",
    vimeoId: "381385741",
    thumbnail: `https://vumbnail.com/381385741.jpg`,
    description: "Unscripted narratives that explore life beyond the surface.",
    year: "2019",
  },
  {
    id: "bat-maker",
    title: "The Bat Maker",
    category: "Documentary",
    slug: "documentaries",
    vimeoId: "237373881",
    thumbnail: `https://vumbnail.com/237373881.jpg`,
    description: "A cinematic look at the craft behind handcrafted cricket bats.",
    year: "2017",
  },

  // ─── ORIGINALS ────────────────────────────────────────────────────────
  {
    id: "originals-1",
    title: "Original Content 01",
    category: "Originals",
    slug: "originals",
    vimeoId: "649805532",
    thumbnail: `https://vumbnail.com/649805532.jpg`,
    description: "Original IP that pushes the boundaries of cinematic storytelling.",
    year: "2021",
  },
  {
    id: "originals-2",
    title: "Original Content 02",
    category: "Originals",
    slug: "originals",
    vimeoId: "412184599",
    thumbnail: `https://vumbnail.com/412184599.jpg`,
    description: "Conceptualizing bold narratives that live beyond the brief.",
    year: "2020",
  },
  {
    id: "originals-3",
    title: "Original Content 03",
    category: "Originals",
    slug: "originals",
    vimeoId: "338686920",
    thumbnail: `https://vumbnail.com/338686920.jpg`,
    description: "Scripted and unscripted originals with cinematic ambition.",
    year: "2018",
  },
];

export const categoryMeta: Record<string, { label: string; tagline: string; description: string; color: string }> = {
  sports: {
    label: "Sports Features",
    tagline: "ACTION & VELOCITY",
    description: "Capturing the intensity, triumph, and soul of competition with top-tier cinematography.",
    color: "#f16f24",
  },
  corporate: {
    label: "Corporate Identity",
    tagline: "BRAND & IDENTITY",
    description: "Elevating brand narrative through cinematic storytelling that connects with modern audiences.",
    color: "#f16f24",
  },
  "impact-stories": {
    label: "Impact Stories",
    tagline: "PURPOSE & CHANGE",
    description: "Films from the heart. Documenting stories that drive change and move the needle.",
    color: "#f16f24",
  },
  documentaries: {
    label: "Documentaries",
    tagline: "NARRATIVE & TRUTH",
    description: "In-depth, unscripted narratives that explore the human condition beyond the lens.",
    color: "#f16f24",
  },
  originals: {
    label: "Original Content",
    tagline: "CONCEPT & CREATION",
    description: "Conceptualizing and producing original IP and scripted content that pushes boundaries.",
    color: "#f16f24",
  },
};
