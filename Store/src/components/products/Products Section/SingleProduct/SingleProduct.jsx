import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import SingleProductDescription from "./SingleProductDescription"
import SingleProductColors from "./SingleProductColors"
import SingleProductAmount from "./SingleProductAmount"
import SingleProductImg from "./SingleProductImg"
import SingleProductBuy from "./SingleProductBuy"
import { useEffect, useState } from "react"


const SingleProduct = ({data}) => {
    const {title, company, description, image, price, colors, shipping} = data
    const [selectedColor, setSelectedColor] = useState();
    const [selectedAmount, setSelectedAmount] = useState(1)
    
    useEffect(() => {
        if (colors && colors.length > 0) {
            setSelectedColor(colors[0]);
        }
    }, [colors]);
    
    const handleSelectedColor = (color) => {
        setSelectedColor(color)
    }
    
    const handleSelectedAmount = (amount) => {
        setSelectedAmount(amount)
    }
    
    return (
        <div className={`w-[80%] mx-auto pt-[5rem] min-h-[100dvh]`}>
            <section className="flex items-center gap-[1rem]">
                <NavLink to={"/"} className="hover:underline">
					Home
                </NavLink>
                <FontAwesomeIcon icon={faAngleRight} />
                <NavLink to={"/products"} className="hover:underline">
					Products
                </NavLink>
            </section>

            <section className="mt-[1.5rem] grid grid-cols-1 gap-[3rem] lg:grid-cols-2">
                <SingleProductImg image={image} title={title} />
                <div className="flex flex-col gap-y-5">
                    <SingleProductDescription
                        title={title}
                        company={company}
                        price={price}
                        description={description}
                    />
                    <SingleProductColors
                        colors={colors}
                        handleSelectedColor={handleSelectedColor}
                        selectedColor={selectedColor}
                    />
                    <SingleProductAmount
                        handleSelectedAmount={handleSelectedAmount}
                    />
                    <SingleProductBuy
                        price={price}
                        title={title}
                        company={company}
                        color={selectedColor}
                        amount={selectedAmount}
                        image={image}
                        shipping={shipping}
                    />
                </div>
            </section>
        </div>
    );
}

export default SingleProduct
