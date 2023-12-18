import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
		<header className="bg-[#645CFF]">
            <div className="w-[50%] mx-auto flex justify-between items-center p-[2rem] text-white text-[2rem]">
                <h2>UseReducer</h2>
                <FontAwesomeIcon icon={faCartPlus} />
            </div>
		</header>
  );
}

export default Header
