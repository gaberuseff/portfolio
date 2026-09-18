"use client";

import {toast} from "@/components/ui/toast";
import {ROUTES} from "@/lib/constants";
import {signup} from "@/services/actions";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";

export function useSignup() {
  const router = useRouter();

  const {mutate: signupUser, isPending} = useMutation({
    mutationFn: async (formData) => {
      const res = await signup(formData);
      if (res?.error) {
        throw new Error(res.error);
      }
      return res;
    },

    onSuccess: () => {
      toast.add({
        title: "Account Created",
        description:
          "Your account has been created successfully! Redirecting to login...",
        type: "success",
      });
      router.push(ROUTES.LOGIN);
    },
    onError: (err) => {
      toast.add({
        title: "Registration Failed",
        description:
          err.message || "An unexpected error occurred during signup",
        type: "error",
      });
    },
  });

  return {signupUser, isPending};
}
