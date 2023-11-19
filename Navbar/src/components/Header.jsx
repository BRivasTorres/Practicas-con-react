import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
	return (
		<div className="flex items-center justify-around max-w-[2000px] bg-white shadow-header">
			<div>
				<span className="text-[1.5rem]">Codding</span>
				<span className="text-[1.5rem] text-blue-600 mx-[.4rem] ">
					Addict
				</span>
			</div>
			<Nav />
			<div className="flex gap-[.4rem]">
				<FontAwesomeIcon
					icon={faFacebook}
					className="text-[#49A6E9] hover:cursor-pointer"
				/>
				<FontAwesomeIcon
					icon={faTwitter}
					className="text-[#49A6E9] hover:cursor-pointer"
				/>
				<FontAwesomeIcon
					icon={faLinkedin}
					className="text-[#49A6E9] hover:cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Header;
