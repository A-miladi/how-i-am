import { Feature } from "@/types/feature";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { id, icon, title, paragraph } = feature;
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="500"
      data-aos-delay={id * 100}
      className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group h-[300px] cursor-pointer rounded-lg bg-white p-8 shadow-one transition-all duration-300 dark:bg-dark"
    >
      <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        {title}
      </h3>
      <p className="text-base font-medium leading-relaxed text-body-color">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;
