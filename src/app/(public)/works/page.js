import SectionWrapper from "@/features/public/SectionWrapper";
import WorksSkeleton from "@/features/public/WorksSkeleton";
import WorksList from "@/features/public/WorksList";
import {getAllWorks} from "@/services/apiWorks";
import {Suspense} from "react";
import JsonLd from "@/components/seo/JsonLd";
import {SITE_CONFIG} from "@/lib/siteConfig";

export const metadata = {
  title: "Selected Works & Projects",
  description:
    "Explore front-end engineering projects, modern web applications, and interactive digital products built by Gaber Usef using React, Next.js, and modern web technologies.",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: "Selected Works & Projects | Gaber Usef",
    description:
      "A showcase of high-performance web applications, interactive interfaces, and case studies by Gaber Usef.",
    url: `${SITE_CONFIG.siteUrl}/works`,
  },
};

async function AllWorksContent() {
  const works = await getAllWorks();
  return <WorksList works={works} />;
}

export default function WorksPage() {
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
        name: "Works",
        item: `${SITE_CONFIG.siteUrl}/works`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Selected Works & Projects by Gaber Usef",
    description:
      "A curated catalogue of front-end engineering projects and web applications.",
    url: `${SITE_CONFIG.siteUrl}/works`,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.siteUrl,
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />
      <div className="pt-8 pb-16">
        <SectionWrapper>
          {/* Semantic Page Header for SEO & User Experience */}
          <header className="pb-10 md:pb-14">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-semibold tracking-tight text-foreground">
              Selected Works
            </h1>
            <p className="text-muted-foreground pt-3 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              A curated showcase of web applications, client solutions, and
              case studies engineered with modern web performance, clean design,
              and scalable architecture.
            </p>
          </header>

          <Suspense fallback={<WorksSkeleton count={6} />}>
            <AllWorksContent />
          </Suspense>
        </SectionWrapper>
      </div>
    </>
  );
}
