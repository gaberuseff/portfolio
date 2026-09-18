import Header from "@/features/client/layout/Header";
import {requireRole} from "@/lib/auth/guards";
import {ROUTES} from "@/lib/constants";

export const instant = false;

export default async function ClientLayout({children}) {
  await requireRole(ROUTES.CLIENT_ROLE);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  );
}
