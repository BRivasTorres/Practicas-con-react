import data from "../mocks/data";
import ShowBtn from "./ShowBtn";

const Tour = () => {
	return (
		<div className="flex flex-wrap gap-[2rem] mx-auto ">
			{data.map((item, id) => {
				return (
					<div
						key={id}
						className="bg-white flex flex-col flex-wrap w-[30%] min-w-[350px] relative"
					>
						<img
							src={item.img}
							alt={item.title}
							className="h-[350px] "
						/>
						<h2 className="font-semibold text-[1.5rem] px-[2rem] py-[1rem] ">
							{item.title}
						</h2>
						<p className="p-[1rem]">
							{item.description} <ShowBtn />{" "}
						</p>
						<span className="bg-greenColor text-[#fff]  w-[fit-content] p-[.4rem] absolute right-[0] text-end">
							{item.price}
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default Tour;
