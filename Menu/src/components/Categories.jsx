import Buttons from "./Buttons";

const Categories = () => {
	return (
		<div className=" w-[50%] m-auto">
			<h2 className="text-[3rem] text-center ">Our Menu</h2>
			<div className="w-[160px] h-[5px] rounded mx-auto bg-orange-menu"></div>

			<div className="mt-[1.5rem] flex gap-[1rem] justify-center ">
				<Buttons text="All" />
				<Buttons text="Breakfast" />
				<Buttons text="Lunch" />
				<Buttons text="Shakes" />
			</div>
		</div>
	);
};

export default Categories;