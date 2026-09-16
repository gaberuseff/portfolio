import ContactHero from "@/features/public/ContactHero";
import JsonLd from "@/components/seo/JsonLd";
import {SITE_CONFIG} from "@/lib/siteConfig";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Gaber Usef. Available for frontend engineering, web applications, and technical consulting.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Gaber Usef",
    description:
      "Get in touch with Gaber Usef. Available for frontend engineering, web applications, and technical consulting.",
    url: `${SITE_CONFIG.siteUrl}/contact`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Contact`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Gaber Usef",
    description:
      "Get in touch with Gaber Usef. Available for frontend engineering and web development projects.",
    images: [SITE_CONFIG.ogImage],
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Gaber Usef",
    description:
      "Contact information for Gaber Usef, Frontend Engineer & Web Developer.",
    url: `${SITE_CONFIG.siteUrl}/contact`,
    mainEntity: {
      "@type": "Person",
      name: SITE_CONFIG.author.name,
      email: SITE_CONFIG.email,
      jobTitle: SITE_CONFIG.author.jobTitle,
      url: SITE_CONFIG.siteUrl,
      sameAs: [
        SITE_CONFIG.socials.github,
        SITE_CONFIG.socials.linkedin,
        SITE_CONFIG.socials.facebook,
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${SITE_CONFIG.siteUrl}/contact`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactSchema} />
      <ContactHero />
    </>
  );
}
