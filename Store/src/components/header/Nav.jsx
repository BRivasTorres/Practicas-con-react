import DarkMode from "./DarkMode";
import Chart from "./Chart";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Nav = () => {		
    return (
        <nav className={`relative py-[1rem] max-w-[1200px] mx-auto`}>
            <NavMobile />
            <NavDesktop />
            <section className="flex items-center justify-center gap-x-[.5rem] text-[1.3rem] absolute right-0 top-[30%]">
                <DarkMode />
                <Chart />
            </section>
        </nav>
    );
}

export default Nav
