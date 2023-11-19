import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
	return (
		<div>
			<div>
				<FontAwesomeIcon
					icon={faBars}
					className="text-[1.5rem] text-[#49A6E9] menu-animation hover:cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Menu;
