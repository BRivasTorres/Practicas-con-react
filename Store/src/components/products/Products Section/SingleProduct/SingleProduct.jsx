import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import SingleProductDescription from "./SingleProductDescription"
import SingleProudctColors from "./SingleProudctColors"
import SingleProductAmount from "./SingleProductAmount"
import SingleProductImg from "./SingleProductImg"
import SingleProductBuy from "./SingleProductBuy"

const SingleProduct = ({data}) => {
    const {title, company, description, image, price, colors} = data
    
    return (
        <div className={`w-[80%] mx-auto pt-[5rem] min-h-[100dvh]`}>   
            <section className="flex items-center gap-[1rem]">
                <NavLink to={"/"} className="hover:underline">Home</NavLink>
                <FontAwesomeIcon icon={faAngleRight} />
                <NavLink to={"/products"} className="hover:underline">Products</NavLink>
            </section>
            
            <section className="mt-[1.5rem] grid grid-cols-1 gap-[3rem] lg:grid-cols-[_50%_50%]">
                <SingleProductImg image={image} title={title} />
                <div className="flex flex-col gap-y-5">
                    <SingleProductDescription
                        title={title}
                        company={company}
                        price={price}
                        description={description}
                    />
                    <SingleProudctColors colors={colors} />
                    <SingleProductAmount />
                    <SingleProductBuy />
                </div>
            </section>
        </div>
    );
}

export default SingleProduct
