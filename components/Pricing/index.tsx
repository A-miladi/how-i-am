'use client';
import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import OfferList from './OfferList';
import PricingBox from './PricingBox';

const Pricing = () => {
	const [isMonthly, setIsMonthly] = useState(true);

	return (
		<section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
			<div className="container">
				<SectionTitle
					title="Simple and Affordable Pricing"
					paragraph="Empowering Your Business with Clear and Competitive Pricing that Fits Your Budget with Madioo"
					center
					width="665px"
				/>
				{/* 
				<div className="w-full">
					<div
						className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
						data-wow-delay=".1s"
					>
						<span
							onClick={() => setIsMonthly(true)}
							className={`${
								isMonthly
									? 'pointer-events-none text-primary'
									: 'text-dark dark:text-white'
							} mr-4 cursor-pointer text-base font-semibold`}
						>
							Web Service
						</span>
						<div
							onClick={() => setIsMonthly(!isMonthly)}
							className="flex cursor-pointer items-center"
						>
							<div className="relative">
								<div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
								<div
									className={`${
										isMonthly ? '' : 'translate-x-full'
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
									? 'text-dark dark:text-white'
									: 'pointer-events-none text-primary'
							} ml-4 cursor-pointer text-base font-semibold`}
						>
							SEO
						</span>
					</div>
				</div> */}

				<div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
					<PricingBox
						packageName="Basic"
						price={'1000'}
						// duration={isMonthly ? 'mo' : 'yr'}
						// duration={"Life Time"}
						subtitle="Affordable and Effective!"
					>
						<OfferList text="Basic logo design" status="active" />
						<OfferList
							text="Basic banner design for landing pages"
							status="active"
						/>
						<OfferList text="Slider design for homepage" status="active" />
						<OfferList text="Custom website design" status="active" />
						<OfferList text="Mobile responsive design" status="active" />
						<OfferList text="Up to 5 pages" status="active" />
						<OfferList text="Contact form" status="active" />
						<OfferList text="Social media integration" status="active" />
						<OfferList
							text="Hosting and Domain and maintenance not included"
							status="active"
						/>
					</PricingBox>
					<PricingBox
						packageName="Advance"
						price={'2500'}
						// duration={isMonthly ? 'mo' : 'yr'}
						subtitle="Unleash the Power of Innovation!"
					>
						<OfferList text="All Basic features included" status="active" />
						<OfferList text="Custom logo design" status="active" />
						<OfferList
							text="Custom banner design for landing pages"
							status="active"
						/>
						<OfferList
							text="Custom slider design for the homepage"
							status="active"
						/>
						<OfferList text="Motion graphics for website" status="active" />
						<OfferList text="Custom images and icons" status="active" />
						<OfferList text="Up to 10 pages" status="active" />
						<OfferList text="E-commerce functionality" status="active" />
						<OfferList text="Customizable contact form" status="active" />
						<OfferList text="Blog setup" status="active" />
						<OfferList
							text="Hosting and Domain and maintenance included"
							status="active"
						/>
					</PricingBox>
					<PricingBox
						packageName="Enterprise"
						// price={'Request a Quote'}
						// duration={'Request a Quote'}
						subtitle="Fueling Growth and Success at Every Level"
					>
						<OfferList text="All Advance features included" status="active" />
						<OfferList text="Branding and identity design" status="active" />
						<OfferList
							text="Advanced motion graphics and animations"
							status="active"
						/>
						<OfferList
							text="Custom illustrations and graphics"
							status="active"
						/>
						<OfferList text="Video production and editing" status="active" />
						<OfferList
							text="Customized marketing materials and assets"
							status="active"
						/>
						<OfferList text="Unlimited pages" status="active" />
						<OfferList text="Custom design and development" status="active" />
						<OfferList text="security features" status="active" />
						<OfferList text="Custom API integration" status="active" />
						<OfferList text="Customized user experience" status="active" />
						<OfferList
							text="Customized user experience Customizable reporting and analytics"
							status="active"
						/>
						<OfferList
							text="Hosting and Domain and maintenance included"
							status="active"
						/>
					</PricingBox>
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
