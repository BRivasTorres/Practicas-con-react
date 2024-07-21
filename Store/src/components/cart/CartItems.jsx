import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItems = ({cartArray, removeItem}) => {    
    const { theme } = useContext(ThemeContext);
    
    const notify = () => {
        toast.error("Item deleted from cart", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    
    const callEvents = (key) => {
        notify()
        removeItem(key)
    };
    
    return (
        <div className="flex flex-col gap-3">
            {cartArray.map((item, idx) => {
                return (
                    <section key={item.title}>
                        <div className="grid sm:grid-cols-4 gap-x-3">
                            <div>
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
                                            ? "text-[#FF7AC6]"
                                            : "text-[#057AFF]"
                                    }
                                    onClick={() => callEvents(item.title)}
                                >
									remove
                                </button>
                            </div>

                            <div>
                                <h4 className="font-semibold">${item.price}</h4>
                            </div>
                        </div>
                        <div className="w-[90%] ">
                            {idx < cartArray.length - 1 && (
                                <div className="h-[1px] bg-[#E2E8F4] my-[2.5rem] "></div>
                            )}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default CartItems
