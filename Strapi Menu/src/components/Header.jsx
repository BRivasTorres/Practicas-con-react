import { useState } from "react"
import { NavLink } from "react-router-dom"
import Productos from "../pages/Productos"
import Solutions from "../pages/Solutions"
import Resourses from "../pages/Resourses"

const Header = () => {
    const [isShowProducts, setIsShowProducts] = useState(false)
    const [isShowSolutions, setIsShowSolutions] = useState(false)
    const [isShowResources, setIsShowResources] = useState(false)
    
  return (
		<header className="w-[80%] mx-auto py-[2.5rem] text-white flex justify-around">
			<h2 className="text-[2.4rem] font-bold ">strapi</h2>
			<nav className="text-[2rem] flex gap-[1.3rem] items-center">
				<NavLink
					to={"#"}
					onMouseEnter={() => setIsShowProducts(true)}
					onMouseLeave={() => setIsShowProducts(false)}
				>
					Product
				</NavLink>
				{isShowProducts && <Productos />}
				<NavLink
					to={"#"}
					onMouseEnter={() => setIsShowSolutions(true)}
					onMouseLeave={() => setIsShowSolutions(false)}
				>
					Solutions
				</NavLink>
				{isShowSolutions && <Solutions />}
				<NavLink
					to={"#"}
					onMouseEnter={() => setIsShowResources(true)}
					onMouseLeave={() => setIsShowResources(false)}
				>
					Resources
				</NavLink>
				{isShowResources && <Resourses />}
			</nav>
		</header>
  );
}

export default Header
