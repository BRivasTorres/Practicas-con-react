import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "../hooks/DataContext";
const Main = () => {
	const [isEmpty, setIsEmpty] = useState(false)
	const {amount, total, handleMinus, handlePlus, setProducts} = useContext(DataContext)
	const handleIsEmpty = () => {
		setIsEmpty(!isEmpty)
		setProducts(0)
	}
	
    return (
		<main className=" w-[55%] mx-auto">
			<h2 className="text-[3rem] text-center mt-[2.5rem] ">YOUR BAG</h2>

			{isEmpty || amount.length === 0  ? (
				<h2 className="text-[1.8rem] text-center text-[#77748B] mt-[2.5rem] ">
					Is currently empty
				</h2>
			) : (
				<>
					{amount.map((item) => {
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
									<span>
										{
											amount.find(
												(el) => el.id === item.id
											)?.amount
										}
									</span>
									<button
										onClick={() => handleMinus(item.id)}
									>
										<FontAwesomeIcon
											icon={faChevronDown}
											className="text-[#645CFF] hover:text-[#3c3799] text-[1.5rem]"
										/>
									</button>
								</div>
							</div>
						);
					})}
					<section className="my-[5rem]">
						<div className="w-[100%] h-[2px] bg-[#CBD5E1] "></div>

						<div className="flex justify-between text-[1.5rem] mt-[1.5rem] ">
							<span>Total</span>
							<span className="bg-[#645CFF] px-2 text-white rounded-[5px] ">
								${total}
							</span>
						</div>
						<button
							className="bg-[#C1BEFF] text-[#645CFF] px-[1rem] mt-[2rem] rounded-[5px] absolute left-[50%] translate-x-[-50%]"
							onClick={() => handleIsEmpty()}
						>
							Clear Cart
						</button>
					</section>
				</>
			)}
		</main>
	);
}

export default Main
