import {Badge} from "@/components/ui/badge";
import {buttonVariants} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ROUTES} from "@/lib/constants";
import {formatCurrency, formatDate} from "@/lib/helpers";
import {getAllProjects} from "@/services/apiProjects";
import {cn} from "cn";
import Link from "next/link";

const statusVariants = {
  "not-started": "secondary",
  planning: "outline",
  in_progress: "default",
  on_hold: "warning",
  completed: "success",
  cancelled: "destructive",
};

export default async function ProjectsList() {
  const projects = await getAllProjects();

  if (!projects || projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
        <p className="text-lg font-semibold">No projects yet</p>
        <p className="text-sm text-muted-foreground mt-1">
          Click &quot;New Project&quot; above to create your first project.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {projects.map((project) => (
        <Card
          key={project.id || project.slug}
          className="p-5 shadow-none border border-border hover:border-primary/40 transition-colors">
          {project.name}

          <div className="mt-auto pt-3">
            <Link
              href={`${ROUTES.PROJECTS}/${project.slug}`}
              className={cn(
                buttonVariants({variant: "outline"}),
                "w-full cursor-pointer",
              )}>
              View Details
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
