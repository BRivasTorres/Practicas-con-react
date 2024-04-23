import { useContext } from "react"
import FilterProducts from "../components/products/FilterProducts"
import ThemeContext from "../context/ThemeContext"

//TODO: Corregir Products filter section para tener separación entre nav correctamente.

const Products = () => {
  const {theme} = useContext(ThemeContext)
  
  return (
    <div className={`${theme === "dark" ? "bg-main-dark text-white" : "text-main-dark bg-white"} min-h-[100vh]  `} >
      <FilterProducts />
    </div>
  )
}

export default Products
