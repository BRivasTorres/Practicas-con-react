import { NavLink } from "react-router-dom";
import isActiveNav from "../utils/IsNavActive";

const Nav = () => {
  return (
		<nav className="w-[60%] max-w-[1000px] mx-auto flex justify-between items-center p-[1rem] ">
			<h2 className="text-greenCustom text-[3rem] font-bold ">
				MixMaster
			</h2>
			<ul className="flex gap-[1.3rem] ">
				<li>
					<NavLink
						to={"/"}
						className={({ isActive }) => isActiveNav(isActive)}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/about"}
						className={({ isActive }) => isActiveNav(isActive)}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/newsletter"}
						className={({ isActive }) => isActiveNav(isActive)}
					>
						Newsletter
					</NavLink>
				</li>
			</ul>
		</nav>
  );
}

export default Nav
