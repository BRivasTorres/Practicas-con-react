import { useContext } from "react";
import SelectBtns from "./FilterInputs";
import ThemeContext from "../../context/ThemeContext";

const FilterProducts = () => {
  
  const {theme} = useContext(ThemeContext)
  
  return (
    <div className={`${theme === "dark" ? "" : "bg-bg-light"} w-[80%] mx-auto rounded-[5px] pt-[4rem]`} >
        <SelectBtns />
    </div>
  );
}

export default FilterProducts
