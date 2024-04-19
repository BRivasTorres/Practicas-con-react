import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMoon, faSun, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
import NavLinkComponent from "./NavLinkComponent";
import navigationPages from "../../mocks/NavigationPages";

//TODO: stylize nav menu mobile

const Nav = () => {
	const {theme, handleChangeTheme} = useContext(ThemeContext);
	
  return (
		<nav
			className={`${
				theme === "dark"
					? "bg-bg-dark text-text-dark"
					: "bg-bg-light text-text-light"
			}  `}
		>
			<section className="px-[2.5rem] py-[1rem] ">
				<FontAwesomeIcon
					icon={faBars}
					className="text-[2rem] p-[1rem]  transition-all duration-200 ease-linear rounded-[10px] hover:bg-[#45464A] hover:border-[#595a5f] hover:cursor-pointer"
				/>
				<FontAwesomeIcon icon={faXmark} className="hidden" />
			</section>

			<section className="hidden lg:block">
				<div className="py-[.5rem] flex items-center justify-around">
					<NavLink
						to="/"
						className={`${
							theme === "dark"
								? "bg-btns-bg-dark text-bg-dark"
								: "bg-[#057AFF] text-white"
						} w-[50px] h-[50px] grid place-content-center font-semibold text-[2rem] leading-[2.25rem] rounded-[8px] hover:opacity-[.8] transition-all duration-300`}
					>
						C
					</NavLink>
					<ul className="flex">
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
					<section className="flex gap-x-[1rem] text-[1.3rem]">
						<div>
							{theme === "dark" ? (
								<button
									onClick={() => handleChangeTheme("light")}
								>
									<FontAwesomeIcon icon={faSun} />
								</button>
							) : (
								<button
									onClick={() => handleChangeTheme("dark")}
								>
									<FontAwesomeIcon icon={faMoon} />
								</button>
							)}
						</div>
						<div>
							<NavLink
								to="/cart"
								className={`${
									theme === "dark"
										? "hover:bg-active-bg-dark"
										: "hover:bg-nav-hov-text"
								}  p-[1rem] rounded-[50%] relative`}
							>
								<FontAwesomeIcon icon={faCartShopping} />
								<span
									className={`${
										theme === "dark"
											? "bg-btns-bg-dark text-bg-dark"
											: "bg-[#057AFF] text-white"
									}  text-[1rem] px-[.5rem] rounded-[50%] absolute top-[5px] right-[3px]`}
								>
									0
								</span>
							</NavLink>
						</div>
					</section>
				</div>
			</section>
		</nav>
  );
}

export default Nav
