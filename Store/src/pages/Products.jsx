import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import FilterSection from "../components/products/Filter Section/FillterSection"
import ProductsSection from "../components/products/Products Section/ProductsSection"

const Products = () => {
    const {themePalette} = useContext(ThemeContext)
  
    return (
        <div className={`${themePalette} overflow-hidden px-[2rem] `} >
            <FilterSection />
            <ProductsSection />
        </div>
    )
}

export default Products
