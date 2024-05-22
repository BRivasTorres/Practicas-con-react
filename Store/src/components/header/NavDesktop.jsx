import { NavLink } from "react-router-dom";
import NavLinkComponent from "./NavLinkComponent";
import navigationPages from "../../mocks/NavigationPages";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const NavDesktop = () => {
    const {theme} = useContext(ThemeContext)
    
    return (
        <section className="grid grid-cols-[_80%_20%] items-center justify-around">
            <div className="hidden lg:block">
                <section className="py-[.5rem] grid grid-cols-[_20%_80%] items-center">
                    <NavLink
                        to="/"
                        className={`${
                            theme === "dark"
                                ? "bg-btns-bg-dark text-bg-dark"
                                : "bg-[#057AFF] text-white"
                        } w-[50px] h-[50px] grid place-content-center font-semibold text-[2rem] leading-[2.25rem] rounded-[8px] hover:opacity-[.8] transition-all duration-300 `}
                    >
						C
                    </NavLink>
                    <ul className="flex justify-center">
                        {navigationPages.map((navItem) => {
                            return (
                                <NavLinkComponent
                                    key={navItem.id}
                                    link={navItem.to}
                                    label={navItem.label}
                                />
                            );
                        })}
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default NavDesktop;
