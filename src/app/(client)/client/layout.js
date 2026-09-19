import AppHeader from "@/components/AppHeader";
import {requireRole} from "@/lib/auth/guards";
import {ROLES} from "@/lib/constants";

export const instant = false;

export default async function ClientLayout({children}) {
  await requireRole(ROLES.CLIENT);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppHeader />
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  );
}
