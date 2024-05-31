import { useContext } from "react"
import ThemeContext from "../../../context/ThemeContext"
import FilterContext from "../../../context/FilterContext";

const SliderProducts = ({ handlePagination, currentPage }) => {
    const { theme } = useContext(ThemeContext);
    const { data } = useContext(FilterContext) 

    const updatePage = (newPage) => {
        handlePagination(newPage, data.length)
    };
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const btnsContent = ["prev", ...Array.from({ length: totalPages }, (_, i) => i + 1), "next"];
    
    const isHidden = data.length < itemsPerPage;

    return (
        <div className={`rounded-3xl overflow-hidden my-[3rem] w-fit ml-auto ${isHidden ? "hidden" : ""}`}>
            {btnsContent.map((btn, id) => (
                <button
                    key={id}
                    className={`${
                        theme === "dark"
                            ? "bg-main-dark text-white"
                            : "text-main-dark hover:bg-[#E2E8F4]"
                    } ${
                        currentPage === btn ? "bg-[#E2E8F4]" : "bg-[#F0F6FF]"
                    } sm:px-6 sm:py-3 px-3 py-1 sm:text-xl text-sm font-semibold uppercase transition duration-200 ease-linear`}
                    onClick={() => updatePage(btn)}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
};

export default SliderProducts
