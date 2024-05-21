import { useContext } from "react"
import ThemeContext from "../../../context/ThemeContext"
import FilterContext from "../../../context/FilterContext";

const FilterSearch = () => {
    const { theme } = useContext(ThemeContext);
    const {filterInputs, handleInputSearch} = useContext(FilterContext)
    
    return (
        <div className="flex flex-col gap-y-[1rem]">
            <label htmlFor="input-search">Input Search</label>
            <input
                type="text"
                name="input-search"
                id="input-search"
                value={filterInputs.inputSearch}
                onChange={handleInputSearch}
                className={`${
                    theme === "dark"
                        ? "bg-main-dark text-white border border-[#3F414B] "
                        : "bg-white text-main-dark border border-[#D7DCE1] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#F0F6FF]"
                } px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer`}
            />
        </div>
    );
}

export default FilterSearch
