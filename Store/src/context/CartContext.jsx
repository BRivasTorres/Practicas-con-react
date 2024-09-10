import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [selectedAmount, setSelectedAmount] = useState(1);
    
    const handleSelectedAmount = (amount) => {
		setSelectedAmount(amount);
	};
    
    const value = {selectedAmount, handleSelectedAmount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export { CartProvider };
export default CartContext