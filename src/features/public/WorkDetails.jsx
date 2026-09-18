import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight02Icon,
  ArrowUpRight01Icon,
  CheckmarkCircle02Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";
import {Badge} from "@/components/ui/badge";
import {buttonVariants} from "@/components/ui/button";
import SectionWrapper from "@/features/public/SectionWrapper";
import {ROUTES} from "@/lib/constants";

export default function WorkDetails({work}) {
  // Normalize features into an array of strings
  const featuresList = Array.isArray(work.features)
    ? work.features
    : typeof work.features === "string"
      ? work.features
          .split("\n")
          .map((f) => f.replace(/^[-*•]\s*/, "").trim())
          .filter(Boolean)
      : [];

  return (
    <div className="pb-16 sm:pb-24">
      <SectionWrapper>
        <div className="flex flex-col gap-16 md:gap-24">
          {/* Main Showcase Image with Browser Mockup Frame */}
          {work.image && (
            <div className="group relative rounded-2xl md:rounded-3xl border border-border/80 bg-card overflow-hidden shadow-2xl shadow-primary/5">
              {/* Browser window header bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/40 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div
                  className="text-xs font-mono text-muted-foreground/70 truncate max-w-[200px] 
                  sm:max-w-md px-3 py-1 rounded-md bg-background/50 border border-border/40">
                  {work.live_link || `gaberuseff.info/works/${work.slug}`}
                </div>
                <div className="w-12" />
              </div>

              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full bg-muted/30">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          )}

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-border/70 bg-card/60 backdrop-blur-sm">
            {/* Role */}
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                Role
              </span>
              <span className="text-base sm:text-lg font-medium text-foreground">
                {work.role || "Frontend Developer"}
              </span>
            </div>

            {/* Technologies */}
            <div className="flex flex-col gap-2 sm:col-span-2 lg:col-span-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {work.tech_stack && work.tech_stack.length > 0 ? (
                  work.tech_stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs px-2.5 py-1">
                      {tech}
                    </Badge>
                  ))
                ) : (
                  <span className="text-sm text-muted-foreground">
                    Modern Web Stack
                  </span>
                )}
              </div>
            </div>

            {/* Links / Deliverables */}
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                Links
              </span>
              <div className="flex items-center gap-3 pt-0.5">
                {work.live_link && (
                  <a
                    href={work.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center gap-1 text-primary hover:underline font-medium">
                    <span>Website</span>
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={15} />
                  </a>
                )}
                {work.source_link && (
                  <a
                    href={work.source_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium">
                    <span>Repository</span>
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={15} />
                  </a>
                )}
                {!work.live_link && !work.source_link && (
                  <span className="text-sm text-muted-foreground">
                    Internal Project
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          {featuresList.length > 0 && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={SparklesIcon}
                  size={20}
                  className="text-primary"
                />
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                  Key Features & Highlights
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuresList.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-5 rounded-xl md:rounded-2xl border border-border/70 bg-card/40 hover:bg-card hover:border-primary/30 transition-all duration-200">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <p className="text-sm sm:text-base text-foreground/90 font-light leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA & Navigation Banner */}
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl pointer-events-none rounded-full" />

            <div className="flex flex-col gap-2 max-w-xl z-10">
              <span className="text-xs uppercase tracking-widest text-primary font-mono font-medium">
                Next Steps
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                Have a similar project in mind?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-light">
                Let&apos;s discuss how we can turn your ideas into a
                high-performance web experience.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 z-10 w-full md:w-auto">
              <Link
                href={ROUTES.CONTACT}
                className={
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                  }) +
                  " w-full sm:w-auto justify-center px-6 shadow-md shadow-primary/20 cursor-pointer gap-2"
                }>
                <span>Get in Touch</span>
                <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
              </Link>

              <Link
                href={ROUTES.WORKS}
                className={
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }) + " w-full sm:w-auto justify-center px-6 cursor-pointer"
                }>
                <span>All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
