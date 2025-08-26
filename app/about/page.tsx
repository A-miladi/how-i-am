import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Breadcrumb from '@/components/Common/Breadcrumb';

const AboutPage = () => {
	return (
		<>
			<Breadcrumb
				pageName="About"
				description="Welcome to Madioo, your premier provider of cutting-edge web and software solutions. With a passion for innovation and a commitment to excellence, we empower businesses and individuals to thrive in the digital age.
        At Madioo, we understand the significance of a strong online presence in today's competitive landscape. "
			/>
			<AboutSectionOne />
			<AboutSectionTwo />
		</>
	);
};

export default AboutPage;
