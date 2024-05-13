import { Link } from "react-router-dom"

const CardProduct = ({img, title, price, id, isMultipleGrid }) => {  
  
    return (
        <Link
            className={`shadow-xl hover:shadow-2xl transition duration-300 rounded-[30px] ${
                isMultipleGrid ? "multi-grid" : "single-grid"
            }`}
            to={`/products/${id}`}
        >
            <img
                src={img}
                alt={title}
                className="h-[300px] w-[100%] sm:w-[500px] object-cover rounded-[30px]"
            />
            <h2
                className={`${
                    isMultipleGrid ? "ml-0" : "ml-16"
                } font-semibold capitalize text-[1.5rem] mt-[1rem]`}
            >
                {title}
            </h2>
            <span className={`${isMultipleGrid ? "" : "ml-auto" } text-[#943AA1] mt-[1rem]`}>${price}</span>
        </Link>
    );
}

export default CardProduct
