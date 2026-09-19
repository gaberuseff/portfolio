import Link from "next/link";
import {ShieldAlert, Home, LogIn, Mail} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import {ROUTES} from "@/lib/constants";

export const metadata = {
  title: "403 - Access Denied",
  description: "You do not have permission to access this page.",
};

export default function UnauthorizedPage() {
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
          <Link
            href={ROUTES.HOME}
            className={
              buttonVariants({
                size: "lg",
              }) + " gap-2"
            }>
            <Home className="size-4" />
            <span>Return Home</span>
          </Link>
        </div>

        {/* Help info */}
        <div className="pt-10 flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
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
    </main>
  );
}
