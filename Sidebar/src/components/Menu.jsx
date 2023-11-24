import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faHouse,
	faPeopleGroup,
	faFolderOpen,
	faCalendarDays,
	faFileLines,
	faX,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faInstagram,
	faXTwitter,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const navLinkStyles = "p-[1rem] hover:bg-[#F1F5F9]";
const socialsIconsStyles = "hover:text-[#104E7A] hover:cursor-pointer ";

const Menu = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div>
			<button className="p-[2rem]" onClick={handleShowMenu}>
				<FontAwesomeIcon
					icon={faBars}
					className="text-[1.5rem] text-[#49A6E9] menu-animation"
				/>
			</button>
			<nav
				className={`grid grid-rows-[auto_1fr_auto] w-[20%] bg-white text-[#64748B] text-[1.5rem] h-[100svh] fixed top-[0] left-[0] 
				${!showMenu ? "translate-x-[-100%]" : null}`}
			>
				<div className="p-[1rem] flex items-center justify-between">
					<h2 className="text-[1.5rem] ">
						Codding
						<span className=" text-blue-600 mx-[.4rem] ">
							Addict
						</span>
					</h2>
					<button onClick={handleShowMenu}>
						<FontAwesomeIcon
							icon={faX}
							className="text-[#842029]"
						/>
					</button>
				</div>
				<ul className="flex flex-col">
					<NavLink
						to={"/home"}
						className={navLinkStyles}
						title="Home"
					>
						<FontAwesomeIcon icon={faHouse} /> Home
					</NavLink>

					<NavLink
						to={"/team"}
						className={navLinkStyles}
						title="Team"
					>
						<FontAwesomeIcon icon={faPeopleGroup} />
						Team
					</NavLink>
					<NavLink
						to={"/projects"}
						className={navLinkStyles}
						title="Projects"
					>
						<FontAwesomeIcon icon={faFolderOpen} />
						Projects
					</NavLink>
					<NavLink
						to={"/calendar"}
						className={navLinkStyles}
						title="Calendar"
					>
						<FontAwesomeIcon icon={faCalendarDays} />
						Calendar
					</NavLink>
					<NavLink
						to={"/documents"}
						className={navLinkStyles}
						title="Documents"
					>
						<FontAwesomeIcon icon={faFileLines} />
						Documents
					</NavLink>
				</ul>
				<ul className="list-none text-[#49A6E9] flex gap-[1rem] mx-auto mb-[1.7rem]">
					<FontAwesomeIcon
						icon={faFacebook}
						className={socialsIconsStyles}
					/>
					<FontAwesomeIcon
						icon={faInstagram}
						className={socialsIconsStyles}
					/>
					<FontAwesomeIcon
						icon={faXTwitter}
						className={socialsIconsStyles}
					/>
					<FontAwesomeIcon
						icon={faLinkedin}
						className={socialsIconsStyles}
					/>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
