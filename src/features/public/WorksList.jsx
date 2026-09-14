"use client";

import {motion} from "motion/react";
import WorkItem from "./WorkItem";

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

function WorksList({works = []}) {
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
    </motion.div>
  );
}

export default WorksList;
