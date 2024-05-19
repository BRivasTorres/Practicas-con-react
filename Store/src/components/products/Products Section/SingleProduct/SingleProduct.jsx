import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink, useParams } from "react-router-dom"
import productsData from "../../../../mocks/ProductsData"
import SingleProductDescription from "./SingleProductDescription"
import SingleProudctColors from "./SingleProudctColors"
import SingleProductAmount from "./SingleProductAmount"
import SingleProductImg from "./SingleProductImg"

const SingleProduct = () => {
    const {id} = useParams()
    const {title, company, description, featured, category, image, price, shipping, colors} = productsData[id - 1].attributes
    
    return (
        <div className={`w-[80%] mx-auto pt-[5rem] min-h-[100dvh]`}>
            
            <section className="flex items-center gap-[1rem]">
                <NavLink to={"/"}>Home</NavLink>
                <FontAwesomeIcon icon={faAngleRight} />
                <NavLink to={"/products"}>Products</NavLink>
            </section>
            
            <section className="mt-[1.5rem] grid grid-cols-1 gap-[3rem] lg:grid-cols-[_50%_50%] border">
                <SingleProductImg image={image} title={title} />
                <div className="flex flex-col gap-y-5">
                    <SingleProductDescription title={title} company={company} price={price} description={description} />
                    <SingleProudctColors colors={colors} />
                    <SingleProductAmount  />
                </div>
            </section>
        </div>
    );
}

export default SingleProduct
