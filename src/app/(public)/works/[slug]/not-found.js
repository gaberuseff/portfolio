import Link from "next/link";
import {
  ArrowRight02Icon,
  Home01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";
import {buttonVariants} from "@/components/ui/button";
import SectionWrapper from "@/features/public/SectionWrapper";
import {ROUTES} from "@/lib/constants";

export default function WorkNotFound() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden py-16 sm:py-24">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-primary/10 blur-[100px] pointer-events-none rounded-full" />

      <SectionWrapper>
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="mb-6 flex size-16 sm:size-20 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 text-primary shadow-xl shadow-primary/10">
            <HugeiconsIcon icon={Search01Icon} size={32} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-muted/50 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
            <span>404 • Project Not Found</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Project Not Found
          </h1>

          <p className="text-base sm:text-lg font-light text-muted-foreground pt-4 max-w-lg leading-relaxed">
            The project you are looking for doesn&apos;t exist, may have been
            renamed, or is no longer publicly available.
          </p>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
            <Link
              href={ROUTES.WORKS}
              className={
                buttonVariants({
                  variant: "default",
                  size: "lg",
                }) +
                " gap-2 px-6 shadow-lg shadow-primary/20 cursor-pointer w-full sm:w-auto justify-center"
              }>
              <span>Explore All Works</span>
              <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
            </Link>

            <Link
              href={ROUTES.HOME}
              className={
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                }) +
                " gap-2 px-6 cursor-pointer w-full sm:w-auto justify-center"
              }>
              <HugeiconsIcon icon={Home01Icon} size={18} />
              <span>Back to Home</span>
            </Link>
          </div>

          <p className="text-xs text-muted-foreground/80 pt-8">
            Looking for a specific showcase or custom project?{" "}
            <Link
              href={ROUTES.CONTACT}
              className="text-primary hover:underline font-medium">
              Contact Me
            </Link>
          </p>
        </div>
      </SectionWrapper>
    </section>
  );
}
