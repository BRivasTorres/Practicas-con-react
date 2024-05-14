import { useContext, useState, useEffect } from "react";
import productsData from "../../../mocks/ProductsData"
import CardProduct from "./CardProduct"
import FilterContext from "../../../context/FilterContext";

const ProductsList = ({currentPage}) => {           
    const {isMultipleGrid} = useContext(FilterContext)
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(9);
    
    useEffect(() => {
        const handleIndexes = () => {
            setStartIndex((currentPage - 1) * 10);
            setEndIndex(currentPage * 10 - 1);
        };
        handleIndexes()
    }, [currentPage]);
    
    {console.log(startIndex, endIndex)}
    
    return (
	    <div
            className={`${
                isMultipleGrid === true
                    ? "grid md:grid-cols-2 lg:grid-cols-3 "
                    : "grid"
            } mt-[4rem] gap-4`}
        >
            {productsData.slice(startIndex, endIndex).map((product) => {
                return (
                    <div key={product.id}>
                        <CardProduct
                            id={product.id}
                            img={product.attributes.image}
                            title={product.attributes.title}
                            price={product.attributes.price}
                            isMultipleGrid={isMultipleGrid}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default ProductsList