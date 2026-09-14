import {cacheLife, cacheTag} from "next/cache";
import {createPublicClient} from "./supabase/server";

export async function getSomeWorks() {
  "use cache";

  cacheLife("hours");
  cacheTag("works");

  const supabase = createPublicClient();

  const {data, error} = await supabase
    .from("works")
    .select("slug,title,image,tech_stack,description")
    .limit(4);

  if (error) {
    console.error("Supabase error fetching works:", error.message, error);
    throw new Error(error.message);
  }

  return data;
}

export async function getAllWorks() {
  "use cache";

  cacheLife("hours");
  cacheTag("works");

  const supabase = createPublicClient();

  const {data, error} = await supabase
    .from("works")
    .select(
      "slug,title,image,tech_stack,description, live_link,source_link,role,features",
    );

  if (error) {
    console.error("Supabase error fetching works:", error.message, error);
    throw new Error(error.message);
  }

  return data;
}

export async function getWorkBySlug(slug) {
  "use cache";

  cacheLife("hours");
  cacheTag("works");

  const supabase = createPublicClient();

  const {data, error} = await supabase
    .from("works")
    .select(
      "slug,title,image,tech_stack,description,live_link,source_link,role,features",
    )
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(
      "Supabase error fetching work by slug:",
      error.message,
      error,
    );
    return null;
  }

  return data;
}
