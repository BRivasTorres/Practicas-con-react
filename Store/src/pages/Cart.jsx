import ThemeContext from "../context/ThemeContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect } from "react";

const Cart = () => {    
    const {map, removeItem} = useLocalStorage("cart products")
    const {theme} = useContext(ThemeContext)
    
    const cartArray = Array.from(map.values())
    
    return (
        <div
            className={`${
                theme === "dark"
                    ? "bg-main-dark text-white"
                    : "bg-white text-black"
            } min-h-dvh px-[2rem] `}
        >
            <section className="max-w-[1200px] mx-auto pt-[5rem] border border-red-700">
                {map.size <= 0 ? (
                    <h2>Your cart is empty</h2>
                ) : (
                    <h2>Shopping Cart</h2>
                )}

                {cartArray.map((item) => {
                    return (
                        <section
                            key={item.title}
                            className="grid sm:grid-cols-4"
                        >
                            <div className="">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[150px] h-[150px] rounded-[15px] "
                                />
                            </div>

                            <div>
                                <h4 className="capitalize font-semibold ">
                                    {item.title}
                                </h4>
                                <h5 className="text-[#C7C9D1]">
                                    {item.company}
                                </h5>
                                <h5>
									Color :{" "}
                                    <div
                                        className="w-3 h-3 inline-block rounded-2xl"
                                        style={{ background: item.color }}
                                    ></div>
                                </h5>
                            </div>

                            <div>
                                <h3 className="capitalize">amount</h3>
                                <h1>select</h1>
                                <button
                                    className={
                                        theme === "dark"
                                            ? "text-[#FF7AC6] "
                                            : "text-[#057AFF]"
                                    }
                                    onClick={() => removeItem(item.title)}
                                >
									remove
                                </button>
                            </div>

                            <div>
                                <h4>{item.price}</h4>
                            </div>
                        </section>
                    );
                })}
            </section>
        </div>
    );
}

export default Cart
