import Buttons from "./Buttons";

const Categories = ({ handleCategories }) => {
	return (
		<div className=" w-[50%] m-auto">
			<h2 className="text-[3rem] text-center ">Our Menu</h2>
			<div className="w-[160px] h-[5px] rounded mx-auto bg-orange-menu"></div>

			<div className="mt-[1.5rem] flex gap-[1rem] justify-center flex-wrap ">
				<Buttons
					text="All"
					handleClick={() => handleCategories("all")}
				/>
				<Buttons
					text="Breakfast"
					handleClick={() => handleCategories("breakfast")}
				/>
				<Buttons
					text="Lunch"
					handleClick={() => handleCategories("lunch")}
				/>
				<Buttons
					text="Shakes"
					handleClick={() => handleCategories("shakes")}
				/>
			</div>
		</div>
	);
};

export default Categories;
