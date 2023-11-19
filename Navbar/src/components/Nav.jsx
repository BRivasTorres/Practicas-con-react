import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="text-[1rem] flex gap-[2rem] p-[1rem]">
			<NavLink
				to={"/home"}
				className={({ isActive }) =>
					isActive ? "text-[#4AA6E9]" : null
				}
			>
				Home
			</NavLink>
			<NavLink
				to={"/about"}
				className={({ isActive }) =>
					isActive ? "text-[#4AA6E9]" : null
				}
			>
				About
			</NavLink>
			<NavLink
				to={"/profile"}
				className={({ isActive }) =>
					isActive ? "text-[#4AA6E9]" : null
				}
			>
				Profile
			</NavLink>
			<NavLink
				to={"/projects"}
				className={({ isActive }) =>
					isActive ? "text-[#4AA6E9]" : null
				}
			>
				Projects
			</NavLink>
			<NavLink
				to={"/contact"}
				className={({ isActive }) =>
					isActive ? "text-[#4AA6E9]" : null
				}
			>
				Contact
			</NavLink>
		</nav>
	);
};

export default Nav;
