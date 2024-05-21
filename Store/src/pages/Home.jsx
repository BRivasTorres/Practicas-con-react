import { useContext } from "react"
import Main from "../components/main/Main"
import ThemeContext from "../context/ThemeContext"

const Home = () => {
    
    const {theme} = useContext(ThemeContext)
    
    return (
        <div className={`${theme === "dark" ? "bg-main-dark text-white" : "bg-white text-black" } `} >
            <Main />
        </div>
    )
}

export default Home
