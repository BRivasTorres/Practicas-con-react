import { useContext } from "react"
import { Link } from "react-router-dom"
import ThemeContext from "../../../context/ThemeContext"

const CardProduct = ({img, title, price, id, isMultipleGrid }) => {
  
  const {theme} = useContext(ThemeContext)
  
  return (
		<Link
			className={`shadow-xl hover:shadow-2xl transition duration-300 rounded-[30px]  ${
				isMultipleGrid ? "card-products-multi-grid" : "card-products"
			}`}
			to={`/product/${id}`}
		>
			<img
				src={img}
				alt={title}
				className="w-[100%] h-[350px] rounded-[30px]"
			/>
			<h2 className="font-semibold capitalize text-[1.5rem] mt-[1rem] ">
				{title}
			</h2>
			<span className="text-[#943AA1]">${price}</span>
		</Link>
  );
}

export default CardProduct
