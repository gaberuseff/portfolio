import {toast} from "@/components/ui/toast";
import {createProject} from "@/services/apiProjects";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";

function useCreateProject() {
  const router = useRouter();

  const {
    mutate: createNewProject,
    isPending: isCreating,
    error,
  } = useMutation({
    mutationKey: ["create-project"],
    mutationFn: (projectData) => createProject(projectData),

    onSuccess: () => {
      toast.add({
        title: "Project created successfully",
        type: "success",
      });
      router.refresh();
    },

    onError: (error) => {
      toast.add({
        title: "Error creating project",
        description: error.message,
        type: "error",
      });
    },
  });

  return {
    createNewProject,
    isCreating,
    error,
  };
}

export default useCreateProject;
