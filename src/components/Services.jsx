import { motion } from "framer-motion";

const Services = () => {
	return (
		<section className={`mt-[20px] mx-[30px] lg:mt-[86px] lg:mx-[76px]`}>
			<div className="gradientTex">
				<h1
					className={`flex items-center font-clashbold font-semibold text-white text-[20px] leading-[30.75px] lg:text-[60px] lg:leading-[73.8px]`}>
					Services <span className={`animate-bounce`}>🔥</span>
				</h1>
				<p
					className={`text-[#FFFFFF99] font-medium text-[15px] leading-[22.5px]  lg:text-[18px] lg:leading-[27px]`}>
					These are some of the services I render and I got you covered
				</p>
			</div>

			{/* cards */}
			<div className="flex flex-col mt-[56px] gap-2 lg:mt-[56px] lg:flex lg:flex-wrap lg:flex-shrink-0 lg:justify-start lg:flex-row lg:items-center lg:gap-[24px]">
				{/* first cards */}
				<div
					className={`overflow-hidden flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:justify-start lg:gap-[24px]`}>
					<motion.div
						whileHover={{ scale: 0.89 }}
						className={`bg-gradient-to-l max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pt-0.5`}>
						<motion.div
							whileHover={{ scale: 0.99 }}
							className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[40px] px-[20px] max-w-[300px] h-[180px] lg:py-[80px] lg:px-[40px] lg:max-w-[600px] lg:h-[300px]`}>
							<h4
								className={`font-semibold text-white font-clashbold text-[16px] leading-[20px] max-w-[150px] lg:max-w-[300px] lg:text-[28px] lg:leading-[34px]`}>
								WEB DEVELOPMENT
							</h4>
							<p
								className={`font-normal text-[11px] leading-[16px] mt-3 max-w-[220px] lg:mt-[18px] lg:max-w-[340px] lg:leading-[22px] lg:text-[15px]`}>
								I create beautiful interfaces with HTML, CSS TailwindCss,
								Bootstrap, JavaScript, ReactJs, NextJs & Typescript.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						whileHover={{ scale: 0.89 }}
						className="bg-gradient-to-r  max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pr-0.5 pt-0.5">
						<motion.div
							whileHover={{ scale: 0.99 }}
							className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[40px] px-[20px] max-w-[300px] h-[180px] lg:py-[80px] lg:px-[40px] lg:max-w-[600px] lg:h-[300px]`}>
							<h4
								className={`font-semibold uppercase text-white text-[16px] leading-[20px] font-clashbold max-w-[150px] lg:max-w-[300px] lg:text-[27px] lg:leading-[34px]`}>
								Responsive Design
							</h4>
							<p
								className={`font-normal text-[11px] leading-[16px] mt-4 max-w-[220px] lg:mt-[18px] lg:max-w-[340px] lg:leading-[22px] lg:text-[15px]`}>
								Building websites and applications that work seamlessly on
								various devices and screen sizes, from desktop to smartphones.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						whileHover={{ scale: 0.89 }}
						className="bg-gradient-to-l  max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pt-0.5">
						<motion.div
							whileHover={{ scale: 0.99 }}
							className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[40px] px-[20px] max-w-[300px] h-[180px] lg:py-[80px] lg:px-[40px] lg:max-w-[600px] lg:h-[300px]`}>
							<h4
								className={`font-semibold uppercase text-white text-[16px] leading-[20px] font-clashbold max-w-[150px] lg:max-w-[300px] lg:text-[27px] lg:leading-[34px]`}>
								Integration with APIs
							</h4>
							<p
								className={`font-normal text-[11px] leading-[16px] mt-4 max-w-[220px] lg:mt-[18px] lg:max-w-[340px] lg:leading-[22px] lg:text-[15px]`}>
								Integrating frontend interfaces with backend services and APIs
								to fetch and display data in real time.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						whileHover={{ scale: 0.89 }}
						className="bg-gradient-to-b  max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pr-0.5 pb-0.5">
						<motion.div
							whileHover={{ scale: 0.99 }}
							className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[40px] px-[20px] max-w-[300px] h-[180px] lg:py-[80px] lg:px-[40px] lg:max-w-[600px] lg:h-[300px]`}>
							<h4
								className={`font-semibold uppercase text-white text-[16px] leading-[20px] font-clashbold max-w-[150px] lg:max-w-[300px] lg:text-[27px] lg:leading-[34px]`}>
								Web Accessibility
							</h4>
							<p
								className={`font-normal text-[11px] leading-[16px] mt-4 max-w-[220px] lg:mt-[18px] lg:max-w-[340px] lg:leading-[22px] lg:text-[15px]`}>
								Ensuring that websites and applications are accessible to users
								with disabilities by implementing features like proper HTML
								structure and ARIA roles.
							</p>
						</motion.div>
					</motion.div>
				</div>
				{/* second card */}
				<div
					className={`overflow-hidden flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:justify-start lg:gap-[24px] lg:pt-[24px]`}>
					<motion.div
						whileHover={{ scale: 0.89 }}
						className="bg-gradient-to-t max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pt-0.5">
						<motion.div
							whileHover={{ scale: 0.99 }}
							className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[40px] px-[20px] max-w-[300px] h-[180px] lg:py-[80px] lg:px-[40px] lg:max-w-[600px] lg:h-[300px]`}>
							<h4
								className={`font-semibold uppercase text-white text-[16px] leading-[20px] font-clashbold max-w-[150px] lg:max-w-[300px] lg:text-[27px] lg:leading-[34px]`}>
								VERSION CONTROL
							</h4>
							<p
								className={`font-normal text-[11px] leading-[16px] mt-4 max-w-[220px] lg:mt-[18px] lg:max-w-[340px] lg:leading-[22px] lg:text-[15px]`}>
								Using version control systems like Git to collaborate with other
								developers and manage code changes effectively.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						whileHover={{ scale: 0.89 }}
						className="bg-gradient-to-b max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pr-0.5 pb-0.5">
						<motion.div
							whileHover={{ scale: 0.99 }}
							className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[40px] px-[20px] max-w-[300px] h-[180px] lg:py-[80px] lg:px-[40px] lg:max-w-[600px] lg:h-[300px]`}>
							<h4
								className={`font-semibold uppercase text-white text-[16px] leading-[20px] font-clashbold max-w-[150px] lg:max-w-[300px] lg:text-[27px] lg:leading-[34px]`}>
								UI Design
							</h4>
							<p
								className={`font-normal text-[11px] leading-[16px] mt-4 max-w-[220px] lg:mt-[18px] lg:max-w-[340px] lg:leading-[22px] lg:text-[15px]`}>
								Designing the visual elements of the user interface, including
								layout, typography, color schemes, icons, and other graphical
								elements.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						whileHover={{ scale: 0.89 }}
						className="bg-gradient-to-t max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pt-0.5">
						<motion.div
							whileHover={{ scale: 0.99 }}
							className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[40px] px-[20px] max-w-[300px] h-[180px] lg:py-[80px] lg:px-[40px] lg:max-w-[600px] lg:h-[300px]`}>
							<h4
								className={`font-semibold uppercase text-white text-[16px] leading-[20px] font-clashbold max-w-[150px] lg:max-w-[300px] lg:text-[27px] lg:leading-[34px]`}>
								Continuous Learning
							</h4>
							<p
								className={`font-normal text-[11px] leading-[16px] mt-4 max-w-[220px] lg:mt-[18px] lg:max-w-[340px] lg:leading-[22px] lg:text-[15px]`}>
								Staying updated with the latest frontend technologies, trends,
								and best practices to deliver modern and innovative solutions.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						whileHover={{ scale: 0.89 }}
						className="bg-gradient-to-b max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pr-0.5 pb-0.5">
						<motion.div
							whileHover={{ scale: 0.99 }}
							className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[40px] px-[20px] max-w-[300px] h-[180px] lg:py-[80px] lg:px-[40px] lg:max-w-[600px] lg:h-[300px]`}>
							<h4
								className={`font-semibold uppercase text-white text-[16px] leading-[20px] font-clashbold max-w-[150px] lg:max-w-[300px] lg:text-[27px] lg:leading-[34px]`}>
								Technical Support
							</h4>
							<p
								className={`font-normal text-[11px] leading-[16px] max-w-[220px] mt-4 lg:mt-[18px] lg:max-w-[340px] lg:leading-[22px] lg:text-[15px]`}>
								Providing technical support to troubleshoot frontend-related
								issues.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
