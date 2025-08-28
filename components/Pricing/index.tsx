"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:pb-28">
      <div className="container">
        <div className="mb-20 flex flex-col items-center justify-center gap-4">
          <h2 className="w-1/2 border-b border-primary pb-4 text-center text-2xl font-extrabold">
            Professional Services & Pricing
          </h2>
          <p className="w-1/2 text-center text-lg">
            Comprehensive development services tailored to your needs. From web
            development to AI integration, I deliver high-quality solutions.
          </p>
        </div>

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Web Development
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Mobile & AI
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Web Development Packages */}
          {isMonthly ? (
            <>
              <PricingBox
                packageName="Basic Website"
                price={"500"}
                subtitle="Perfect for small businesses and portfolios"
              >
                <OfferList
                  text="Responsive Design with Tailwind CSS"
                  status="active"
                />
                <OfferList text="Up to 5 pages" status="active" />
                <OfferList text="Contact Form Integration" status="active" />
                <OfferList text="SEO Optimization" status="active" />
                <OfferList text="Basic Animations" status="active" />
                <OfferList text="1 Month Technical Support" status="active" />
                <OfferList
                  text="Hosting Setup (Additional)"
                  status="inactive"
                />
                <OfferList text="Content Management System" status="inactive" />
              </PricingBox>

              <PricingBox
                packageName="Business Website"
                price={"1200"}
                subtitle="Ideal for growing businesses"
              >
                <OfferList text="All Basic features included" status="active" />
                <OfferList text="Up to 10 pages" status="active" />
                <OfferList text="Custom UI/UX Design" status="active" />
                <OfferList
                  text="Advanced Animations with GSAP"
                  status="active"
                />
                <OfferList text="Blog Integration" status="active" />
                <OfferList text="SEO Optimization" status="active" />
                <OfferList text="3 Months Technical Support" status="active" />
                <OfferList text="Basic Admin Panel" status="active" />
              </PricingBox>

              <PricingBox
                packageName="E-commerce Platform"
                price={"2500"}
                subtitle="Complete online store solution"
              >
                <OfferList
                  text="All Business features included"
                  status="active"
                />
                <OfferList text="Product Management System" status="active" />
                <OfferList text="Shopping Cart & Checkout" status="active" />
                <OfferList text="Payment Gateway Integration" status="active" />
                <OfferList text="User Authentication" status="active" />
                <OfferList text="Order Management System" status="active" />
                <OfferList text="Inventory Management" status="active" />
                <OfferList text="6 Months Technical Support" status="active" />
              </PricingBox>
            </>
          ) : (
            /* Mobile & AI Packages */
            <>
              <PricingBox
                packageName="Mobile App"
                price={"2000"}
                subtitle="Cross-platform mobile application"
              >
                <OfferList text="React Native Development" status="active" />
                <OfferList text="iOS & Android Compatibility" status="active" />
                <OfferList text="UI/UX Design" status="active" />
                <OfferList text="API Integration" status="active" />
                <OfferList text="Push Notifications" status="active" />
                <OfferList text="App Store Deployment" status="active" />
                <OfferList text="3 Months Maintenance" status="active" />
                <OfferList text="Offline Functionality" status="inactive" />
              </PricingBox>

              <PricingBox
                packageName="AI Integration"
                price={"1500"}
                subtitle="Add AI capabilities to your application"
              >
                <OfferList text="AI Chatbot Integration" status="active" />
                <OfferList text="Machine Learning Features" status="active" />
                <OfferList text="Real-time Data Processing" status="active" />
                <OfferList
                  text="API Integration with AI Services"
                  status="active"
                />
                <OfferList text="Custom AI Model Development" status="active" />
                <OfferList
                  text="Data Analysis & Visualization"
                  status="active"
                />
                <OfferList text="3 Months Technical Support" status="active" />
                <OfferList text="Training & Documentation" status="active" />
              </PricingBox>

              <PricingBox
                packageName="Full-Stack Project"
                price={"4000"}
                subtitle="Complete web application solution"
              >
                <OfferList
                  text="Next.js Frontend Development"
                  status="active"
                />
                <OfferList text="Node.js Backend API" status="active" />
                <OfferList
                  text="Database Design (MongoDB/PostgreSQL)"
                  status="active"
                />
                <OfferList text="User Authentication System" status="active" />
                <OfferList text="Admin Dashboard" status="active" />
                <OfferList
                  text="Real-time Features (WebSocket)"
                  status="active"
                />
                <OfferList text="Deployment & DevOps Setup" status="active" />
                <OfferList text="6 Months Technical Support" status="active" />
              </PricingBox>
            </>
          )}
        </div>

        {/* Additional Services */}
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
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark">
              <h4 className="mb-3 text-lg font-semibold">SEO Optimization</h4>
              <p className="mb-4 text-body-color">From $300</p>
              <p className="text-sm">
                Improve your website's visibility and ranking
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark">
              <h4 className="mb-3 text-lg font-semibold">
                Website Maintenance
              </h4>
              <p className="mb-4 text-body-color">From $100/month</p>
              <p className="text-sm">Regular updates and technical support</p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark">
              <h4 className="mb-3 text-lg font-semibold">API Development</h4>
              <p className="mb-4 text-body-color">From $800</p>
              <p className="text-sm">Custom RESTful API development</p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark">
              <h4 className="mb-3 text-lg font-semibold">Consultation</h4>
              <p className="mb-4 text-body-color">$50/hour</p>
              <p className="text-sm">Technical advice and project planning</p>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default Pricing;
