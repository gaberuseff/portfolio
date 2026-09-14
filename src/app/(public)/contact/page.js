import ContactHero from "@/features/public/ContactHero";

export const metadata = {
  title: "Contact | Gaber Usef",
  description:
    "Get in touch with Gaber Usef. Available for web development projects, modern web apps, and technical consulting.",
  openGraph: {
    title: "Contact | Gaber Usef",
    description:
      "Get in touch with Gaber Usef. Available for web development projects, modern web apps, and technical consulting.",
    url: "https://gaberuseff.info/contact",
    siteName: "Gaber Usef",
    images: [
      {
        url: "https://gaberuseff.info/thumbnail-img.png",
        width: 1200,
        height: 630,
        alt: "Gaber Usef - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

function page() {
  return <ContactHero />;
}

export default page;
