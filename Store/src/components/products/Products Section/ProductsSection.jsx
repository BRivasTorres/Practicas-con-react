import { useContext } from "react";
import ColumnsSelector from "./ColumnsSelector";
import FilterContext from "../../../context/FilterContext";
import ProductsComponent from "./ProductsList";
import SliderProducts from "./SliderProducts";

const ProductsSection = () => {
    
    const {handleIsMultipleGrid, isMultipleGrid} = useContext(FilterContext)
    
    return (
        <div className="w-[80%] mx-auto mt-[4rem]">
            <ColumnsSelector
                handleIsMultipleGrid={handleIsMultipleGrid}
                isMultipleGrid={isMultipleGrid}
            />
            <div className="w-[100%] border-[1px] border-gray-200 mt-[1rem]">
                {" "}
            </div>
            <ProductsComponent />
            <SliderProducts />
        </div>
    );
};

export default ProductsSection;
