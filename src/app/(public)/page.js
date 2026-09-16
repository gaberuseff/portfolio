import TechSlider from "@/features/public/TechSlider";
import About from "@/features/public/About";
import CTA from "@/features/public/CTA";
import Hero from "@/features/public/Hero";
import SomeWorks from "@/features/public/SomeWorks";
import JsonLd from "@/components/seo/JsonLd";
import {SITE_CONFIG} from "@/lib/siteConfig";

export const metadata = {
  title: "Gaber Usef | Frontend Engineer & Web Developer",
  description:
    "Portfolio of Gaber Usef, a Frontend Engineer specializing in high-performance web applications, modern interactive UIs, React, and Next.js.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.siteUrl}/#website`,
        url: SITE_CONFIG.siteUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: {
          "@id": `${SITE_CONFIG.siteUrl}/#person`,
        },
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.siteUrl}/#person`,
        name: SITE_CONFIG.author.name,
        url: SITE_CONFIG.siteUrl,
        jobTitle: SITE_CONFIG.author.jobTitle,
        email: SITE_CONFIG.email,
        image: `${SITE_CONFIG.siteUrl}/imgs/me.jpg`,
        sameAs: [
          SITE_CONFIG.socials.github,
          SITE_CONFIG.socials.linkedin,
          SITE_CONFIG.socials.facebook,
        ],
        knowsAbout: SITE_CONFIG.skills,
        description: SITE_CONFIG.description,
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_CONFIG.siteUrl}/#profilepage`,
        url: SITE_CONFIG.siteUrl,
        name: `${SITE_CONFIG.name} - Profile & Portfolio`,
        isPartOf: {
          "@id": `${SITE_CONFIG.siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${SITE_CONFIG.siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <div>
        <Hero />
        <SomeWorks />
        <About />
        <TechSlider />
        <CTA />
      </div>
    </>
  );
}
