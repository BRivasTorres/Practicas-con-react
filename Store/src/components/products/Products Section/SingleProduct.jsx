import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink, useParams } from "react-router-dom"
import productsData from "../../../mocks/ProductsData"
import { useContext } from "react"
import ThemeContext from "../../../context/ThemeContext"

const SingleProduct = () => {
    const {id} = useParams()
    const {theme} = useContext(ThemeContext)
    const {title, company, description, featured, category, image, price, shipping, colors} = productsData[id].attributes
    
    return (
        <div className={`w-[80%] mx-auto pt-[5rem] min-h-[100dvh] `}>
            <section className="flex items-center gap-[1rem]">
                <NavLink to={"/"}>Home</NavLink>
                <FontAwesomeIcon icon={faAngleRight} />
                <NavLink to={"/products"}>Products</NavLink>
            </section>
            <section className="mt-[1.5rem] grid grid-cols-1 gap-[3rem] lg:grid-cols-[_50%_50%] border">
                <div>
                    <img src={image} alt={title} className="rounded-[2rem]" />
                </div>
                <div className="flex flex-col gap-y-4">
                    <h2 className="font-bold capitalize text-[1rem] sm:text-[2.5rem] ">
                        {title}
                    </h2>
                    <h4
                        className={`${
                            theme === "dark" ? "text-white" : "text-[#C7C9D1]"
                        } text-[1rem] sm:text-[2rem] font-semibold`}
                    >
                        {company}
                    </h4>
                    <h4 className="text-[1.4rem]">${price}</h4>
                    <p className="w-[90%]">{description}</p>
                    <div>
                        <h2>colors</h2>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SingleProduct
