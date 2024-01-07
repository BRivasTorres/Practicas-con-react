import { createContext, useState } from "react";
import {data} from "../mocks/data"
const DataContext = createContext(null)

const DataProvider = ({children}) => {
    const [amount, setAmount] = useState(data);

	const [total, setTotal] = useState(
		amount.reduce((acc, item) => acc + item.amount * item.price, 0)
	);
	
	const [products, setProducts] = useState(amount.length)

	const handlePlus = (id) => {
		const newTotal = amount.reduce((acc, item) => acc + item.amount * item.price, 0)
		setAmount((prev) =>
			prev.map((item) => {
				if (item.id === id) return { ...item, amount: item.amount + 1 };
				return item;
			})
		);
		setTotal(newTotal.toFixed(2));
		setProducts(prev => prev + 1)
	};

	const handleMinus = (id) => {
		const newTotal = amount.reduce((acc, item) => acc + item.amount * item.price, 0)
		setAmount((prev) =>
			prev
				.map((item) => {
					if (item.id === id && item.amount >= 1) {
						return { ...item, amount: item.amount - 1 };
					}
					return item;
				})
				.filter((el) => el.amount >= 1)
		);
		setTotal(newTotal.toFixed(2));
		setProducts(prev => prev - 1)
	};
    const value = {amount, total, handleMinus, handlePlus, products, setProducts}
    
    return <DataContext.Provider value={value} >{children}</DataContext.Provider>
}

export {DataProvider}
export default DataContext