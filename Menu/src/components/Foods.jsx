import data from "../mocks/data";

const Foods = () => {
	return (
		<div className="mt-[3rem] mb-[3rem] flex gap-[3rem] flex-wrap justify-center">
			{data.map((item) => {
				return (
					<div
						key={item.id}
						className="w-[30%] bg-white rounded-md min-w-[300px] "
					>
						<img
							src={item.img}
							alt={item.title}
							className="w-[100%] h-[250px] rounded-t-md"
						/>
						<div className="p-[1.5rem] flex items-center justify-between ">
							<h3 className=" capitalize font-bold text-[1.5rem] ">
								{item.title}
							</h3>
							<span className="bg-[#F59E0B] p-[.3rem] rounded text-white ">
								{`$${item.price} `}
							</span>
						</div>
						<p className="px-[1.5rem] pb-[1rem] ">{item.desc}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Foods;
