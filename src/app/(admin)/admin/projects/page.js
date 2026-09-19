import ProjectForm from "@/features/admin/project/ProjectForm";
import ProjectsList from "@/features/admin/projects/ProjectsList";
import ProjectsSkeleton from "@/features/admin/projects/ProjectsSkeleton";
import {Suspense} from "react";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground text-sm">
            Manage and view all your client projects.
          </p>
        </div>
        <div>
          <ProjectForm />
        </div>
      </div>

      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsList />
      </Suspense>
    </div>
  );
}
