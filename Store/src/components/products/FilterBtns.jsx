import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"

const FilterBtns = () => {
  
  const {theme} = useContext(ThemeContext)
  
  return (
		<>
			<button
				className={`${
					theme === "dark"
						? "bg-btns-bg-dark text-bg-dark "
						: "bg-btns-bg-light text-white"
				} rounded-[10px] font-semibold uppercase text-[1.3rem] my-[1rem] `}
			>
				search
			</button>
			<button
				className={`${
					theme === "dark"
						? "bg-products-dark text-bg-dark"
						: "bg-[#B843A4] text-white"
				} rounded-[10px] font-semibold uppercase text-[1.3rem] my-[1rem] `}
			>
				reset
			</button>
		</>
  );
}

export default FilterBtns
