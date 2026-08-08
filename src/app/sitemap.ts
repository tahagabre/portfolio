import type { MetadataRoute } from "next";
import { companies } from "@/data/companies";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const workPages: MetadataRoute.Sitemap = companies.map((company) => ({
    url: `${site.url}/work/${company.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...workPages,
  ];
}
