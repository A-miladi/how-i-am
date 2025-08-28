"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const listItems = [
    "Developed responsive web applications with Next.js and React",
    "Built RESTful APIs with Node.js, NestJS, and MongoDB",
    "Implemented SEO optimization with SSR and SSG",
    "Created cross-platform mobile apps with React Native",
    "Integrated AI features with Python and real-time APIs",
    "Managed state with Redux, Zustand, and Context API",
    "Designed scalable UI components with Tailwind CSS",
    "Collaborated with teams using Git and JIRA",
  ];

  const List = ({ text, index }) => (
    <p
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      data-aos-delay={index * 100}
      className="mb-5 flex h-20 items-start border-b border-white border-opacity-15 pb-5 font-medium text-body-color"
    >
      <span className="mr-4 flex items-center justify-center rounded-md bg-primary bg-opacity-10 p-2 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="experience" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Professional Experience"
                paragraph="With over 3 years of experience in full-stack development, I have successfully delivered multiple projects using modern technologies like React, Next.js, Node.js, and TypeScript."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {listItems.slice(0, 4).map((item, index) => (
                      <List key={index} text={item} index={index} />
                    ))}
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {listItems.slice(4, 8).map((item, index) => (
                      <List key={index + 4} text={item} index={index + 4} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="Full-stack developer experience"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
