import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

const Nav = () => {
	const {theme, handleChangeTheme} = useContext(ThemeContext);
	
  return (
		<nav
			className={` bg-bg-light text-text-light py-[1.5rem] flex items-center justify-around`}
		>
			<NavLink
				to="/"
				className="bg-[#057AFF] w-[50px] h-[50px] grid place-content-center font-semibold text-[2rem] text-white leading-[2.25rem] rounded-[8px]"
			>
				C
			</NavLink>
			<ul>
				<NavLink
					to={"/"}
					className={({ isActive }) =>
						isActive
							? "bg-active-bg-light text-nav-hov-text px-[1rem] py-[.5rem] rounded-[7px] "
							: "nav-link"
					}
				>
					Home
				</NavLink>
				<NavLink
					to={"/about"}
					className={({ isActive }) =>
						isActive
							? "bg-active-bg-light text-nav-hov-text px-[1rem] py-[.5rem] rounded-[7px]"
							: "nav-link"
					}
				>
					About
				</NavLink>
				<NavLink
					to={"/products"}
					className={({ isActive }) =>
						isActive
							? "bg-active-bg-light text-nav-hov-text px-[1rem] py-[.5rem] rounded-[7px]"
							: "nav-link "
					}
				>
					Products
				</NavLink>
				<NavLink
					to={"/cart"}
					className={({ isActive }) =>
						isActive
							? "bg-active-bg-light text-nav-hov-text px-[1rem] py-[.5rem] rounded-[7px]"
							: "nav-link"
					}
				>
					Cart
				</NavLink>
			</ul>
			<section className="flex gap-x-[1rem] text-[1.3rem] ">
				<div>
					{theme === "dark" ? (
						<button onClick={() => handleChangeTheme("light")}>
							<FontAwesomeIcon icon={faMoon} />
						</button>
					) : (
						<button onClick={() => handleChangeTheme("dark")}>
							<FontAwesomeIcon icon={faSun} />
						</button>
					)}
				</div>
				<div>
					<button>
						<FontAwesomeIcon icon={faCartShopping} />
					</button>
				</div>
			</section>
		</nav>
  );
}

export default Nav
