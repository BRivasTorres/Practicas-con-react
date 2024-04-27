import { useContext, useState } from "react"
import ThemeContext from "../../context/ThemeContext"

const FilterPrice = () => {
    const {theme} = useContext(ThemeContext)
  
    const [price, setPrice] = useState(0)
    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }
    
  return (
    <div className="w-[100%] ">
        <h2 className="flex justify-between gap-x-[.5rem] mb-[1rem]">Select Price<span>${price}.00</span></h2>
        <input type="range" max="1000" min="0" name="price" id="price" onChange={handleChangePrice} className={`${theme === "dark" ? "price-input-dark" : "price-input-light"} price-input`} />
    </div>
  )
}

export default FilterPrice
