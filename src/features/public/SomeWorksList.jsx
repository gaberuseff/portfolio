"use client";

import {buttonVariants} from "@/components/ui/button";
import {ROUTES} from "@/lib/constants";
import {ArrowRight} from "@hugeicons/core-free-icons/index";
import {HugeiconsIcon} from "@hugeicons/react";
import {motion} from "motion/react";
import Link from "next/link";
import WorkItem from "./WorkItem";

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SomeWorksList({works = []}) {
  if (!works || works.length === 0) {
    return null;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {works.map((work) => (
        <motion.div
          key={work.slug || work.id}
          variants={itemVariants}
          className="h-full">
          <WorkItem work={work} />
        </motion.div>
      ))}

      <div className="col-span-full flex justify-center pt-4">
        <Link
          href={ROUTES.WORKS}
          className={buttonVariants({
            variant: "ghost",
          })}>
          <span className="text-lg font-medium">View All Works</span>
          <HugeiconsIcon icon={ArrowRight} size={24} className="h-6 w-6" />
        </Link>
      </div>
    </motion.div>
  );
}

export default SomeWorksList;
