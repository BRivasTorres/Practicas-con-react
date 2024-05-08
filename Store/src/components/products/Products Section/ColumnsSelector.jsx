import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

//TODO fix hover in gird buttons and set different background to an active grid button

const ColumnsSelector = ({ handleColumsGrid }) => {
	const { theme } = useContext(ThemeContext);
    
    const updateGrid = (grid) => {
        handleColumsGrid(grid)
    }
	
	const themeStyle = `hover:bg-[${
		theme === "dark" ? "#51535A" : "#D7DCE1"
	}] focus:bg-${theme === "dark" ? "btns-bg-dark" : "bg-dark"}  grid-btns`;
	
	return (
		<div className="flex justify-between">
			<h2>22 products</h2>
			<div className="flex gap-[.5rem]">
				<button
					className={`${themeStyle}`}
					onClick={() => updateGrid("featured-products")}
				>
					<FontAwesomeIcon icon={faGripVertical} />
				</button>
				<button
					className={`${themeStyle}`}
					onClick={() => updateGrid("grid grid-cols-[100%]")}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>
		</div>
	);
};

export default ColumnsSelector;