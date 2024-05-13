import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import DarkMode from "./DarkMode";
import Chart from "./Chart";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";


const Nav = () => {
    const {theme} = useContext(ThemeContext)
		
    return (
        <nav
            className={`${
                theme === "dark"
                    ? "bg-bg-dark text-text-dark"
                    : "bg-bg-light text-text-light"
            } relative py-[1rem] `}
        >
            <NavMobile />
            <NavDesktop />
            <section className="flex items-center justify-center gap-x-[.5rem] text-[1.3rem] absolute right-[10%] top-[30%]">
                <DarkMode />
                <Chart />
            </section>
        </nav>
    );
}

export default Nav
