import { NavLink } from "react-router-dom"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import NavLinkComponent from "./NavLinkComponent";
import navigationPages from "../../mocks/NavigationPages";
import ThemeContext from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "./DarkMode";
import Chart from "./Chart";


const Nav = () => {
	const [isOpenNav, setIsOpenNav] = useState(false)
	const {theme} = useContext(ThemeContext)
	
	const toggleNav = () => {
		setIsOpenNav(!isOpenNav)
	}
	
  return (
		<nav
			className={`${
				theme === "dark"
					? "bg-bg-dark text-text-dark"
					: "bg-bg-light text-text-light"
			} relative py-[1rem] `}
		>
			<section className="w-[80%] mx-auto lg:hidden ">
				<button onClick={() => toggleNav()}>
					<FontAwesomeIcon
						icon={faBars}
						className={`${
							theme === "dark"
								? "hover:bg-[#45464A] active:bg-[#45464A] text-white"
								: "hover:bg-[#CBD5E1] active:bg-[#CBD5E1] text-main-dark"
						} mobile-nav`}
					/>
					{isOpenNav && (
						<div className={`${theme === "dark" ? "bg-bg-dark" : "bg-bg-light" } absolute left-[10%] top-[110px] w-[180px] rounded-[10px]`} >
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
							<FontAwesomeIcon className="mobile-nav-btn" />
						</div>
					)}
				</button>
			</section>

			<section className="grid grid-cols-[_80%_20%] items-center justify-around w-[80%] mx-auto">
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

				<section className="flex items-center justify-center gap-x-[.5rem] text-[1.3rem] absolute right-[10%] top-[30%]">
					<DarkMode />
					<Chart />
				</section>
			</section>
		</nav>
  );
}

export default Nav
