import productsData from "../../../mocks/ProductsData"
import CardProduct from "./CardProduct"

const ProductsList = ({startIndex, endIndex, isMultipleGrid}) => {           
        
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