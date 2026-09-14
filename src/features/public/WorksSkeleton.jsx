import {Card, CardHeader, CardFooter} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

export function WorkCardSkeleton() {
  return (
    <Card className="h-full !p-0 gap-0 overflow-hidden border border-border bg-card shadow-none">
      {/* Image Skeleton */}
      <Skeleton className="aspect-[16/10] w-full rounded-none" />

      {/* Header Skeleton with Title & Description */}
      <CardHeader className="px-6 pt-5 pb-3 space-y-2">
        <Skeleton className="h-6 w-3/4 rounded-lg" />
        <div className="space-y-1.5 pt-1">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
        </div>
      </CardHeader>

      {/* Footer Skeleton with Badges */}
      <CardFooter className="mt-auto px-6 pb-6 pt-2">
        <div className="flex flex-wrap gap-1.5">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
          <Skeleton className="h-5 w-18 rounded-full" />
        </div>
      </CardFooter>
    </Card>
  );
}

function WorksSkeleton({count = 4}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {Array.from({length: count}).map((_, i) => (
        <WorkCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default WorksSkeleton;
