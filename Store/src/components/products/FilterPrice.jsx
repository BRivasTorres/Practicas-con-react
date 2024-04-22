import { useState } from "react"

const FilterPrice = () => {
    
    const [price, setPrice] = useState(0)
    
    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }
    
  return (
    <div>
        <label htmlFor="price">{price}</label>
      <input type="range" max="1000" min="0" name="price" id="price" onChange={handleChangePrice} />
    </div>
  )
}

export default FilterPrice
