import { useContext } from 'react';
import ThemeContext from '../../../../context/ThemeContext';
import useLocalStorage from '../../../../hooks/useLocalStorage';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProductBuy = ({ price, title, color, amount, company, image, isShippingFree }) => {
    const { theme } = useContext(ThemeContext);
    const {setItem} = useLocalStorage("cart products")
    
    const handleAddToBag = () => {    
        const newItem = {
			price: price,
			title: title,
			company: company,
			color: color,
			amount: amount,
			image: image,
			isShippingFree: isShippingFree,
		};
        
        setItem(title, newItem)
    };
    
    const notify = () => {
        toast.success('Item added to cart', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    
    const callEvents = () => {
        handleAddToBag()
        notify()
    }
    return (
        <div>
            <button
                className={`${
                    theme === "dark"
                        ? "bg-[#BF95F9] text-bg-main-dark"
                        : "bg-[#463AA1] text-white"
                } px-5 py-3 rounded-lg hover:opacity-85 transition duration-200 ease-linear`}
                onClick={() => callEvents()}
            >
				Add to bag
            </button>
        </div>
    );
};

export default SingleProductBuy
