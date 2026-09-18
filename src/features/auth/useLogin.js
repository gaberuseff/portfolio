"use client";

import {toast} from "@/components/ui/toast";
import {login} from "@/services/actions";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";

export function useLogin() {
  const router = useRouter();

  const {mutate: loginUser, isPending} = useMutation({
    mutationFn: async (formData) => {
      const res = await login(formData);
      if (res?.error) {
        throw new Error(res.error);
      }
      return res;
    },
    onSuccess: (data) => {
      toast.add({
        title: "Login Successful",
        description: "Welcome back! Redirecting...",
        type: "success",
      });

      if (data?.redirectTo) {
        router.push(data.redirectTo);
        router.refresh();
      }
    },
    onError: (err) => {
      toast.add({
        title: "Login Failed",
        description: err.message || "An unexpected error occurred during login",
        type: "error",
      });
    },
  });

  return {loginUser, isPending};
}
