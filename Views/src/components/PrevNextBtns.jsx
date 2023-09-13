import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PrevNextBtns = ({ handlePrev, handleNext }) => {
	return (
		<div className="mt-4 flex justify-center gap-[1rem] text-[#3C3799] ">
			<button onClick={handlePrev}>
				<FontAwesomeIcon icon={faChevronLeft} size="2xl" />
			</button>
			<button onClick={handleNext}>
				<FontAwesomeIcon icon={faChevronRight} size="2xl" />
			</button>
		</div>
	);
};

export default PrevNextBtns;
