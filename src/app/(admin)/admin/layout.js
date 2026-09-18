import {requireRole} from "@/lib/auth/guards";
import {ROUTES} from "@/lib/constants";

export const instant = false;

export default async function AdminLayout({children}) {
  await requireRole(ROUTES.ADMIN_ROLE);

  return <>{children}</>;
}
