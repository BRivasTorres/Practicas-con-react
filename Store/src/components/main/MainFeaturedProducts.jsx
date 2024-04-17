import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"

const MainFeaturedProducts = () => {
  const {theme} = useContext(ThemeContext)
  
  
  return (
    <div className={`${theme === "dark" ? "text-white bg-main-dark" : "text-white bg-main-dark"} border `}>
      <h2 className="font-semibold text-[2rem] capitalize ">featured products</h2>
    </div>
  )
}

export default MainFeaturedProducts
