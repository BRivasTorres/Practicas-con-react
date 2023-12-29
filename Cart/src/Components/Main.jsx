import data from "../mocks/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Main = () => {
	const [amount, setAmount] = useState([
		{ name: "samsung", id: 1, amount: 1, price: 599.99 },
		{ name: "pixel", id: 2, amount: 1, price: 499.99 },
		{ name: "xiaomi", id: 3, amount: 1, price: 699.99 },
	]);
	
	const [total, setTotal] = useState(
		amount.reduce((acc, item) => acc + item.amount * item.price, 0)
	);
	
	const handlePlus = (id) => {
		setAmount((prev) =>
			prev.map((item) => {
				if (item.id === id) return { ...item, amount: item.amount + 1 };
				return item;
			})
		);
		setTotal(
			amount
				.reduce((acc, item) => acc + item.amount * item.price, 0)
				.toFixed(2)
		);
	};

	const handleMinus = (id) => {
		setAmount((prev) =>
			prev.map((item) => {
				if (item.id === id) return { ...item, amount: item.amount - 1 };
				return item;
			})
		);
		setTotal(
			amount
				.reduce((acc, item) => acc + item.amount * item.price, 0)
				.toFixed(2)
		);
	};
	
    return (
		<main className=" w-[55%] mx-auto">
			<h2 className="text-[3rem] text-center mt-[2.5rem] ">YOUR BAG</h2>
			{data.map((item) => {
				return (
					<div
						key={item.id}
						className="grid grid-cols-[auto_1fr_40px] mt-[2rem] capitalize"
					>
						<img
							src={item.img}
							alt="img"
							className="w-[80px] mx-[2.5rem] "
						/>

						<div className="flex flex-col justify-center ">
							<h4 className="font-bold text-[1.5rem] ">
								{item.title}
							</h4>
							<span className="text-[1rem] text-[#7C748B]">
								${item.price}
							</span>
							<button className="text-[#945CFF] w-[fit-content] ">
								remove
							</button>
						</div>

						<div className="flex flex-col items-center justify-center">
							<button onClick={() => handlePlus(item.id)}>
								<FontAwesomeIcon
									icon={faChevronUp}
									className="text-[#645CFF] hover:text-[#3c3799] text-[1.5rem]"
								/>
							</button>
							<span>{item.amount}</span>
							<button onClick={() => handleMinus(item.id)}>
								<FontAwesomeIcon
									icon={faChevronDown}
									className="text-[#645CFF] hover:text-[#3c3799] text-[1.5rem]"
								/>
							</button>
						</div>
					</div>
				);
			})}
			<section className="mt-[5rem]">
				<div className="w-[100%] h-[2px] bg-[#CBD5E1] "></div>
        
				<div className="flex justify-between text-[1.5rem] mt-[1.5rem] ">
					<span>Total</span>
					<span className="bg-[#645CFF] px-2 text-white rounded-[5px] ">
						${total}
					</span>
				</div>
        
				<button className="bg-[#C1BEFF] text-[#645CFF] px-[1rem] mt-[2rem] rounded-[5px] absolute left-[50%] translate-x-[-50%] ">
					Clear Cart
				</button>
			</section>
		</main>
	);
}

export default Main
