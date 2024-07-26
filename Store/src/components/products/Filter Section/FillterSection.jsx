import { useContext } from "react";
import InputSearchProduct from "./FilterSearch";
import ThemeContext from "../../../context/ThemeContext";
import FilterPrice from "./FilterPrice";
import FilterShipping from "./FilterShipping";
import FilterSelects from "./FilterSelects";
import FilterBtns from "./FilterBtns";

const FilterSection = () => {
	
    const {theme} = useContext(ThemeContext)
	
    return (
        <div className={`${theme === "dark" ? "" : "bg-bg-light"} filter-form`} >
            <InputSearchProduct />
            <FilterSelects />
            <FilterPrice />
            <FilterShipping />
            <FilterBtns />
        </div>
    );
};

export default FilterSection;
