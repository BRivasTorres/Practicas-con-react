
const Hero = () => {
  return (
		<div className="bg-white pt-[3rem] ">
			<div className="w-[80%] mx-auto grid grid-cols-[_2fr_1fr] gap-[3.5rem]">
				<aside>
					<h1 className="text-[4.5rem] font-bold">Contentful CMS</h1>
					<p className=" text-[#475581]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Amet recusandae iure tenetur quaerat consequatur modi
						atque dicta, laborum quo est sit quisquam reprehenderit
						quam enim aspernatur aliquam suscipit soluta quae cum
						vitae sunt unde. Sint ipsum nam consequatur dolor cum
						accusantium eos illo nesciunt doloribus eaque, quo quam
						perspiciatis veritatis.
					</p>
				</aside>
				<img src="/hero.svg" alt="hero img" />
			</div>
		</div>
  );
}

export default Hero
