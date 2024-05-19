import { useContext } from "react";
import ThemeContext from "../../../../context/ThemeContext";

const SingleProductDescription = ({title, company, price, description}) => {
    
    const {theme} = useContext(ThemeContext)
    
    return (
        <section>
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
            <h4 className="text-[1.4rem] my-3 ">${price}</h4>
            <p className="w-[90%] ">{description}</p>
        </section>
    );
}

export default SingleProductDescription
