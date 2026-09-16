import {getAllWorks} from "@/services/apiWorks";
import {SITE_CONFIG} from "@/lib/siteConfig";

export default async function sitemap() {
  const baseUrl = SITE_CONFIG.siteUrl;

  let works = [];
  try {
    works = (await getAllWorks()) || [];
  } catch (error) {
    console.error("Failed to load works for dynamic sitemap:", error);
  }

  const workUrls = works.map((work) => ({
    url: `${baseUrl}/works/${work.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...workUrls,
  ];
}
