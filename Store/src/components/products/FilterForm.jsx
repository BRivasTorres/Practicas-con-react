import { useContext } from "react";
import InputSearchProduct from "./FilterSearch";
import ThemeContext from "../../context/ThemeContext";
import FilterPrice from "./FilterPrice";
import FilterShipping from "./FilterShipping";
import FilterSelects from "./FilterSelects";

const FilterForm = () => {
	
	const {theme} = useContext(ThemeContext)
	
	return (
		<div className={`${theme === "dark" ? "" : "bg-bg-light"} w-[80%] mx-auto rounded-[5px] mt-[5rem] filter-form p-[2rem] `} >
			<InputSearchProduct />
			<FilterSelects />
			<FilterPrice />
			<FilterShipping />
		</div>
	);
};

export default FilterForm;
