import { useState } from "react";
import productsData from "../../../mocks/ProductsData"
import CardProduct from "./CardProduct"
import ColumnsSelector from "./ColumnsSelector";

const ProductsComponent = () => {
	const [isMultipleGrid, setIsMultipleGrid] = useState(true)
	
	const handleIsMultipleGrid = (state) => {
		console.log(state)
		setIsMultipleGrid(state)
	}
	
  return (
		<div className="w-[80%] mx-auto mt-[4rem]">
			<ColumnsSelector handleIsMultipleGrid={handleIsMultipleGrid} isMultipleGrid={isMultipleGrid} />
			<div className="w-[100%] border-[1px] border-gray-200 mt-[2rem]">
				{" "}
			</div>
			<section className={`${isMultipleGrid === true ? "featured-products" : "grid grid-cols-1" } mt-[5rem]`}>
				{productsData.map((product) => {
					return (
						<div key={product.id}>
							<CardProduct
								img={product.attributes.image}
								title={product.attributes.title}
								price={product.attributes.price}
							/>
						</div>
					);
				})}
			</section>
		</div>
  );
}

export default ProductsComponent