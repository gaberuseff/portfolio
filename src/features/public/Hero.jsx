"use client";

import {motion} from "motion/react";
import {SOCIAL_LINKS} from "@/lib/constants";
import {HugeiconsIcon} from "@hugeicons/react";
import SectionWrapper from "@/features/public/SectionWrapper";

function Hero() {
  return (
    <section className="flex items-center justify-center md:pt-22 pt-12">
      <SectionWrapper>
        <div>
          <motion.h1
            className="lg:text-8xl md:text-6xl text-5xl font-semibold tracking-tight"
            initial={{
              clipPath: "inset(0 100% 0 0)",
              filter: "blur(8px)",
            }}
            animate={{
              clipPath: "inset(0 0% 0 0)",
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            Websites built to grow your business.
          </motion.h1>

          <motion.p
            className="lg:text-lg text-base font-light text-muted-foreground pt-4 max-w-2xl"
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
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}>
            I design and develop thoughtful websites and web applications that
            combine strong visual design with reliable technology.
          </motion.p>

          <motion.div
            className="pt-4 flex items-center gap-x-4"
            initial={{
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.6,
              delay: 0.7,
            }}>
            {SOCIAL_LINKS.map((link) => (
              <a
                href={link.href}
                key={link.id}
                target="_blank"
                rel="noopener noreferrer">
                <HugeiconsIcon
                  icon={link.icon}
                  size={24}
                  className="text-muted-foreground"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default Hero;
