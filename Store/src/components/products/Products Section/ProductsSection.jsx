import { useContext, useState } from "react";
import ColumnsSelector from "./ColumnsSelector";
import ProductsList from "./ProductsList";
import SliderProducts from "./SliderProducts";
import FilterContext from "../../../context/FilterContext";
import NoProductsMatched from "./NoProductsMatched";

const ProductsSection = () => {
    const {data} = useContext(FilterContext)
    
    const [isMultipleGrid, setIsmultipleGrid] = useState(true);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        startIndex: 0,
        endIndex: 10,
    });
    
    const handleIsMultipleGrid = (state) => {
        setIsmultipleGrid(state);
    };
    
    const handlePagination = (newPage, dataLength) => {
        setPagination((prevVal) => {
            const totalPages = Math.ceil(dataLength / 10);
            const newCurrentPage = getNewCurrentPage(
                newPage,
                prevVal.currentPage,
                totalPages
            );

            return {
                ...prevVal,
                currentPage: newCurrentPage,
                startIndex: (newCurrentPage - 1) * 10,
                endIndex: newCurrentPage * 10,
            };
        });
    };

    const getNewCurrentPage = (newPage, currentPage, totalPages) => {
        switch (newPage) {
        case "prev":
            return currentPage === 1 ? totalPages : currentPage - 1;
        case "next":
            return currentPage === totalPages ? 1 : currentPage + 1;
        default:
            return newPage;
        }
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
            {data.length === 0 ? <NoProductsMatched /> : null}
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
