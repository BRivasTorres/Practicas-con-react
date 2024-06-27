import { useContext, useState } from 'react';
import ThemeContext from '../../../../context/ThemeContext';
import FilterContext from '../../../../context/FilterContext';

const SingleProductBuy = ({ price, title, color, amount, company }) => {
    const { theme } = useContext(ThemeContext);
    const { handleCartData, dataMap, setDataMap } = useContext(FilterContext);
    const [id, setId] = useState(0)
        
    const isInCart = (newItem) => {
        const key = newItem.title
        
        return dataMap.has(key)
    };
    
    //TODO update item if already exists in cartData

    const handleAddToBag = () => {
        const newItem = {
            price: price,
            title: title,
            company: company,
            color: color,
            amount: amount,
        };
        
        if(isInCart(newItem)) {
            console.log("alredy in cart")
        } else {
            setId(prevVal => prevVal + 1)
            setDataMap(prevMap => {
                const updateMap = new Map(prevMap)
                updateMap.set(newItem.title, newItem)
                return updateMap
            })
            handleCartData(id, newItem)
        }
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
