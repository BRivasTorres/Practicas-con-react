const About = () => {
  return (
		<div className="bg-[#FFFFFF] py-[7rem]" id="about">
			<div className="w-[55%] mx-auto  grid grid-cols-[_50%_50%] gap-x-[2rem] items-center">
				<img
					src="/imgs/about.svg"
					alt="about-img"
					className="w-[90%]"
				/>
				<section className="flex flex-col gap-y-[1.3rem] ">
					<h2 className="font-bold text-[2rem]">Coffe and Coffe</h2>
					<hr />
					<p className="text-text-color leading-8 ">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Sint maiores itaque doloribus asperiores dolorum
						quas voluptates distinctio, porro beatae quam provident
						libero animi totam, praesentium voluptatem corrupti
						dignissimos ipsum accusantium!
					</p>
				</section>
			</div>
		</div>
  );
}

export default About
