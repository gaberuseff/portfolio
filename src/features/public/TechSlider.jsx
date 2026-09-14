"use client";

import {memo} from "react";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";

const DEFAULT_TECH = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Supabase",
  "TanStack Query",
  "Shadcn UI",
  "Hero UI",
  "Git & GitHub",
];

export const TechSlider = memo(function TechSlider({
  items = DEFAULT_TECH,
  duration = 30,
  reverse = false,
  className,
}) {
  const displayItems =
    Array.isArray(items) && items.length > 0 ? items : DEFAULT_TECH;

  return (
    <div
      className={cn(
        "relative w-full max-w-7xl mx-auto overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}>
      <motion.div
        className="flex w-max items-center gap-3 select-none"
        initial={{x: reverse ? "-50%" : "0%"}}
        animate={{x: reverse ? "0%" : "-50%"}}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}>
        {/* Render duplicate arrays to ensure seamless infinite looping */}
        {[
          ...displayItems,
          ...displayItems,
          ...displayItems,
          ...displayItems,
        ].map((tech, index) => {
          const name =
            typeof tech === "string"
              ? tech
              : tech.name || tech.title || tech.alt;
          return (
            <div
              key={`${name}-${index}`}
              className="flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-xs transition-all duration-200 hover:border-foreground/30 hover:text-foreground whitespace-nowrap">
              <span className="size-1.5 rounded-full bg-primary/70" />
              <span>{name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
});

TechSlider.displayName = "TechSlider";
export default TechSlider;
