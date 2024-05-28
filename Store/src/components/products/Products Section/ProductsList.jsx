import { useContext } from "react";
import CardProduct from "./CardProduct"
import FilterContext from "../../../context/FilterContext";

const ProductsList = ({startIndex, endIndex, isMultipleGrid}) => {           
        
    const {data} = useContext(FilterContext)
    
    return (
	    <div
            className={`${
                isMultipleGrid === true
                    ? "grid md:grid-cols-2 lg:grid-cols-3 "
                    : "grid"
            } my-[4rem] gap-4`}
        >
            {data.slice(startIndex, endIndex).map((product) => {
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