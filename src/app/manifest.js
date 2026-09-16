import {SITE_CONFIG} from "@/lib/siteConfig";

export default function manifest() {
  return {
    name: SITE_CONFIG.title,
    short_name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
