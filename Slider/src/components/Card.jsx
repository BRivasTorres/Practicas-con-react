import data from "../mocks/data";

const Card = () => {
	return (
		<article className="w-[90%] mx-auto flex flex-col items-center p-[1.5rem] ">
			<div className="flex flex-col items-center mb-[1.35rem] ">
				<img
					src={data[0].image}
					alt={data[0].name}
					className="w-[160px] h-[160px] rounded-[100%] mb-[1rem] shadow-img "
				/>
				<h2 className="text-[#8B5CF6] uppercase text-[1.5rem] ">
					{data[0].name}
				</h2>
				<span className="text-[#334155] capitalize text-[1.2rem]">
					{data[0].title}{" "}
				</span>
			</div>
			<p className="text-center text-[#334155] capitalize text-[1.2rem] ">
				{data[0].quote}{" "}
			</p>
		</article>
	);
};

export default Card;
