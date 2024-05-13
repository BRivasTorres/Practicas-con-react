import ThemeContext from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


const DarkMode = () => {
    const { theme, handleChangeTheme } = useContext(ThemeContext);
    
    return (
        <div>
            {theme === "dark" ? (
                <button onClick={() => handleChangeTheme("light")}>
                    <FontAwesomeIcon icon={faSun} />
                </button>
            ) : (
                <button onClick={() => handleChangeTheme("dark")}>
                    <FontAwesomeIcon icon={faMoon} />
                </button>
            )}
        </div>
    );
};

export default DarkMode;
