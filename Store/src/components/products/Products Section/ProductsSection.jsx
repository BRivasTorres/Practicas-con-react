import { useState } from "react";
import ColumnsSelector from "./ColumnsSelector";
import ProductsList from "./ProductsList";
import SliderProducts from "./SliderProducts";

const ProductsSection = () => {
    const [isMultipleGrid, setIsmultipleGrid] = useState(true);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        startIndex: 0,
        endIndex: 10,
    });
    
    const handleIsMultipleGrid = (state) => {
        setIsmultipleGrid(state);
    };
    
    const handlePagination = (newPage) => {
        setPagination((prevVal) => {
            const newCurrentPage = getNewCurrentPage(
                newPage,
                prevVal.currentPage
            );
            return {
                ...prevVal,
                currentPage: newCurrentPage,
                startIndex: (newCurrentPage - 1) * 10,
                endIndex: newCurrentPage * 10,
            };
        });
    };
    
    const getNewCurrentPage = (newPage, currentPage) => {
        if (newPage === "prev") {
            return currentPage === 1 ? 3 : currentPage - 1;
        }
        if (newPage === "next") {
            return currentPage === 3 ? 1 : currentPage + 1;
        }
        return newPage;
    };
    
    return (
        <div className="mt-[4rem] max-w-[1200px] mx-auto ">
            <ColumnsSelector
                handleIsMultipleGrid={handleIsMultipleGrid}
                isMultipleGrid={isMultipleGrid}
            />
            <div className="w-[100%] border-[1px] border-gray-200 mt-[1rem]">
                {" "}
            </div>
            <ProductsList 
                currentPage={pagination.currentPage} 
                startIndex={pagination.startIndex}
                endIndex={pagination.endIndex}
                isMultipleGrid={isMultipleGrid}
            />
            <SliderProducts 
                currentPage={pagination.currentPage} 
                handlePagination={handlePagination} 
            />
        </div>
    );
};

export default ProductsSection;
