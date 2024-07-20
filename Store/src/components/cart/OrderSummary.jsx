import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const OrderSummary = ({ cartArray }) => {
    const { theme } = useContext(ThemeContext);

    const InfoRow = ({ label, value }) => (
        <p className="flex justify-between">
            <span>{label}</span>
            <span>{value}</span>
        </p>
    );
    
    const shippingCost = cartArray.some((item) => item.shipping === true);
    const subtotalPrice = cartArray
        .map((item) => parseFloat(item.price))
        .reduce((acc, el) => acc + el, 0);

    const totalTax = ((subtotalPrice) * (10 / 100)).toFixed(2)
        
    return (
        <div
            className={`${
                theme === "dark"
                    ? "bg-main-dark text-white"
                    : "bg-bg-light text-black"
            }  mx-[3rem] my-[1.5rem] p-[2rem] rounded-[10px] capitalize `}
        >
            <InfoRow label="subtotal :" value={subtotalPrice} />
            <InfoRow label="shipping" value={shippingCost ? "$5.00" : "0.00"} />
            <InfoRow label="tax" value={totalTax} />
            <InfoRow label="order total" value="order total" />
        </div>
    );
};

export default OrderSummary;
