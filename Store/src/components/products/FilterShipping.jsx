import { useContext, useState } from "react"
import ThemeContext from "../../context/ThemeContext"

const FilterShipping = () => {
    const {theme} = useContext(ThemeContext)
    const [isShippingFree, setIsShippingFree] = useState(false)
    
    const handleIsShippingFree = () => {
        setIsShippingFree(!isShippingFree)
    }
    
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
				onChange={handleIsShippingFree}
				value={isShippingFree}
				name="shipping"
				id="shipping"
				checked={isShippingFree}
			/>
		</div>
  );
}

export default FilterShipping
