import {Card} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

export function ProjectItemSkeleton() {
  return (
    <Card className="p-5 shadow-none border border-border flex flex-col justify-between gap-4 h-full">
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4 rounded-md" />
        <Skeleton className="h-4 w-1/2 rounded-md" />
      </div>

      <div className="mt-auto pt-3">
        <Skeleton className="h-9 w-full rounded-3xl" />
      </div>
    </Card>
  );
}

export default function ProjectsSkeleton({count = 4}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({length: count}).map((_, i) => (
        <ProjectItemSkeleton key={i} />
      ))}
    </div>
  );
}
