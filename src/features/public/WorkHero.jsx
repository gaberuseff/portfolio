import {Badge} from "@/components/ui/badge";
import {buttonVariants} from "@/components/ui/button";
import SectionWrapper from "@/features/public/SectionWrapper";
import {ROUTES} from "@/lib/constants";
import {
  ArrowLeft02Icon,
  ArrowUpRight01Icon,
  GithubIcon,
  GlobeIcon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";
import Link from "next/link";

export default function WorkHero({work}) {
  return (
    <section className="pt-6 sm:pt-10">
      <SectionWrapper>
        <div>
          {/* Back to Works Navigation */}
          <div className="pb-6">
            <Link
              href={ROUTES.WORKS}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer">
              <HugeiconsIcon
                icon={ArrowLeft02Icon}
                size={16}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              <span>Back to Works</span>
            </Link>
          </div>

          {/* Role / Category Badge */}
          {work.role && (
            <div className="pb-3">
              <Badge
                variant="secondary"
                className="px-3 py-1 text-xs font-mono tracking-wider uppercase">
                {work.role}
              </Badge>
            </div>
          )}

          {/* Huge Hero Title */}
          <h1 className="lg:text-8xl md:text-6xl text-5xl font-semibold tracking-tight text-foreground leading-[1.08]">
            {work.title}
          </h1>

          {/* Description */}
          {work.description && (
            <p className="lg:text-xl md:text-lg text-base font-light text-muted-foreground pt-6 max-w-3xl leading-relaxed">
              {work.description}
            </p>
          )}

          {/* Action Buttons (Live Demo & Source Code) */}
          <div className="pt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            {work.live_link && (
              <a
                href={work.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                  }) + " gap-2 px-6 shadow-lg shadow-primary/20 cursor-pointer"
                }>
                <HugeiconsIcon icon={GlobeIcon} size={18} />
                <span>Live Demo</span>
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
              </a>
            )}

            {work.source_link && (
              <a
                href={work.source_link}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }) + " gap-2 px-6 cursor-pointer"
                }>
                <HugeiconsIcon icon={GithubIcon} size={18} />
                <span>Source Code</span>
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
              </a>
            )}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
