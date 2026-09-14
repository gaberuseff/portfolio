"use client";

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
import {motion} from "motion/react";
import Link from "next/link";

export default function WorkHero({work}) {
  return (
    <section className="pt-6 sm:pt-10">
      <SectionWrapper>
        <div>
          {/* Back to Works Navigation */}
          <motion.div
            initial={{opacity: 0, x: -15}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="pb-6">
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
          </motion.div>

          {/* Role / Category Badge */}
          {work.role && (
            <motion.div
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.1}}
              className="pb-3">
              <Badge
                variant="secondary"
                className="px-3 py-1 text-xs font-mono tracking-wider uppercase">
                {work.role}
              </Badge>
            </motion.div>
          )}

          {/* Huge Hero Title */}
          <motion.h1
            className="lg:text-8xl md:text-6xl text-5xl font-semibold tracking-tight text-foreground leading-[1.08]"
            initial={{
              clipPath: "inset(0 100% 0 0)",
              filter: "blur(8px)",
            }}
            animate={{
              clipPath: "inset(0 0% 0 0)",
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}>
            {work.title}
          </motion.h1>

          {/* Description */}
          {work.description && (
            <motion.p
              className="lg:text-xl md:text-lg text-base font-light text-muted-foreground pt-6 max-w-3xl leading-relaxed"
              initial={{
                clipPath: "inset(0 100% 0 0)",
                filter: "blur(6px)",
              }}
              animate={{
                clipPath: "inset(0 0% 0 0)",
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}>
              {work.description}
            </motion.p>
          )}

          {/* Action Buttons (Live Demo & Source Code) */}
          <motion.div
            className="pt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            initial={{
              opacity: 0,
              filter: "blur(6px)",
              y: 15,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}>
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
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}
