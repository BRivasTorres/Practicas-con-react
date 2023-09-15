import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const BtmExpandReduce = ({ handleExpand, handleIcon }) => {
	return (
		<div>
			<button onClick={handleExpand}>
				<FontAwesomeIcon
					icon={handleIcon ? faPlus : faMinus}
					size="xl"
					className="bg-[#164E63] rounded-[100%] p-[.3rem] text-[#C9D6DB] "
				/>
			</button>
		</div>
	);
};

export default BtmExpandReduce;
