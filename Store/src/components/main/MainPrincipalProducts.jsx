import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import heroImgs from "../../mocks/HeroImgs";

const MainPrincipalProducts = () => {
    const {theme} = useContext(ThemeContext)
    
  return (
		<div className="w-[80%] mx-auto grid lg:grid-cols-[_50%_50%] items-center pt-[3rem] ">
			<section className="flex flex-col mr-[3rem]">
				<h2 className="text-[4rem] font-bold leading-[60px]">
					We are changing the way people shop
				</h2>
				<p className="mt-[2rem]">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Tempore repellat explicabo enim soluta temporibus asperiores
					aut obcaecati perferendis porro nobis.
				</p>
				<NavLink
					to={"/products"}
					className={`${
						theme === "dark"
							? "bg-btns-bg-dark text-main-dark"
							: "bg-btns-bg-light text-white"
					}  hover:opacity-[.8] transition-all duration-300 uppercase text-[1.3rem] font-semibold px-[1rem] py-[.5rem] w-fit rounded-[8px] mt-[3rem] `}
				>
					our products
				</NavLink>
			</section>

			<section className="hidden lg:block ">
				<div
					className={`${
						theme === "dark" ? "bg-[#414558]" : "bg-bg-dark"
					}  h-[500px] rounded-[20px] flex overflow-x-hidden`}
				>
					<div className={` flex p-[1rem] gap-x-[1rem] transition-all duration-300 ease-linear`}>
						{heroImgs.map((img) => {
							return (  
								<img
									src={img.src}
									key={img.id}
									className="rounded-[20px] w-[400px]"
								/>
							);
						})}
					</div>
				</div>
			</section>
		</div>
  );
}

export default MainPrincipalProducts
