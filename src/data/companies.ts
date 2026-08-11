export type Media = {
  type: "image" | "video";
  src: string;
  // Real pixel dimensions of the asset, used to render media at its
  // true aspect ratio instead of forcing it into a fixed box.
  width: number;
  height: number;
  alt: string;
  caption: string;
  // Poster frame shown for videos before playback (and used as the grid thumbnail).
  poster?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  media: Media[];
};

export type AppLink = {
  link: string;
  name: string;
};

export type Company = {
  slug: string;
  name: string;
  shortName: string;
  role: string;
  dateRange: string;
  // ISO dates (YYYY-MM), used for structured data (JSON-LD) rather than
  // display - dateRange above is what's actually rendered on the page.
  startDate: string;
  endDate?: string;
  // City-level only, deliberately no street address - used for JSON-LD.
  workLocation?: { city: string; region: string; country: string };
  // Employment arrangement (remote/hybrid/onsite) as plain text - schema.org
  // has no standard structured property for this on a Person's role.
  workArrangement: string;
  summary: string[];
  projects: Project[];
  appLinks: AppLink[];
};

export const companies: Company[] = [
  {
    slug: "the-knot-worldwide",
    name: "The Knot Worldwide",
    shortName: "TKWW",
    role: "Senior iOS Engineer",
    dateRange: "2025 — Present",
    startDate: "2025-05",
    workLocation: { city: "New York", region: "NY", country: "US" },
    workArrangement: "Hybrid — 2 days per week in the office.",
    summary: [
      "Vendors bring in most of the revenue at TKWW, but prior to 2025, they were burdened with messaging their leads in a cumbersome web app with poor load times, inconsistent behaviors, and no notifications when a lead reached out. Joining a team of three engineers, I was tasked with remaking the app from scratch in a way that was familiar to most iPhone users without asking them to change how they worked.",
      "With WeddingPro released natively with SwiftUI and Swift Concurrency in October 2025, paid Monthly Active Users rose to 24% from a 10% target, sessions per user per month 3.7x'd, daily active users rose 35%, and vendors responded on our platform 75% faster.",
    ],
    projects: [
      {
        slug: "weddingpro-inbox",
        title: "WeddingPro Inbox",
        description:
          "The Inbox for WeddingPro, a native iOS app for vendors to manage their leads and messages.",
        media: [
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/the-knot-worldwide/inbox.png",
            alt: "inbox screenshot of WeddingPro",
            caption: "The inbox of WeddingPro, showing a list of consolidated leads across two brands and their messages.",
          },
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/the-knot-worldwide/inbox_swipe_actions.png",
            alt: "inbox swipe actions screenshot of WeddingPro",
            caption: "Swipe actions in the inbox of WeddingPro, allowing quick management of leads.",
          },
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/the-knot-worldwide/inbox_filter_star.png",
            alt: "inbox filter by starred leads screenshot of WeddingPro",
            caption: "Filtering starred leads in the inbox of WeddingPro.",
          },
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/the-knot-worldwide/inbox_search.png",
            alt: "inbox search screenshot of WeddingPro",
            caption: "Searching in the WeddingPro inbox.",
          },
          {
            type: "video",
            width: 1179,
            height: 2556,
            src: "/work/the-knot-worldwide/inbox_startup_and_refresh.mp4",
            alt: "startup and refresh video of WeddingPro",
            caption: "Startup and refresh of the WeddingPro inbox.",
            poster: "/work/the-knot-worldwide/inbox_startup_and_refresh_thumbnail.png",
          }
        ],
      },
      {
        slug: "weddingpro-conversation",
        title: "WeddingPro Conversation",
        description:
          "The Conversation for WeddingPro, a native iOS app for vendors to manage their leads and messages.",
        media: [
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/the-knot-worldwide/compose_entry.png",
            alt: "conversation screenshot of WeddingPro",
            caption: "The conversation view of WeddingPro, showing a list of messages with a lead.",
          },
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/the-knot-worldwide/compose_collapsed_attachments.png",
            alt: "collapsed textfield screenshot of WeddingPro",
            caption: "Collapsed textfield in the conversation view of WeddingPro.",
          },
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/the-knot-worldwide/compose_focused_attachments.png",
            alt: "focused textfield screenshot of WeddingPro",
            caption: "Focused textfield in the conversation view of WeddingPro.",
          },
          {
            type: "video",
            width: 1179,
            height: 2556,
            src: "/work/the-knot-worldwide/compose_expansion.mp4",
            alt: "expanding textfield video of WeddingPro",
            caption: "Expanding the textfield in the conversation view of WeddingPro.",
            poster: "/work/the-knot-worldwide/compose_expansion_thumbnail.png",
          },
          {
            type: "video",
            width: 1179,
            height: 2556,
            src: "/work/the-knot-worldwide/inbox_reply.mp4",
            alt: "replying to a lead video of WeddingPro",
            caption: "Replying to a lead in the WeddingPro inbox.",
            poster: "/work/the-knot-worldwide/inbox_reply_thumbnail.png",
          },
        ],
      },
    ],
    appLinks: [
      {
        link: "https://apps.apple.com/us/app/weddingpro-for-vendors/id1480717898",
        name: "WeddingPro"
      }
    ],
  },
  {
    slug: "urbn",
    name: "URBN",
    shortName: "URBN",
    role: "iOS Engineer",
    dateRange: "2021 — 2025",
    startDate: "2021-07",
    endDate: "2025-05",
    workArrangement: "Fully remote.",
    summary:
      [
        "Joining a team of ten mobile engineers post-grad, I led the retention vertical for URBN's whitelabeled iOS shopping apps, Urban Outfitters, Anthropologie, and Free People.",
        "Written in Swift with UIKit and serving 350K+ daily active users, I owned the Back-in-Stock feature end-to-end across all three brands, from the product page through signup and confirmation. I later replaced an underperforming third-party return-and-exchange vendor with a fully native flow. I refactored authentication to surface contextually anywhere in the app rather than gating users at a single entry point, and shipped the orchestration APIs both our iOS and Android teams built on."
      ],
    projects: [
      {
        slug: "back-in-stock",
        title: "Back in Stock",
        description:
          "Adding users to a waitlist for out-of-stock products, and notifying them when the product is available again.",
        media: [
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/urbn/join_waitlist_cta.png",
            alt: "back in stock waitlist CTA screenshot",
            caption: "Join waitlist CTA in the Product Detail Page.",
          },
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/urbn/join_waitlist_form.png",
            alt: "join waitlist form screenshot",
            caption: "Join waitlist modal on the Product Detail Page.",
          },
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/urbn/join_waitlist_confirmation.png",
            alt: "join waitlist confirmation screenshot",
            caption: "Join waitlist confirmation modal above the join waitlist form.",
          },
          {
            type: "video",
            width: 1179,
            height: 2556,
            src: "/work/urbn/join_waitlist_flow.mp4",
            alt: "join waitlist flow video",
            caption: "Joining the waitlist from CTA to confirmation.",
            poster: "/work/urbn/join_waitlist_cta.png",
          },
        ],
      },
      {
        slug: "return-exchanges",
        title: "Return and Exchanges",
        description:
          "Built a native, in-house integration of return and exchanges, replacing a third-party vendor that was underperforming.",
        media: [
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/urbn/return_exchanges_select_product.png",
            alt: "return and exchanges select product screenshot",
            caption: "Selecting a product to return or exchange.",
          },
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/urbn/return_exchanges_select_reason.png",
            alt: "return and exchanges select reason screenshot",
            caption: "Selecting a reason for the return or exchange.",
          },
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/urbn/return_exchanges_select_return_method.png",
            alt: "return and exchanges select return method screenshot",
            caption: "Selecting a return method for the product.",
          },
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/urbn/return_exchanges_exchange_selected.png",
            alt: "return and exchanges exchange selected screenshot",
            caption: "Exchange selected for the product.",
          },
          {
            type: "image",
            width: 1179,
            height: 2556,
            src: "/work/urbn/return_exchanges_find_store.png",
            alt: "return and exchanges select find store screenshot",
            caption: "Selecting a store to return/exchange the product.",
          },
          {
            type: "video",
            width: 1179,
            height: 2556,
            src: "/work/urbn/return_exchanges_summary.mp4",
            poster: "/work/urbn/return_exchanges_select_product.png",
            alt: "video for return and exchanges flow",
            caption: "Flow of returning or exchanging a product, from the product to confirmation.",
          },
        ],
      },
    ],
    appLinks: [
      {
        link: "https://apps.apple.com/us/app/urban-outfitters/id358821736",
        name: "Urban Outfitters"
      },
      {
        link: "https://apps.apple.com/us/app/anthropologie/id922496703",
        name: "Anthropologie"
      },
      {
        link: "https://apps.apple.com/us/app/free-people/id659532790",
        name: "Free People"
      }
    ],
  },
];

export function getCompany(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug);
}
