import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation, id } = testimonial;

  const ratingIcons: JSX.Element[] = Array(star)
    .fill(null)
    .map((_, index) => (
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    ));

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="500"
      data-aos-delay={id * 100}
      className="w-full cursor-pointer transition-all duration-200 hover:scale-105"
    >
      <div
        className="wow fadeInUp flex h-full w-full flex-col justify-between rounded-md bg-white p-8 shadow-one backdrop-blur-sm dark:bg-[#1D2144]/40 lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}
        </p>
        <div className="flex w-full items-center justify-between">
          <div className="mr-4 flex items-center justify-center overflow-hidden rounded border-opacity-40 p-1 shadow-lg dark:bg-[#000] dark:shadow-[rgba(1,1,1,0.6)]">
            <div className="relative flex h-[50px] w-[60px] overflow-hidden">
              <Image src={image} alt={name} fill className="rounded" />
            </div>
          </div>

          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
