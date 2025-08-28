import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Investment Options"
        description="Strategic pricing for digital transformation. 
  Choose from structured packages designed to deliver maximum value and ROI for your project investment."
      />
      <Pricing />
    </>
  );
};

export default AboutPage;
