"use client";

import {buttonVariants} from "@/components/ui/button";
import {ROUTES} from "@/lib/constants";
import {
  AiMail01Icon,
  ArrowRight02Icon,
  Compass01Icon,
  Home01Icon,
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";
import {motion} from "motion/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-accent/20 blur-[90px] pointer-events-none rounded-full" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <motion.div
          initial={{opacity: 0, scale: 0.8, y: -20}}
          animate={{opacity: 1, scale: 1, y: 0}}
          transition={{duration: 0.6, ease: "easeOut"}}
          className="mb-8 flex size-20 items-center justify-center rounded-3xl border border-primary/25 bg-primary/10 text-primary shadow-2xl shadow-primary/15">
          <HugeiconsIcon icon={Compass01Icon} size={36} />
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.15}}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-md text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Error 404 • Lost in Cyberspace</span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-foreground leading-[1.08]"
          initial={{
            clipPath: "inset(0 100% 0 0)",
            filter: "blur(8px)",
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
          Page not found
        </motion.h1>

        <motion.p
          className="text-base sm:text-xl font-light text-muted-foreground pt-5 max-w-lg leading-relaxed"
          initial={{opacity: 0, y: 15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}>
          Sorry, we couldn&apos;t find the page you were looking for. It might
          have been moved, deleted, or never existed.
        </motion.p>

        <motion.div
          className="pt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.55}}>
          <Link
            href={ROUTES.HOME}
            className={buttonVariants({
              variant: "default",
              size: "lg",
            })}>
            <HugeiconsIcon icon={Home01Icon} size={18} />
            <span>Return to Home</span>
          </Link>

          <Link
            href={ROUTES.WORKS}
            className={buttonVariants({
              variant: "outline",
              size: "lg",
            })}>
            <span>Explore Works</span>
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="pt-12 flex items-center gap-2 text-xs text-muted-foreground font-mono"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.7}}>
          <span>Need help finding something?</span>
          <Link
            href={ROUTES.CONTACT}
            className={buttonVariants({
              variant: "link",
              size: "sm",
            })}>
            <HugeiconsIcon icon={AiMail01Icon} size={14} />
            <span>Contact Gaber</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
