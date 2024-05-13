import { useContext } from "react";
import productsData from "../../mocks/ProductsData";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
    const {theme} = useContext(ThemeContext)
    
    return (
        <div>
            <section className="featured-products ">
                {productsData.map((item) => {
                    return item.attributes.featured === true ? (
                        <Link
                            key={item.id}
                            className="shadow-xl hover:shadow-2xl transition duration-300 rounded-[15px] p-[2rem]"
                            to={`/products/${item.id}`}
                        >
                            <div>
                                <img
                                    src={item.attributes.image}
                                    alt={item.attributes.title}
                                    className="h-[300px] w-[100%] rounded-[15px]"
                                />
                            </div>
                            <div className="flex flex-col items-center mt-[2rem] ">
                                <h2 className="capitalize font-semibold text-[1.5rem]">
                                    {item.attributes.title}
                                </h2>
                                <span
                                    className={`${
                                        theme === "dark"
                                            ? "text-[#BF87C6]"
                                            : "text-main-dark"
                                    }`}
                                >
									${item.attributes.price}
                                </span>
                            </div>
                        </Link>
                    ) : null;
                })}
            </section>
        </div>
    );
};

export default FeaturedProducts;
