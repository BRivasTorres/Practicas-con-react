import Tour from "./Tour";

const Tours = () => {
	return (
		<div className="w-[70%] py-[2rem] mx-auto">
			<div className="mb-8">
				<h2 className="text-center text-[3.5rem]">Our Tours</h2>
				<div className="w-[20%] h-[6px] bg-greenColor rounded-[10px] my-0 mx-auto"></div>
			</div>
			<Tour />
		</div>
	);
};

export default Tours;
