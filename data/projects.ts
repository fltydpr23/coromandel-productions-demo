export interface Project {
  id: string;
  title: string;
  category: "Sports" | "Corporate" | "Social" | "Documentary" | "Originals";
  thumbnail: string;
  description: string;
  vimeoId: string;
  duration?: string;
  location?: string;
  year?: string;
}

export const projects: Project[] = [
  {
    id: "bat-maker",
    title: "The Bat Maker",
    category: "Documentary",
    vimeoId: "363797463",
    thumbnail: "https://vumbnail.com/363797463.jpg",
    description: "A cinematic look at the craft and dedication behind handcrafted cricket bats.",
    year: "2019",
  },
  {
    id: "food-from-the-heart",
    title: "Food from the Heart",
    category: "Social",
    vimeoId: "461641490",
    thumbnail: "https://vumbnail.com/461641490.jpg",
    description: "Documenting the mission to combat food insecurity and bring people together.",
    year: "2020",
  },
  {
    id: "bvb-asia-tour",
    title: "BVB Asia Tour 2020",
    category: "Sports",
    vimeoId: "456438949",
    thumbnail: "https://vumbnail.com/456438949.jpg",
    description: "Borussia Dortmund Black & Yellow Asia Tour 2020 highlights.",
    year: "2020",
  },
  {
    id: "lions-league",
    title: "Lions League",
    category: "Sports",
    vimeoId: "894873003",
    thumbnail: "https://vumbnail.com/894873003.jpg",
    description: "Capturing the intensity and passion of the Lions League football competition.",
    year: "2023",
  },
  {
    id: "aasha",
    title: "AASHA",
    category: "Social",
    vimeoId: "259339935",
    thumbnail: "https://vumbnail.com/259339935.jpg",
    description: "A story of hope and resilience in the heart of the community.",
    year: "2018",
  },
  {
    id: "ocean-delight",
    title: "Ocean Delight",
    category: "Corporate",
    vimeoId: "335568732",
    thumbnail: "https://vumbnail.com/335568732.jpg",
    description: "A visually stunning showcase of maritime excellence and product quality.",
    year: "2019",
  },
];
