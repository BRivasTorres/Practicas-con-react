import { useContext, useState } from "react";
import ColumnsSelector from "./ColumnsSelector";
import FilterContext from "../../../context/FilterContext";
import ProductsList from "./ProductsList";
import SliderProducts from "./SliderProducts";

const ProductsSection = () => {
    
    const {handleIsMultipleGrid, isMultipleGrid} = useContext(FilterContext)
    const [currentPage, setCurrentPage] = useState(1);
    
    const handleCurrentPage = (newPage) => {
        if(newPage === "prev") {
            currentPage === 1
                ? setCurrentPage(3)
                : setCurrentPage((prevVal) => prevVal - 1);
        } else if(newPage === "next") {
            currentPage === 3
                ? setCurrentPage(1)
                : setCurrentPage((prevVal) => prevVal + 1);
        } else {
            setCurrentPage(newPage)
        }
    }
    
    return (
        <div className="w-[80%] mx-auto mt-[4rem]">
            <ColumnsSelector
                handleIsMultipleGrid={handleIsMultipleGrid}
                isMultipleGrid={isMultipleGrid}
            />
            <div className="w-[100%] border-[1px] border-gray-200 mt-[1rem]">
                {" "}
            </div>
            <ProductsList currentPage={currentPage} />
            <SliderProducts currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
        </div>
    );
};

export default ProductsSection;
