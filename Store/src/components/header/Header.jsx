import { useContext } from "react";
import Nav from "./Nav"
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
    const {theme} = useContext(ThemeContext)
    
    return (
        <div
            className={`${
                theme === "dark"
                    ? "bg-bg-dark text-text-dark"
                    : "bg-bg-light text-text-light"
            }`}
        >
            <Nav />
        </div>
    );
}

export default Header
