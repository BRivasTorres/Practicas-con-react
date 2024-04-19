import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext" 
import productsData from "../../mocks/ProductsData"

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
			<section className="featured-products">
				{productsData.map((item) => {
					return item.attributes.featured === true ? (
						<section key={item.id}>
							<div>
								<img
								src={item.attributes.image}
								alt={item.attributes.title}
								className="h-[300px] w-[100%] rounded-[30px]"
								/>
							</div>
							<div className="flex flex-col items-center mt-[2rem] ">
								<h2 className="capitalize font-semibold text-[1.5rem]">{item.attributes.title}</h2>
								<span className={`${theme === "dark" ? "text-[#BF87C6]" : "text-main-dark" }`}>${item.attributes.price}</span>
							</div>
						</section>
					) : null;
				})}
			</section>
		</div>
  );
}

export default MainFeaturedProducts