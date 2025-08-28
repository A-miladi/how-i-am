"use client";

import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";

const Features = () => {
  return (
    <>
      <section id="skills" className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4">
            <h2 className="border-l-2 border-primary pl-4 text-3xl font-extrabold">
              Technical Expertise
            </h2>
            <p className="w-1/2 pt-4 text-white text-opacity-40">
              With 3+ years of experience in modern web development, I
              specialize in full-stack JavaScript/TypeScript technologies, AI
              integration, and building scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">
              Additional Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "TypeScript",
                "Next.js",
                "React",
                "Node.js",
                "NestJS",
                "MongoDB",
                "React Native",
                "Python",
                "Tailwind CSS",
                "Redux",
                "Zustand",
                "REST APIs",
                "WebSocket",
                "Git",
                "JIRA",
                "Vercel",
                "PostgreSQL",
                "React Query",
                "Jest",
                "React Hook Form",
                "Framer Motion",
                "GSAP",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
