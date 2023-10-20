import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSquareCaretRight,
	faSquareCaretLeft,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ handleClick, currItem }) => {
	return (
		<div className="flex items-center">
			<button
				className="text-[2.5rem] p-[1rem] text-[#64748B] hover:text-[#8B5CF6]"
				onClick={() => handleClick("prev")}
			>
				<FontAwesomeIcon icon={faSquareCaretLeft} />
			</button>
			<article className="w-[90%] mx-auto flex flex-col items-center p-[1.5rem]">
				<div className="flex flex-col items-center mb-[1.35rem] ">
					<img
						src={currItem.image}
						alt={currItem.name}
						className="w-[160px] h-[160px] rounded-[100%] mb-[1rem] shadow-img "
					/>
					<h2 className="text-[#8B5CF6] uppercase text-[1.5rem] ">
						{currItem.name}
					</h2>
					<span className="text-[#334155] capitalize text-[1.2rem]">
						{currItem.title}{" "}
					</span>
				</div>
				<p className="text-center text-[#334155] capitalize text-[1.2rem]">
					{currItem.quote}{" "}
				</p>
			</article>
			<button
				className="text-[2.5rem] p-[1rem] text-[#64748B] hover:text-[#8B5CF6]"
				onClick={() => handleClick("next")}
			>
				<FontAwesomeIcon icon={faSquareCaretRight} />
			</button>
		</div>
	);
};

export default Card;
