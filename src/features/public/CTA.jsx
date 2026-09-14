import SectionWrapper from "@/features/public/SectionWrapper";
import {Card} from "@/components/ui/card";
import Link from "next/link";

function CTA() {
  return (
    <SectionWrapper>
      <Card className="max-w-4xl mx-auto py-10 px-6 text-center shadow-none">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Have an idea in mind? Let&apos;s build it together.
        </h2>
        <p className="text-muted-foreground mt-3 text-sm sm:text-lg max-w-2xl mx-auto font-light">
          I&apos;m currently available for freelance projects, full-time
          opportunities, or technical consulting. Let&apos;s create something
          meaningful.
        </p>

        <div className="flex justify-center mt-8">
          <Link
            href="/contact"
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
            <span className="relative z-10 inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium tracking-wider text-primary-foreground transition-colors group-hover:bg-primary/90 sm:h-12 sm:text-base">
              Get in Touch
            </span>
          </Link>
        </div>
      </Card>
    </SectionWrapper>
  );
}

export default CTA;
