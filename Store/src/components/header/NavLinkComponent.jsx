import { useContext } from "react"
import { NavLink } from "react-router-dom"
import ThemeContext from "../../context/ThemeContext"

const NavLinkComponent = ({link, label}) => {
    const {theme} = useContext(ThemeContext)
    
    return (
        <div>
            <NavLink
                to={link}
                className={({ isActive }) =>
                    isActive
                        ? `bg-active-bg-dark text-nav-hov-text px-[1rem] py-[.5rem] rounded-[7px]`
                        : `${
                            theme === "dark"
                                ? "nav-link-dark"
                                : "nav-link-light"
                        } nav-link`
                }
            >
                {label}
            </NavLink>
        </div>
    );
}

export default NavLinkComponent