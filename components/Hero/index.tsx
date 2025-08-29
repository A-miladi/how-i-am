"use client";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-20 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className=" flex w-full flex-row flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp max-w-[700px] text-left"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Mid-level Full-Stack Developer with{" "}
                  <span
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="text-primary"
                  >
                    +3 Years
                  </span>{" "}
                  of Experience
                </h1>
                <p className="mb-8 text-base font-normal !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Specialized in modern web technologies including React,
                  Next.js, TypeScript, Node.js, and React Native. Passionate
                  about creating responsive, SEO-friendly applications with
                  clean architecture and optimal performance.
                </p>
                <div className="mb-8">
                  <h2 className="my-3 text-lg font-semibold text-dark dark:text-white">
                    Core Technologies:
                  </h2>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "JavaScript",
                      "Node.js",
                      "Tailwind CSS",
                      "MongoDB",
                      "React Native",
                      "Python",
                      "Nest.js",
                      "Redux",
                      "Zustand",
                    ].map((tech, index) => (
                      <span
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        data-aos-delay={index * 100}
                        key={index}
                        className=" flex items-center justify-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary dark:bg-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <Link
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                    href="/blog"
                    className="flex h-12 w-1/2 items-center justify-center rounded-md border border-primary/40 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/20 max-md:text-xs"
                  >
                    View blogs
                  </Link>
                  <Link
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                    href="/contact"
                    className="flex h-12 w-1/2 items-center justify-center rounded-md  border border-primary/40 bg-primary/40 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/20 max-md:text-xs"
                  >
                    Contact Me
                  </Link>
                  <Link
                    data-aos="zoom-in-up"
                    data-aos-duration="2500"
                    href="/pricing"
                    className="flex h-12 w-1/2 items-center justify-center rounded-md border border-primary/40 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/20 max-md:text-xs"
                  >
                    View pricing
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 w-full px-4 lg:mt-0 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px]">
                <Image
                  src="/images/hero/landing.svg"
                  alt="Alireza Miladi - Full Stack Developer"
                  width={500}
                  height={500}
                  className="animate-float w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle cx="75" cy="188" r="18" fill="url(#paint1_radial_25:217)" />
            <circle
              cx="135"
              cy="318"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <path
              d="M184.521 315.521C184.521 448.882 184.521 448.882 184.521 448.882"
              stroke="url(#paint4_linear_25:217)"
              strokeWidth="2"
            />
            <path
              d="M356 290C356 423.361 356 423.361 356 423.361"
              stroke="url(#paint5_linear_25:217)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(75 188) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(135 318) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="315.521"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="290"
                x2="356"
                y2="423.361"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <circle
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint3_linear_25:218)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="animate-bounce-slow absolute left-10 top-1/4">
          <div className="h-6 w-6 rounded-full bg-primary opacity-20"></div>
        </div>
        <div className="absolute right-20 top-1/2 animate-pulse">
          <div className="bg-secondary h-8 w-8 rounded-full opacity-30"></div>
        </div>
        <div className="absolute bottom-1/3 left-20 animate-bounce">
          <div className="bg-accent h-4 w-4 rounded-full opacity-40"></div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;
