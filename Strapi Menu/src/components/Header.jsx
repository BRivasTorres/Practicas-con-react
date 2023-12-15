import { useState } from "react"
import { NavLink } from "react-router-dom"
import Productos from "../pages/Productos"
import Solutions from "../pages/Solutions"
import Resourses from "../pages/Resourses"

const Header = () => {
	const [isShow, setIsShow] = useState({
		product : false,
		solutions: false,
		resources : false
	})

	const handleMouseEnter =  (key) => {
		setIsShow({...isShow, [key] : true})
	}
	
	const handleMouseLeave = (key) => {
		setIsShow({...isShow, [key] : false})
	}
	
  return (
		<header className="w-[80%] mx-auto py-[2.5rem] text-white flex justify-around">
			<h2 className="text-[2.4rem] font-bold ">strapi</h2>
			<nav className="text-[2rem] flex gap-[1.3rem] items-center">
				<NavLink
					to={"#"}
					onMouseEnter={() => handleMouseEnter("product")}
					onMouseLeave={() => handleMouseLeave("product")}
				>
					Product
				</NavLink>
				{isShow.product && <Productos />}
				<NavLink
					to={"#"}
					onMouseEnter={() => handleMouseEnter("solutions")}
					onMouseLeave={() => handleMouseLeave("solutions")}
				>
					Solutions
				</NavLink>
				{isShow.solutions && <Solutions />}
				<NavLink
					to={"#"}
					onMouseEnter={() => handleMouseEnter("resources")}
					onMouseLeave={() => handleMouseLeave("resources")}
				>
					Resources
				</NavLink>
				{isShow.resources && <Resourses />}
			</nav>
		</header>
  );
}

export default Header
