import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

//TODO hacer el menu tabs hidden, y el menu navegable visible cuando este sea precionado.

const Menu = () => {
	return (
		<div>
			<div>
				<FontAwesomeIcon
					icon={faBars}
					className="text-[1.5rem] text-[#49A6E9] menu-animation hover:cursor-pointer"
				/>
			</div>
			<nav>
				<NavLink to={"/home"}>Home</NavLink>
				<NavLink to={"/documents"}>Documents</NavLink>
				<NavLink to={"/team"}>Team</NavLink>
				<NavLink to={"/projects"}>Projects</NavLink>
				<NavLink to={"/calendar"}>Calendar</NavLink>
			</nav>
		</div>
	);
};

export default Menu;
