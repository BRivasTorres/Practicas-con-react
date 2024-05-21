import { useContext } from "react"
import ThemeContext from "../../../context/ThemeContext"
import FilterContext from "../../../context/FilterContext"

const FilterPrice = () => {
    const {theme} = useContext(ThemeContext)
    const {filterInputs, handleChangePrice} = useContext(FilterContext)
    
    return (
        <div className="w-[100%] ">
            <h2 className="flex justify-between gap-x-[.5rem] mb-[1rem]">Select Price<span>${filterInputs.inputPrice}.00</span></h2>
            <input 
                type="range" 
                max="1000" 
                min="0" 
                name="price" 
                id="price" 
                onChange={handleChangePrice} 
                value={filterInputs.inputPrice} 
                className={`${theme === "dark" ? "price-input-dark" : "price-input-light"} price-input`} 
            />
        </div>
    )
}

export default FilterPrice
