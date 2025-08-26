import dynamic from "next/dynamic";
import { Inter } from "@next/font/google";

const ScrollUp = dynamic(() => import("@/components/Common/ScrollUp"), {
  loading: () => <p>Loading...</p>,
});
// Removed Video and Pricing for resume-focused homepage
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <p>Loading...</p>,
});
const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <p>Loading...</p>,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <p>Loading...</p>,
});
const AboutSectionTwo = dynamic(
  () => import("@/components/About/AboutSectionTwo"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const AboutSectionOne = dynamic(
  () => import("@/components/About/AboutSectionOne"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <p>Loading...</p>,
});

// import Blog from '@/components/Blog';
// import Brands from '@/components/Brands';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Features />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
