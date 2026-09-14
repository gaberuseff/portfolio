import SectionWrapper from "@/features/public/SectionWrapper";
import {Card} from "@/components/ui/card";
import Image from "next/image";

function About() {
  return (
    <section>
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-fit mx-auto">
            <Image
              src="/imgs/me.jpg"
              alt="My Photo"
              width={500}
              height={500}
              className="rounded-4xl"
            />
          </div>
          <Card className="px-6 shadow-none">
            <h2 className="text-xl sm:text-2xl text-center">About Me</h2>
            <div className="flex flex-col gap-6 mt-4">
              <p className="text-sm sm:text-base">
                I’m Gaber USef, a Frontend Developer who turns ideas into
                modern, high-performance web experiences that are built to solve
                real business problems.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                I specialize in building scalable applications with React and
                Next.js, with a strong focus on clean architecture, intuitive
                user experiences, performance, and maintainable code. I enjoy
                going beyond simply creating interfaces — I think about how a
                product should work, how users interact with it, and how
                technology can make the entire experience better.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                From polished marketing websites and portfolios to complex
                dashboards and business applications, I build products that are
                reliable, responsive, and designed with both users and business
                goals in mind.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                I’m always learning, experimenting with new technologies, and
                looking for better ways to turn challenging ideas into simple,
                powerful digital products.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                If you have an idea, a product that needs improvement, or a
                business problem that could be solved with technology, I’d love
                to help turn it into something real.
              </p>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default About;
