export type Media = {
  type: "image" | "video";
  src: string;
  alt: string;
  // Poster frame shown for videos before playback (and used as the grid thumbnail).
  poster?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  media: Media[];
};

export type Company = {
  slug: string;
  name: string;
  shortName: string;
  role: string;
  dateRange: string;
  summary: string;
  projects: Project[];
};

export const companies: Company[] = [
  {
    slug: "the-knot-worldwide",
    name: "The Knot Worldwide",
    shortName: "TKWW",
    role: "Senior iOS Engineer",
    dateRange: "2025 — Present",
    summary:
      "Placeholder summary of your role and impact at The Knot Worldwide. Swap this out with a couple sentences on scope, team, and what you shipped.",
    projects: [
      {
        slug: "wedding-website-builder",
        title: "Wedding Website Builder",
        description:
          "Placeholder description. What was the feature, what did you own, what was the outcome?",
        media: [
          {
            type: "image",
            src: "/work/the-knot-worldwide/wedding-website-1.svg",
            alt: "Placeholder screenshot 1 of Wedding Website Builder",
          },
          {
            type: "image",
            src: "/work/the-knot-worldwide/wedding-website-2.svg",
            alt: "Placeholder screenshot 2 of Wedding Website Builder",
          },
        ],
      },
      {
        slug: "guest-list-manager",
        title: "Guest List Manager",
        description:
          "Placeholder description for this project. Replace with real details once ready.",
        media: [
          {
            type: "image",
            src: "/work/the-knot-worldwide/guest-list-1.svg",
            alt: "Placeholder screenshot of Guest List Manager",
          },
          {
            type: "video",
            src: "/work/the-knot-worldwide/guest-list-demo.mp4",
            poster: "/work/the-knot-worldwide/guest-list-2.svg",
            alt: "Placeholder demo video of Guest List Manager",
          },
        ],
      },
    ],
  },
  {
    slug: "urbn",
    name: "URBN",
    shortName: "URBN",
    role: "iOS Engineer",
    dateRange: "2021 — 2025",
    summary:
      "Placeholder summary of your role and impact at URBN. Swap this out with a couple sentences on scope, team, and what you shipped.",
    projects: [
      {
        slug: "unified-shopping-app",
        title: "Unified Shopping App",
        description:
          "Placeholder description. What was the feature, what did you own, what was the outcome?",
        media: [
          {
            type: "image",
            src: "/work/urbn/unified-shopping-1.svg",
            alt: "Placeholder screenshot 1 of Unified Shopping App",
          },
          {
            type: "image",
            src: "/work/urbn/unified-shopping-2.svg",
            alt: "Placeholder screenshot 2 of Unified Shopping App",
          },
        ],
      },
      {
        slug: "ar-try-on",
        title: "AR Try-On Feature",
        description:
          "Placeholder description for this project. Replace with real details once ready.",
        media: [
          {
            type: "image",
            src: "/work/urbn/ar-try-on-1.svg",
            alt: "Placeholder screenshot of AR Try-On Feature",
          },
          {
            type: "video",
            src: "/work/urbn/ar-try-on-demo.mp4",
            poster: "/work/urbn/ar-try-on-2.svg",
            alt: "Placeholder demo video of AR Try-On Feature",
          },
        ],
      },
    ],
  },
];

export function getCompany(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug);
}
