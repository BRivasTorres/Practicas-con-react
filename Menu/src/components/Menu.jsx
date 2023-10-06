import Categories from "./Categories";
import Foods from "./Foods";

const Menu = () => {
	return (
		<div className="w-[70%] mx-auto pt-[2rem] border ">
			<Categories />
			<Foods />
		</div>
	);
};

export default Menu;
