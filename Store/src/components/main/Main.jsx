import { useContext } from "react"
import MainFeaturedProducts from "./MainFeaturedProducts"
import MainPrincipalProducts from "./MainPrincipalProducts"
import ThemeContext from "../../context/ThemeContext"

const Main = () => {
    const {theme} = useContext(ThemeContext)
    
    return (
        <div className={`${theme === "dark" ? "bg-main-dark text-white" : "white text-main-dark"}`}>
            <MainPrincipalProducts />
            <MainFeaturedProducts />
        </div>
    )
}
export default Main
