import SectionWrapper from "@/features/public/SectionWrapper";
import WorksSkeleton from "@/features/public/WorksSkeleton";
import WorksList from "@/features/public/WorksList";
import {getAllWorks} from "@/services/apiWorks";
import {Suspense} from "react";

async function AllWorksContent() {
  const works = await getAllWorks();
  return <WorksList works={works} />;
}

function page() {
  return (
    <div>
      <SectionWrapper>
        <Suspense fallback={<WorksSkeleton count={6} />}>
          <AllWorksContent />
        </Suspense>
      </SectionWrapper>
    </div>
  );
}

export default page;
