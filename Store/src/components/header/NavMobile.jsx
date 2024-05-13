import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import navigationPages from "../../mocks/NavigationPages";
import NavLinkComponent from "./NavLinkComponent";

const NavMobile = () => {
    const { theme } = useContext(ThemeContext);

    const [isOpenNav, setIsOpenNav] = useState(false);

    const toggleNav = () => {
        setIsOpenNav(!isOpenNav);
    };
    
    return (
        <section className="w-[80%] mx-auto lg:hidden">
            <button onClick={() => toggleNav()}>
                <FontAwesomeIcon
                    icon={faBars}
                    className={`${
                        theme === "dark"
                            ? "hover:bg-[#45464A]"
                            : "hover:bg-[#CBD5E1]"
                    } p-[.5rem] rounded-[5px]`}
                />
                {isOpenNav && (
                    <div
                        className={`${
                            theme === "dark"
                                ? "bg-bg-dark"
                                : "bg-bg-light"
                        } absolute left-[10%] top-[75px] w-[180px] rounded-[10px]`}
                    >
                        <ul className="flex flex-col items-start gap-y-[1rem] text-[1rem] p-[1rem]">
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
                    </div>
                )}
            </button>
        </section>
    );
};

export default NavMobile;
