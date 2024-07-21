import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const OrderSummary = ({ cartArray }) => {
    const { theme } = useContext(ThemeContext);

    const InfoRow = ({ label, value }) => (
        <>
            <p className="flex justify-between">
                <span>{label} : </span>
                <span>${value}</span>
            </p>
        </>
    );
    
    const shippingCost = cartArray.some((item) => item.shipping === true);
    const subtotalPrice = cartArray
        .map((item) => parseFloat(item.price))
        .reduce((acc, el) => acc + el, 0);

    const tax = ((subtotalPrice) * (9 / 100)).toFixed(2)
    const total = subtotalPrice + parseInt(tax);
    
    return (
		<div
			className={`${
				theme === "dark"
					? "bg-main-dark text-white"
					: "bg-bg-light text-black"
			} p-[1.5rem] rounded-[10px] capitalize  `}
		>
			<InfoRow label="subtotal" value={subtotalPrice} />
			<div className="h-[1px] bg-[#E2E8F4] my-2 "></div>
			<InfoRow label="shipping" value={shippingCost ? "5.00" : "0.00"} />
			<div className="h-[1px] bg-[#E2E8F4] my-2 "></div>
			<InfoRow label="tax" value={tax} />
			<div className="h-[1px] bg-[#E2E8F4] my-2 mb-[30px] "></div>
			<InfoRow label="order total" value={total} />
		</div>
	);
};

export default OrderSummary;
