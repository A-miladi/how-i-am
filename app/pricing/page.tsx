import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Pricing from '@/components/Pricing';

const AboutPage = () => {
	return (
		<>
			<Breadcrumb
				pageName="Pricing"
				description="Unlock Your Full Potential with Our Range of Tailored Pricing Plans - Find the Perfect Fit for Your Unique Needs and Goals!"
			/>
			<Pricing />
		</>
	);
};

export default AboutPage;
