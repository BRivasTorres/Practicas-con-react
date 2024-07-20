import { useContext, useState } from 'react';
import ThemeContext from '../../../../context/ThemeContext';
import useLocalStorage from '../../../../hooks/useLocalStorage';

const SingleProductBuy = ({ price, title, color, amount, company, image, shipping }) => {
    const { theme } = useContext(ThemeContext);
    const {getItem, hasItem, removeItem, setItem} = useLocalStorage("cart products")
    
    const handleAddToBag = () => {    
        const newItem = {
            price: price,
            title: title,
            company: company,
            color: color,
            amount: amount,
            image: image,
            shipping: shipping
        };
        
        setItem(title, newItem)
    };

    return (
        <div>
            <button
                className={`${
                    theme === "dark"
                        ? "bg-[#BF95F9] text-bg-main-dark"
                        : "bg-[#463AA1] text-white"
                } px-5 py-3 rounded-lg hover:opacity-85 transition duration-200 ease-linear`}
                onClick={() => handleAddToBag()}
            >
				Add to bag
            </button>
        </div>
    );
};

export default SingleProductBuy
