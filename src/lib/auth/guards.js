import {redirect} from "next/navigation";
import {getCurrentUserProfile} from "@/services/apiAuth";
import {ROUTES} from "../constants";

export async function requireAuth() {
  const currentUser = await getCurrentUserProfile();

  if (!currentUser) {
    redirect(`${ROUTES.LOGIN}`);
  }

  return currentUser;
}

export async function requireRole(role) {
  const currentUser = await requireAuth();

  if (currentUser?.profile?.role !== role) {
    redirect(`${ROUTES.UNAUTHORIZED}`);
  }

  return currentUser;
}
