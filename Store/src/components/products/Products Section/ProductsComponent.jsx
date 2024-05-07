import { useState } from "react";
import productsData from "../../../mocks/ProductsData"
import CardProduct from "./CardProduct"
import ColumnsSelector from "./ColumnsSelector";

const ProductsComponent = () => {
	
	const [currentGrid, setCurrentGrid] = useState("featured-products")
	const handleColumsGrid = (grid) => {
		setCurrentGrid(grid)
	}
	
  return (
		<div className="w-[80%] mx-auto mt-[4rem]">
			<ColumnsSelector handleColumsGrid={handleColumsGrid} />
			<div className="w-[100%] border-[1px] border-gray-200 mt-[2rem]">
				{" "}
			</div>
			<section className={`${currentGrid} mt-[5rem]`}>
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