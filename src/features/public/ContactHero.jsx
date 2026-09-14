"use client";

import {buttonVariants} from "@/components/ui/button";
import SectionWrapper from "@/features/public/SectionWrapper";
import {EMAIL, SOCIAL_LINKS, WHATSAPP_URL} from "@/lib/constants";
import {MailIcon, SentIcon} from "@hugeicons/core-free-icons/index";
import {HugeiconsIcon} from "@hugeicons/react";
import {motion} from "motion/react";

function ContactHero() {
  return (
    <section className="flex items-center justify-center pt-12 pb-10">
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
            Have an idea? Let&apos;s build it together.
          </motion.h1>
          {/* Subtitle / Paragraph */}
          <motion.p
            className="lg:text-xl md:text-lg text-base font-light text-muted-foreground pt-6 max-w-2xl leading-relaxed"
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
            Whether you need a modern web application, high-converting website,
            or technical consultation, I&apos;m here to help. Reach out directly
            on WhatsApp for the fastest reply.
          </motion.p>
          {/* Big WhatsApp Button & Quick Action */}
          <motion.div
            className="pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            initial={{
              opacity: 0,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}>
            {/* Big WhatsApp CTA Button with Rotating Green Beam */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden 
                rounded-full p-[2px] transition-transform duration-300 hover:scale-105 active:scale-95 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {/* Ambient glowing trail in warm orange */}
              <span
                className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] 
                  bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,#f97316_85%,transparent_100%)] opacity-85 blur-[5px]"
              />

              {/* Sharp rotating orange light beam */}
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_65%,#f97316_80%,#fdba74_92%,#ffffff_100%)]" />

              {/* Button surface */}
              <span className="relative z-10 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-medium tracking-wider text-primary-foreground transition-colors group-hover:bg-primary/90 sm:h-12 sm:text-base">
                Chat On WhatsApp
                <HugeiconsIcon icon={SentIcon} />
              </span>
            </a>

            {/* Email CTA Button */}
            <a
              href={`mailto:${EMAIL}`}
              className={buttonVariants({variant: "secondary", size: "lg"})}>
              Email Me
              <HugeiconsIcon icon={MailIcon} />
            </a>
          </motion.div>
          {/* Social Channels Section */}
          <motion.div
            className="pt-14 sm:pt-16"
            initial={{
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Connect via social links
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/50 hover:bg-muted/80 text-muted-foreground hover:text-foreground text-sm font-medium transition-all duration-200 hover:scale-[1.03]">
                  <HugeiconsIcon
                    icon={link.icon}
                    size={18}
                    className="text-muted-foreground transition-colors group-hover:text-foreground"
                  />
                  <span>{link.label}</span>
                  <HugeiconsIcon
                    icon={SentIcon}
                    size={14}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-muted-foreground"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default ContactHero;
