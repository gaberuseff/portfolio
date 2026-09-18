import Link from "next/link";
import {ShieldAlert, Home, ArrowRight, LogIn, Mail} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import {ROUTES, DEFAULT_REDIRECTS, getUserRole} from "@/lib/constants";
import {getCurrentUserProfile} from "@/services/apiAuth";

export const metadata = {
  title: "403 - Access Denied",
  description: "You do not have permission to access this page.",
};

export default async function UnauthorizedPage() {
  const account = await getCurrentUserProfile();
  const user = account?.user;
  const role = account?.profile?.role || getUserRole(user);
  const dashboardUrl = user ? DEFAULT_REDIRECTS(role) : null;

  return (
    <main className="relative flex min-h-[80vh] w-full flex-col items-center justify-center px-6 py-20 text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-destructive/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto">
        {/* Icon */}
        <div className="mb-6 flex size-18 items-center justify-center rounded-2xl border border-destructive/25 bg-destructive/10 text-destructive shadow-lg shadow-destructive/10">
          <ShieldAlert className="size-9 stroke-[1.75]" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-md text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
          <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
          <span>Error 403 • Access Denied</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-foreground">
          Access Denied
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg font-light text-muted-foreground pt-4 max-w-md leading-relaxed">
          You don&apos;t have permission to access this page. Please sign in
          with an authorized account or head back to home.
        </p>

        {/* Action Buttons */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
          {user && dashboardUrl ? (
            <>
              <Link
                href={dashboardUrl}
                className={
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                  }) + " gap-2"
                }>
                <span>Go to Dashboard</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href={ROUTES.HOME}
                className={
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }) + " gap-2"
                }>
                <Home className="size-4" />
                <span>Return Home</span>
              </Link>
            </>
          ) : (
            <>
              <Link
                href={ROUTES.LOGIN}
                className={
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                  }) + " gap-2"
                }>
                <LogIn className="size-4" />
                <span>Sign In</span>
              </Link>

              <Link
                href={ROUTES.HOME}
                className={
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }) + " gap-2"
                }>
                <Home className="size-4" />
                <span>Return Home</span>
              </Link>
            </>
          )}
        </div>

        {/* User context / Helper info */}
        <div className="pt-10 flex flex-col items-center gap-2 text-xs text-muted-foreground font-mono">
          {user && (
            <p className="text-muted-foreground/80">
              Signed in as <span className="text-foreground">{user.email}</span>{" "}
              {role && (
                <span className="uppercase text-primary/80 font-semibold">
                  ({role})
                </span>
              )}
            </p>
          )}

          <div className="flex items-center gap-1.5 pt-1">
            <span>Need assistance?</span>
            <Link
              href={ROUTES.CONTACT}
              className={
                buttonVariants({
                  variant: "link",
                  size: "sm",
                }) + " p-0 h-auto gap-1 text-xs"
              }>
              <Mail className="size-3.5" />
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
