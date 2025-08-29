"use client";
import { useState, useEffect } from "react";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import AOS from "aos";
import { PricingData } from "@/data/pricing";
import { AdditionalService, ServiceCategory } from "@/types/pricing";

const Pricing = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = PricingData.serviceCategories[activeCategoryIndex];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleCategory = () => {
    setActiveCategoryIndex(activeCategoryIndex === 0 ? 1 : 0);
  };

  return (
    <section id="pricing" className="relative z-10 py-16 md:pb-28">
      <div className="container">
        <PricingHeader />

        <CategoryToggle
          activeCategoryIndex={activeCategoryIndex}
          toggleCategory={toggleCategory}
          categories={PricingData.serviceCategories}
          setActiveCategoryIndex={setActiveCategoryIndex}
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {activeCategory.packages.map((pkg, index) => (
            <div
              key={pkg.packageName}
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay={index * 100}
            >
              <PricingBox
                packageName={pkg.packageName}
                price={pkg.price}
                subtitle={pkg.subtitle}
              >
                {pkg.offers.map((offer, offerIndex) => (
                  <OfferList
                    key={offerIndex}
                    text={offer.text}
                    status={offer.status}
                  />
                ))}
              </PricingBox>
            </div>
          ))}
        </div>

        <AdditionalServices services={PricingData.additionalServices} />
      </div>

      <BackgroundDecoration />
    </section>
  );
};

const PricingHeader = () => (
  <div className="mb-20 flex flex-col items-center justify-center gap-4">
    <h2
      data-aos="fade-up"
      data-aos-delay="100"
      className="w-1/2 border-b border-primary pb-4 text-center text-2xl font-extrabold"
    >
      Professional Services & Pricing
    </h2>
    <p
      data-aos="fade-up"
      data-aos-delay="200"
      className="w-1/2 text-center text-lg"
    >
      Comprehensive development services tailored to your needs. From web
      development to AI integration, I deliver high-quality solutions.
    </p>
  </div>
);

interface CategoryToggleProps {
  activeCategoryIndex: number;
  toggleCategory: () => void;
  categories: ServiceCategory[];
  setActiveCategoryIndex: (index: number) => void;
}

const CategoryToggle = ({
  activeCategoryIndex,
  toggleCategory,
  categories,
  setActiveCategoryIndex,
}: CategoryToggleProps) => (
  <div data-aos="fade-up" data-aos-delay="300" className="w-full">
    <div className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16">
      {categories.map((category, index) => (
        <div key={category.name} className="flex items-center">
          {index > 0 && (
            <div
              onClick={toggleCategory}
              className="mx-4 flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    activeCategoryIndex === 0 ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
          )}
          <span
            onClick={() => setActiveCategoryIndex(index)}
            className={`${
              activeCategoryIndex === index
                ? "pointer-events-none text-primary"
                : "text-dark dark:text-white"
            } cursor-pointer text-base font-semibold`}
          >
            {category.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

interface AdditionalServicesProps {
  services: AdditionalService[];
}

const AdditionalServices = ({ services }: AdditionalServicesProps) => (
  <div className="mt-20">
    <div className="mb-20 flex flex-col items-center justify-center gap-4">
      <h2 className="w-1/3 border-b border-primary pb-4 text-center text-2xl font-extrabold">
        Additional Services
      </h2>
      <p className="w-1/2 text-center text-lg">
        Custom solutions for specific needs
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <div
          key={service.name}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
        >
          <h4 className="mb-3 text-lg font-semibold">{service.name}</h4>
          <p className="mb-4 text-body-color">{service.price}</p>
          <p className="text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const BackgroundDecoration = () => (
  <div className="absolute bottom-0 left-0 z-[-1]">
    <svg
      width="239"
      height="601"
      viewBox="0 0 239 601"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity="0.3"
        x="-184.451"
        y="600.973"
        width="196"
        height="541.607"
        rx="2"
        transform="rotate(-128.7 -184.451 600.973)"
        fill="url(#paint0_linear_93:235)"
      />
      <rect
        opacity="0.3"
        x="-188.201"
        y="385.272"
        width="59.7544"
        height="541.607"
        rx="2"
        transform="rotate(-128.7 -188.201 385.272)"
        fill="url(#paint1_linear_93:235)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_93:235"
          x1="-90.1184"
          y1="420.414"
          x2="-90.1184"
          y2="1131.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_93:235"
          x1="-159.441"
          y1="204.714"
          x2="-159.441"
          y2="915.952"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default Pricing;
