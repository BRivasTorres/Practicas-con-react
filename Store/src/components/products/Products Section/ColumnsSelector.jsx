import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";


//TODO crear default focus a un boton
const ColumnsSelector = ({ handleColumsGrid }) => {
	const { theme } = useContext(ThemeContext);
    
    const updateGrid = (grid) => {
        handleColumsGrid(grid)
    }

	return (
		<div className="flex justify-between">
			<h2>22 products</h2>
			<div className="flex gap-[.5rem]">
				<button
					className={`${
						theme === "dark"
							? "hover:bg-[#51535A] text-white focus:bg-btns-bg-dark"
							: "text-main-dark focus:bg-btns-bg-light"
					} p-[.5rem] rounded-[100px] w-[40px] hover:opacity-[.8] active:opacity-[.8]  transition-all duration-200 ease-linear`}
					onClick={() => updateGrid("featured-products")}
				>
					<FontAwesomeIcon icon={faGripVertical} />
				</button>
				<button
					className={`${
						theme === "dark"
							? "hover:bg-[#51535A] focus:bg-btns-bg-dark"
							: "hover:bg-[#D7DCE1] focus:bg-btns-bg-light"
					} p-[.5rem] rounded-[100px] w-[40px] hover:opacity-[.8] active:opacity-[.8]  transition-all duration-200 ease-linear`}
					onClick={() => updateGrid("grid grid-cols-[100%]")}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>
		</div>
	);
};

export default ColumnsSelector;
