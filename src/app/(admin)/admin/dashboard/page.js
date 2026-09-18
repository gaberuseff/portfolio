import {getCurrentUser} from "@/services/apiAuth";
import {buttonVariants} from "@/components/ui/button";
import {ShieldCheck, Home, LogOut, Users, Briefcase, FileText} from "lucide-react";
import Link from "next/link";
import {ROUTES} from "@/lib/constants";
import {logout} from "@/services/actions";

export const metadata = {
  title: "Admin Dashboard",
  description: "Management dashboard for admin",
};

export default async function AdminDashboardPage() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Top Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                Admin Area
              </span>
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
              لوحة تحكم المدير
            </h1>
            <p className="text-sm text-muted-foreground">
              مرحباً بك، {user?.user_metadata?.name || user?.email}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={ROUTES.HOME}
              className={buttonVariants({variant: "outline", size: "sm"}) + " gap-2"}>
              <Home className="h-4 w-4" />
              الرئيسية
            </Link>

            <form action={logout}>
              <button
                type="submit"
                className={buttonVariants({variant: "destructive", size: "sm"}) + " gap-2 cursor-pointer"}>
                <LogOut className="h-4 w-4" />
                تسجيل الخروج
              </button>
            </form>
          </div>
        </div>

        {/* Quick Stats / Overview */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">المشاريع (Works)</span>
            </div>
            <p className="mt-3 text-2xl font-bold font-mono">Portfolio</p>
            <p className="text-xs text-muted-foreground mt-1">إدارة الأعمال والمشاريع</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">المستخدمين (Clients)</span>
            </div>
            <p className="mt-3 text-2xl font-bold font-mono">Clients</p>
            <p className="text-xs text-muted-foreground mt-1">متابعة حسابات العملاء</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">الرسائل (Contacts)</span>
            </div>
            <p className="mt-3 text-2xl font-bold font-mono">Messages</p>
            <p className="text-xs text-muted-foreground mt-1">طلبات التواصل الواردة</p>
          </div>
        </div>

        {/* Info Box */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm text-foreground/80">
          <h2 className="font-semibold text-primary mb-1">
            صلاحيات كاملة مفعلة (Admin Role)
          </h2>
          <p className="text-muted-foreground text-xs leading-relaxed">
            أنت مسجل حالياً كمسؤول بالنظام. المسارات الحساسة للوحة التحكم محمية ومتاحة لحسابك فقط.
          </p>
        </div>
      </div>
    </div>
  );
}
