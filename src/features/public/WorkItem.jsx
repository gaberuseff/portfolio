import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import {ROUTES} from "@/lib/constants";

function WorkItem({work}) {
  return (
    <Link href={ROUTES.WORKS_SLUG(work.slug)} className="group block h-full">
      <Card className="h-full !p-0 gap-0 overflow-hidden border border-border bg-card shadow-none">
        {/* Project Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
          <Image
            src={work.image}
            alt={work.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 ease-out"
          />
        </div>

        {/* Card Header with Title, Action Icon, and Description */}
        <CardHeader className="px-6 pt-5 pb-3">
          <CardTitle className="text-xl font-semibold tracking-tight text-foreground">
            {work.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-sm font-light text-muted-foreground pt-1">
            {work.description}
          </CardDescription>
        </CardHeader>

        {/* Tech Stack Pills in Card Footer */}
        {work.tech_stack && work.tech_stack.length > 0 && (
          <CardFooter className="mt-auto px-6 pb-6 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {work.tech_stack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}

export default WorkItem;
