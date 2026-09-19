import {supabase} from "./supabase/client";

export async function createProject(projectData) {
  const cleanedData = Object.fromEntries(
    Object.entries(projectData).map(([key, value]) => [
      key,
      value === "" ? null : value,
    ]),
  );

  const {data, error} = await supabase
    .from("clients_projects")
    .insert([cleanedData]);

  if (error) throw error;
  return data;
}

export async function getAllProjects() {
  const {data, error} = await supabase
    .from("clients_projects")
    .select("id, slug, name, status, base_price, expected_end_date, currency")
    .order("created_at", {ascending: false});

  if (error) throw error;
  return data;
}
