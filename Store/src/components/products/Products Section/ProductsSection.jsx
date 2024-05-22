import { useContext } from "react";
import ColumnsSelector from "./ColumnsSelector";
import FilterContext from "../../../context/FilterContext";
import ProductsList from "./ProductsList";
import SliderProducts from "./SliderProducts";

const ProductsSection = () => {
    
    const {handleIsMultipleGrid, isMultipleGrid, handleCurrentPage, currentPage} = useContext(FilterContext)
    
    
    return (
        <div className="mt-[4rem] max-w-[1200px] mx-auto ">
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
