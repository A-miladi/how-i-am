import Image from "next/image";

const experienceData = [
  {
    id: 1,
    period: "2025 - Present",
    title: "Mid-Level Full-Stack Developer",
    company: "Satia",
    icon: "🚀",
    description:
      "Leading development of AI Agent platforms with React, Redux, and real-time WebSocket connections. Architecting scalable solutions integrating Python services and AI Agent Real-Time SDK for advanced AI-driven features.",
    technologies: ["React", "Redux", "WebSocket", "Python", "AI Integration"],
  },
  {
    id: 2,
    period: "2024 - 2025",
    title: "Mid-Level Frontend Developer",
    company: "Misan",
    icon: "💻",
    description:
      "Spearheaded development of modern CMS platforms using Next.js, TypeScript, and Tailwind CSS. Implemented advanced server-side rendering strategies for optimal SEO performance and built reusable component architecture.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SSR", "SEO"],
  },
  {
    id: 3,
    period: "2023 - 2024",
    title: "Mid-Level Mobile Developer",
    company: "Uniqalpha",
    icon: "📱",
    description:
      "Led cross-platform mobile application development for German market using React Native and TypeScript. Designed and implemented complex REST API integrations and optimized performance for both iOS and Android platforms.",
    technologies: ["React Native", "TypeScript", "REST APIs", "iOS", "Android"],
  },
  {
    id: 4,
    period: "2020 - 2024",
    title: "Frontend Tech Lead",
    company: "Omran Hesar",
    icon: "⭐",
    description:
      "Directed frontend development initiatives, mentoring junior developers and establishing best practices for React/Next.js applications. Oversaw architecture decisions and ensured code quality across multiple projects.",
    technologies: [
      "Leadership",
      "Mentoring",
      "Architecture",
      "Code Review",
      "Best Practices",
    ],
  },
];

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="items- -mx-4 flex">
          <div className="flex w-full px-4">
            <div className="wow fadeInUp w-full" data-wow-delay=".2s">
              <h2 className="mb-12 border-primary text-2xl font-bold text-black dark:text-white max-md:border-l-2 max-md:pl-4 md:text-3xl">
                Senior Experience Journey
              </h2>
              <div className="grid w-full gap-4 md:grid-cols-2">
                {experienceData.map((item) => (
                  <div
                    key={item.id}
                    className="mb-12 border-primary pb-8 pl-6 max-md:border-b md:border-l md:pb-0"
                  >
                    <div className="mb-3 flex items-center">
                      <span className="mr-3 text-2xl">{item.icon}</span>
                      <div>
                        <span className="rounded bg-primary/10 px-2 py-1 text-sm font-semibold text-primary">
                          {item.period}
                        </span>
                        <h3 className="mt-1 text-xl font-bold text-black dark:text-white">
                          {item.title} · {item.company}
                        </h3>
                      </div>
                    </div>

                    <p className="mb-3 text-base font-medium leading-relaxed text-body-color">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-6">
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  🎯 Core Technical Expertise
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  React, Next.js, TypeScript, Node.js, NestJS, MongoDB, React
                  Native, Python, Tailwind CSS, Redux, Zustand, REST APIs,
                  WebSocket, CI/CD, Testing, Architecture Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
