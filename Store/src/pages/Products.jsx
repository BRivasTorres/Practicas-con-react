import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import FilterForm from "../components/products/Filter Section/FillterSection"
import ProductsSection from "../components/products/Products Section/ProductsSection"

const Products = () => {
  const {theme} = useContext(ThemeContext)
  
  return (
    <div className={`${theme === "dark" ? "bg-main-dark text-white" : "text-main-dark bg-white"} overflow-hidden`} >
      <FilterForm />
      <ProductsSection />
    </div>
  )
}

export default Products
