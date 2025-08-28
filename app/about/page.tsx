import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Alireza Miladi"
        description="Experienced Full-Stack Developer specializing in modern JavaScript/TypeScript technologies. 
  With expertise in React, Next.js, Node.js, and React Native, I create scalable web and mobile applications 
  with focus on performance, SEO, and user experience. Passionate about AI integration and real-time applications."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
