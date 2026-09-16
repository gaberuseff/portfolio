import {notFound} from "next/navigation";
import {Suspense} from "react";
import {getWorkBySlug, getAllWorks} from "@/services/apiWorks";
import WorkHero from "@/features/public/WorkHero";
import WorkDetails from "@/features/public/WorkDetails";
import SectionWrapper from "@/features/public/SectionWrapper";
import {Skeleton} from "@/components/ui/skeleton";
import JsonLd from "@/components/seo/JsonLd";
import {SITE_CONFIG} from "@/lib/siteConfig";

export async function generateStaticParams() {
  const works = await getAllWorks();
  return (works || []).map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({params}) {
  const {slug} = await params;
  const work = await getWorkBySlug(slug);

  if (!work) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectKeywords = [
    work.title,
    ...(Array.isArray(work.tech_stack) ? work.tech_stack : []),
    "Frontend Case Study",
    "Web Application",
    "Gaber Usef",
    "Portfolio Project",
  ];

  const ogImageUrl = work.image || SITE_CONFIG.ogImage;

  return {
    title: work.title,
    description:
      work.description ||
      `Explore ${work.title} - a technical case study and front-end engineering project built by Gaber Usef.`,
    keywords: projectKeywords,
    alternates: {
      canonical: `/works/${slug}`,
    },
    openGraph: {
      type: "article",
      title: `${work.title} | Gaber Usef`,
      description:
        work.description ||
        `Overview, architecture, and live demo of ${work.title}.`,
      url: `${SITE_CONFIG.siteUrl}/works/${slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${work.title} - Project Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} | Gaber Usef`,
      description: work.description,
      images: [ogImageUrl],
    },
  };
}

function WorkSkeleton() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6 pt-8 animate-pulse">
        <Skeleton className="h-5 w-32 rounded-md" />
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-16 sm:h-24 w-3/4 rounded-2xl" />
        <Skeleton className="h-8 w-1/2 rounded-xl" />
        <div className="flex gap-4 pt-4">
          <Skeleton className="h-12 w-36 rounded-xl" />
          <Skeleton className="h-12 w-36 rounded-xl" />
        </div>
        <Skeleton className="aspect-[16/10] w-full rounded-3xl mt-8" />
      </div>
    </SectionWrapper>
  );
}

async function WorkContent({params}) {
  const {slug} = await params;
  const work = await getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

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
      {
        "@type": "ListItem",
        position: 3,
        name: work.title,
        item: `${SITE_CONFIG.siteUrl}/works/${slug}`,
      },
    ],
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": ["CreativeWork", "SoftwareSourceCode"],
    name: work.title,
    headline: `${work.title} - Frontend Project by Gaber Usef`,
    description: work.description,
    url: `${SITE_CONFIG.siteUrl}/works/${slug}`,
    image: work.image || SITE_CONFIG.ogImage,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.siteUrl,
    },
    creator: {
      "@type": "Person",
      name: SITE_CONFIG.author.name,
    },
    programmingLanguage: Array.isArray(work.tech_stack)
      ? work.tech_stack.join(", ")
      : undefined,
    codeRepository: work.source_link || undefined,
    mainEntityOfPage: `${SITE_CONFIG.siteUrl}/works/${slug}`,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={projectSchema} />
      <article className="min-h-screen">
        <WorkHero work={work} />
        <WorkDetails work={work} />
      </article>
    </>
  );
}

export default function WorkPage({params}) {
  return (
    <Suspense fallback={<WorkSkeleton />}>
      <WorkContent params={params} />
    </Suspense>
  );
}
