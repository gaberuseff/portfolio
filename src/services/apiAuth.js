import {createClient} from "./supabase/server";

export async function getCurrentUser() {
  const supabase = await createClient();
  const {data} = await supabase.auth.getUser();
  return data?.user || null;
}

export async function getCurrentUserProfile() {
  const supabase = await createClient();
  const {data} = await supabase.auth.getUser();
  const user = data?.user;

  if (!user) {
    return null;
  }

  const {data: profile} = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile) {
    return null;
  }

  return {
    user,
    profile,
  };
}
