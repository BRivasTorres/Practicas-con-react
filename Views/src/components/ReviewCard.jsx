import data from "../mocks/data";

const ReviewCard = () => {
	return (
		<div className="p-[2rem]">
			<div key={data.id} className=" mx-auto border border-red-400 ">
				<img
					src={data[0].image}
					alt=""
					className="w-[150px] h-[150px] rounded-full mx-auto"
				/>
				<h2 className="text-center text-[2rem] mt-[.5rem] ">
					{data[0].name}
				</h2>
				<h3 className="uppercase text-center text-[1rem] mb-[1rem] ">
					{data[0].job}
				</h3>
				<p className="text-center">{data[0].text}</p>
			</div>
		</div>
	);
};

export default ReviewCard;
