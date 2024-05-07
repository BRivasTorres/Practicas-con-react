import { useContext } from "react"
import ThemeContext from "../../../context/ThemeContext"
import FilterContext from "../../../context/FilterContext"

const FilterBtns = () => {
  
  const {theme} = useContext(ThemeContext)
  const {handleReset} = useContext(FilterContext)
  
  return (
		<>
			<button
				className={`${
					theme === "dark"
						? "bg-btns-bg-dark text-bg-dark "
						: "bg-btns-bg-light text-white"
				} rounded-[10px] font-semibold uppercase text-[1.3rem] my-[1rem] py-[.5rem] hover:opacity-[.8] active:opacity-[.7] transition-all duration-300 ease-linear`}
			>
				search
			</button>
			<button
				className={`${
					theme === "dark"
						? "bg-products-dark text-bg-dark"
						: "bg-[#B843A4] text-white"
				} rounded-[10px] font-semibold uppercase text-[1.3rem] my-[1rem] py-[.5rem] hover:opacity-[.8] active:opacity-[.7] transition-all duration-300 ease-linear`}
				onClick={handleReset}
			>
				reset
			</button>
		</>
  );
}

export default FilterBtns
