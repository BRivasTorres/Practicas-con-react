import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import FilterContext from "../../../context/FilterContext";

const ColumnsSelector = ({ handleIsMultipleGrid, isMultipleGrid }) => {
    const { theme } = useContext(ThemeContext);
    const { data } = useContext(FilterContext)
    
    const updateGrid = (newState) => {
        handleIsMultipleGrid(newState)
    }

    const getThemeStyles = (isActive) => {
        const baseStyle =
			theme === "dark"
			    ? "hover:bg-[#51535A] active:bg-[#51535A] focus:bg-btns-bg-dark"
			    : "hover:bg-[#D7DCE1] active:bg-[#D7DCE1] focus:bg-btns-bg-light";

        const activeStyle =
			theme === "dark" ? "bg-btns-bg-dark" : "bg-btns-bg-light";

        return `${baseStyle} ${isActive ? activeStyle : ""} grid-btns`;
    };

    return (
        <div className="flex justify-between">
            <h2>{data.length} products</h2>
            <div className="flex gap-[.5rem]">
                <button
                    className={getThemeStyles(isMultipleGrid === true)}
                    onClick={() => updateGrid(true)}
                >
                    <FontAwesomeIcon icon={faGripVertical} />
                </button>
                <button
                    className={getThemeStyles(isMultipleGrid === false)}
                    onClick={() => updateGrid(false)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
    );
};

export default ColumnsSelector;