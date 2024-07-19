import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import FilterSection from "../components/products/Filter Section/FillterSection"
import ProductsSection from "../components/products/Products Section/ProductsSection"

const Products = () => {
    const {theme} = useContext(ThemeContext)
  
    return (
        <div className={`${theme === "dark" ? "bg-main-dark text-white" : "text-main-dark bg-white"} overflow-hidden px-[2rem] `} >
            <FilterSection />
            <ProductsSection />
        </div>
    )
}

export default Products
