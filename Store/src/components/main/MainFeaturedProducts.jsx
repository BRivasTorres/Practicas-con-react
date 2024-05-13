import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext" 
import FeaturedProducts from "./FeaturedProducts";


const MainFeaturedProducts = () => {      
    const {theme} = useContext(ThemeContext)
  
    return (
        <div
            className={`${
                theme === "dark"
                    ? "text-white bg-main-dark"
                    : "text-main-dark bg-white"
            } w-[80%] mx-auto pb-[2rem] `}
        >
            <h2 className="font-semibold text-[2rem] capitalize my-[4rem] ">
				featured products
            </h2>
            <FeaturedProducts />			
        </div>
    );
}

export default MainFeaturedProducts