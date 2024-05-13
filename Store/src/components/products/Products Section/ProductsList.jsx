import { useContext } from "react";
import productsData from "../../../mocks/ProductsData"
import CardProduct from "./CardProduct"
import FilterContext from "../../../context/FilterContext";

const ProductsList = () => {
    const {isMultipleGrid} = useContext(FilterContext)
	
    return (
	    <div
            className={`${
                isMultipleGrid === true
                    ? "grid md:grid-cols-2 lg:grid-cols-3 "
                    : "grid"
            } mt-[4rem] gap-4 `}
        >
            {productsData.map((product) => {
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