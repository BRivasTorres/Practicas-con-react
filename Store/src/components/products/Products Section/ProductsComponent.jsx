import { useState } from "react";
import productsData from "../../../mocks/ProductsData"
import CardProduct from "./CardProduct"
import ColumnsSelector from "./ColumnsSelector";

const ProductsComponent = () => {
	const [isMultipleGrid, setIsMultipleGrid] = useState(true)
	
	const handleIsMultipleGrid = (state) => {
		setIsMultipleGrid(state)
	}
	
  return (
		<div className="w-[80%] mx-auto mt-[4rem]">
			<ColumnsSelector handleIsMultipleGrid={handleIsMultipleGrid} isMultipleGrid={isMultipleGrid} />
			<div className="w-[100%] border-[1px] border-gray-200 mt-[.5rem]">
				{" "}
			</div>
			<section className={`${isMultipleGrid === true ? "featured-products" : "grid" } mt-[4rem]`}>
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
			</section>
		</div>
  );
}

export default ProductsComponent