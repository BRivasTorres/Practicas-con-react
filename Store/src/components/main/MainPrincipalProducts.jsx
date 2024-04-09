import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";

//TODO create styles for main section and create carousel

const MainPrincipalProducts = () => {
    const {theme} = useContext(ThemeContext)
    
  return (
		<div className="w-[80%] mx-auto flex gap-x-[3rem] border border-blue-800 ">
			<section className="flex flex-col gap-[2rem]">
				<h2 className="text-[3.5rem] font-bold leading-[60px] ">
					We are changing the way people shop
				</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Tempore repellat explicabo enim soluta temporibus asperiores
					aut obcaecati perferendis porro nobis.
				</p>
				<NavLink
					className={`${
						theme === "dark"
							? "bg-btns-bg-dark text-main-dark"
							: "bg-btns-bg-light text-white"
					}  hover:opacity-[.8] transition-all duration-300 uppercase text-[1rem] font-semibold px-[1rem] py-[.5rem] w-fit rounded-[8px]`}
				>
					our products
				</NavLink>
			</section>

			<section className="w-[100%] ">
				<div className="bg-[#414558] h-[200px]"></div>
			</section>
		</div>
  );
}

export default MainPrincipalProducts
