"use server";

import {getDashboardRoute, ROUTES} from "@/lib/constants";
import {redirect} from "next/navigation";
import {createClient} from "./supabase/server";

export async function signup(formData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const country = formData.get("country");

  if (!password || !confirmPassword) {
    return {
      error: "Please provide and confirm your password.",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match.",
    };
  }

  if (password.length < 6) {
    return {
      error: "Password must be at least 6 characters long.",
    };
  }

  const supabase = await createClient();

  const {data, error} = await supabase.auth.signUp({
    email,
    password,

    options: {
      data: {
        name,
        phone,
        country,
      },
      // emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
    user: data.user,
  };
}

export async function login(formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const supabase = await createClient();

    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        error: error.message,
      };
    }

    const {data: profile, error: userError} = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .maybeSingle();

    if (userError) {
      return {
        error: userError.message,
      };
    }

    if (!profile?.role) {
      return {
        error: "No role assigned to this account. Access denied.",
      };
    }

    const redirectTo = getDashboardRoute(profile.role);

    return {
      success: true,
      redirectTo,
      role: profile.role,
    };
  } catch (err) {
    return {
      error: err.message || "An unexpected error occurred during login",
    };
  }
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  return redirect(`${ROUTES.HOME}`);
}
