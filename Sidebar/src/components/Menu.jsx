import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faHouse,
	faPeopleGroup,
	faFolderOpen,
	faCalendarDays,
	faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<div>
			<div>
				<FontAwesomeIcon
					icon={faBars}
					className="text-[1.5rem] text-[#49A6E9] menu-animation hover:cursor-pointer"
				/>
			</div>
			<nav className="flex flex-col">
				<NavLink to={"/home"}>
					<FontAwesomeIcon icon={faHouse} /> Home
				</NavLink>

				<NavLink to={"/team"}>
					<FontAwesomeIcon icon={faPeopleGroup} />
					Team
				</NavLink>

				<NavLink to={"/projects"}>
					<FontAwesomeIcon icon={faFolderOpen} />
					Projects
				</NavLink>

				<NavLink to={"/calendar"}>
					<FontAwesomeIcon icon={faCalendarDays} />
					Calendar
				</NavLink>

				<NavLink to={"/documents"}>
					<FontAwesomeIcon icon={faFileLines} />
					Documents
				</NavLink>

				{/* <NavLink to={"/inexistente"}>Error 404</NavLink> */}
			</nav>
		</div>
	);
};

export default Menu;
