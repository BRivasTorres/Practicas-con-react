import data from "../mocks/data";

const Names = () => {
	return (
		<div className="ml-[1.5rem] w-[50%] flex flex-col gap-2 ">
			{data.map((item, id) => {
				return (
					<button
						className="uppercase text-[1.3rem] hover:text-[#14BEC4] active:[#14BEC4] hover:shadow-btn active:shadow-btn"
						key={id}
					>
						{item.name}
					</button>
				);
			})}
		</div>
	);
};

export default Names;
