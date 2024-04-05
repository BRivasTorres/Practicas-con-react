import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Nav = () => {
  return (
		<nav className="bg-bg-light text-text-light py-[1.5rem] flex items-center justify-around border">
			<a
				href="/"
				className="bg-[#057AFF] w-[50px] h-[50px] grid place-content-center font-semibold text-[2rem] text-white leading-[2.25rem] rounded-[8px] "
			>
				C
			</a>
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
			<section>
				<div>
					<FontAwesomeIcon icon={faSun} />
					<FontAwesomeIcon icon={faMoon} />
				</div>
				<FontAwesomeIcon icon={faCartShopping} />
			</section>
		</nav>
  );
}

export default Nav
