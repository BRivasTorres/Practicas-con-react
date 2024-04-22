import { useContext } from "react"
import FilterProducts from "../components/products/FilterProducts"
import ThemeContext from "../context/ThemeContext"
import FilterPrice from "../components/products/FilterPrice"

const Products = () => {
  const {theme} = useContext(ThemeContext)
  
  return (
    <div className={`${theme === "dark" ? "bg-main-dark text-white" : "text-main-dark bg-white"} min-h-[100vh] `} >
      <FilterProducts />
      <FilterPrice />
    </div>
  )
}

export default Products
