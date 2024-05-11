import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

const ColumnsSelector = ({ handleIsMultipleGrid, isMultipleGrid }) => {
	const { theme } = useContext(ThemeContext);
	
	const updateGrid = (newState) => {
		handleIsMultipleGrid(newState)
	}

	const themeStyle = `
		${
			theme === "dark"
				? "hover:bg-[#51535A] active:bg-[#51535A] focus:bg-btns-bg-dark"
				: "hover:bg-[#D7DCE1] active:bg-[#D7DCE1] focus:bg-btns-bg-light"
		} 
	grid-btns`;
	
	const currentGrid = () => {
		return theme === "dark" ? "bg-btns-bg-dark" : "bg-btns-bg-light";
	}
	
	return (
		<div className="flex justify-between">
			<h2>22 products</h2>
			<div className="flex gap-[.5rem]">
				<button
					className={`${themeStyle} ${isMultipleGrid === true ? currentGrid() : ""} `}
					onClick={() => updateGrid(true)}
				>
					<FontAwesomeIcon icon={faGripVertical} />
				</button>
				<button
					className={`${themeStyle} ${isMultipleGrid === false ? currentGrid() : "" }`}
					onClick={() => updateGrid(false)}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>
		</div>
	);
};

export default ColumnsSelector;