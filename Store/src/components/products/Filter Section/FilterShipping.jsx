import { useContext } from "react"
import ThemeContext from "../../../context/ThemeContext"
import FilterContext from "../../../context/FilterContext"

const FilterShipping = () => {
    const {theme} = useContext(ThemeContext)
	
	const { filterInputs, handleShippingFree} = useContext(FilterContext);
    
  return (
		<div className="flex flex-col items-center gap-y-[1rem]">
			<label htmlFor="shipping">
				Free shipping
			</label>
			<input
				type="checkbox"
				className={`${
					theme === "dark" ? "shipping-dark" : "shipping-light"
				} shipping-checkbox`}
				onChange={handleShippingFree}
				value={filterInputs.isShippingFree}
				name="shipping"
				id="shipping"
				checked={filterInputs.isShippingFree}
			/>
		</div>
  );
}

export default FilterShipping
