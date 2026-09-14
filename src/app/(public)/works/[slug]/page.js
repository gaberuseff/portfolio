import {notFound} from "next/navigation";
import {Suspense} from "react";
import {getWorkBySlug, getAllWorks} from "@/services/apiWorks";
import WorkHero from "@/features/public/WorkHero";
import WorkDetails from "@/features/public/WorkDetails";
import SectionWrapper from "@/features/public/SectionWrapper";
import {Skeleton} from "@/components/ui/skeleton";

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
    };
  }

  return {
    title: `${work.title} | Gaber Usef Portfolio`,
    description:
      work.description || `Overview and technical case study of ${work.title}.`,
    openGraph: {
      title: `${work.title} | Gaber Usef`,
      description: work.description,
      images: work.image ? [{url: work.image}] : [],
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

  return (
    <article className="min-h-screen">
      <WorkHero work={work} />
      <WorkDetails work={work} />
    </article>
  );
}

export default function WorkPage({params}) {
  return (
    <Suspense fallback={<WorkSkeleton />}>
      <WorkContent params={params} />
    </Suspense>
  );
}
