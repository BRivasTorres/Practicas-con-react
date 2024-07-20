import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const CartItems = ({cartArray, removeItem}) => {    
    const { theme } = useContext(ThemeContext);
    
    return (
        <div>
            {cartArray.map((item) => {
                return (
                    <section
                        key={item.title}
                        className="grid sm:grid-cols-4 gap-x-3"
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
                            <h5 className="text-[#C7C9D1]">{item.company}</h5>
                            <h5>
								Color :{" "}
                                <div
                                    className="w-3 h-3 inline-block rounded-2xl"
                                    style={{
                                        background: item.color,
                                    }}
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
                            <h4 className="font-semibold">${item.price}</h4>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default CartItems
