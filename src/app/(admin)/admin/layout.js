import AppHeader from "@/components/AppHeader";
import AdminSidebar from "@/features/admin/AdminSidebar";
import {requireRole} from "@/lib/auth/guards";
import {ROLES} from "@/lib/constants";

export const instant = false;

export default async function AdminLayout({children}) {
  await requireRole(ROLES.ADMIN);

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />

      <div className="flex-1 overflow-auto">
        <AppHeader />
        <main className="p-4">{children} </main>
      </div>
    </div>
  );
}
