import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
		<nav className="bg-nav-bg-light text-text-light  ">
			<NavLink
				to={"/"}
				// className="hover:bg-nav-hov-light p-[1rem] "
				className={({ isActive }) =>
					isActive ? "bg-nav-bg-active" : "bg-red-700"
				}
			>
				Home
			</NavLink>
			<NavLink
				to={"/about"}
				// className="hover:bg-nav-hov-light"
			>
				About
			</NavLink>
			<NavLink to={"/products"} className="hover:bg-nav-hov-light">
				Products
			</NavLink>
			<NavLink to={"/cart"} className="hover:bg-nav-hov-light">
				Cart
			</NavLink>
		</nav>
  );
}

export default Nav
