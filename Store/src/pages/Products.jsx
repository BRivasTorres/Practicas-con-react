import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import FilterForm from "../components/products/FilterForm"

const Products = () => {
  const {theme} = useContext(ThemeContext)
  
  return (
    <div className={`${theme === "dark" ? "bg-main-dark text-white" : "text-main-dark bg-white"} min-h-[100vh] overflow-hidden `} >
      <FilterForm />
    </div>
  )
}

export default Products
