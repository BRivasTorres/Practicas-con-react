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
    
    const isShippingCharged = cartArray.some(item => item.isShippingFree === false)
    const shippingCost = isShippingCharged ? "5.00" : "0.00"
    const subtotalPrice = cartArray
		.map((item) => parseFloat(item.price) * item.amount)
		.reduce((acc, el) => acc + el, 0);

    const tax = ((subtotalPrice) * (10 / 100))
    const total = subtotalPrice + tax + parseInt(shippingCost);
    
    return (
        <div
            className={`${
                theme === "dark"
                    ? "bg-main-dark text-white"
                    : "bg-bg-light text-black"
            } p-[1.5rem] rounded-[10px] capitalize`}
        >
            <InfoRow label="subtotal" value={subtotalPrice.toFixed(2)} />
            <div className="h-[1px] bg-[#E2E8F4] my-2 "></div>
            <InfoRow label="shipping" value={shippingCost} />
            <div className="h-[1px] bg-[#E2E8F4] my-2 "></div>
            <InfoRow label="tax" value={tax.toFixed(2)} />
            <div className="h-[1px] bg-[#E2E8F4] my-2 mb-[30px] "></div>
            <InfoRow label="order total" value={total.toFixed(2)} />
        </div>
    );
};

export default OrderSummary;
