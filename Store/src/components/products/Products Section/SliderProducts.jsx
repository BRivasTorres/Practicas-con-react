import { useContext } from "react"
import ThemeContext from "../../../context/ThemeContext"
import FilterContext from "../../../context/FilterContext";

//TODO realizar numeracion de slider dinamico dependiendo del length del array

const SliderProducts = ({ handlePagination, currentPage }) => {
    const { theme } = useContext(ThemeContext);
    const { data } = useContext(FilterContext) 
    const btnsContent = ["prev", 1, 2, 3, "next"];

    const updatePage = (newPage) => {
        handlePagination(newPage)
    };
    return (
        <div className={`rounded-3xl overflow-hidden my-[3rem] w-fit ml-auto ${data.length < 10 ? "hidden" : ""} `}>
            {btnsContent.map((btn, id) => {
                return (
                    <button
                        key={id}
                        className={`${
                            theme === "dark"
                                ? "bg-main-dark text-white"
                                : " text-main-dark hover:bg-[#E2E8F4]"
                        } ${
                            currentPage === id ? "bg-[#E2E8F4]" : "bg-[#F0F6FF]"
                        }  sm:px-6 sm:py-3 px-3 py-1 sm:text-xl text-sm font-semibold uppercase transition duration-200 ease-linear`}
                        onClick={() => updatePage(btn)}
                    >
                        {btn}
                    </button>
                );
            })}
        </div>
    );
};

export default SliderProducts
