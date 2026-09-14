import SectionWrapper from "@/features/public/SectionWrapper";
import WorksSkeleton from "@/features/public/WorksSkeleton";
import {getSomeWorks} from "@/services/apiWorks";
import {Suspense} from "react";
import SomeWorksList from "./SomeWorksList";

async function SomeWorksContent() {
  const works = await getSomeWorks();

  return <SomeWorksList works={works} />;
}

function SomeWorks() {
  return (
    <section>
      <SectionWrapper>
        <Suspense fallback={<WorksSkeleton count={2} />}>
          <SomeWorksContent />
        </Suspense>
      </SectionWrapper>
    </section>
  );
}

export default SomeWorks;
