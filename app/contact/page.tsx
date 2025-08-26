import Breadcrumb from '@/components/Common/Breadcrumb';
import ContactComponent from '@/components/Contact';

const Contact = () => {
	return (
		<>
			<Breadcrumb
				pageName="Contact"
				description="Thank you for your interest in our web development services. Please provide us with the following details, and we will get back to you with a customized quote based on your requirements."
			/>

			<ContactComponent />
		</>
	);
};

export default Contact;
