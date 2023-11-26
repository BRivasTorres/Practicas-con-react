import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import { useState } from "react";

const Portal = () => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(!showModal);
	};

	const Modal = () => {
		return (
			<div className="portal-styles">
				<div className="bg-white flex items-center justify-center w-[600px] h-[300px] relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
					<h2 className="text-[2.5rem]">Modal Conent</h2>
					<button
						className="relative top-[-110px] right-[-130px] text-[2rem] "
						onClick={handleShowModal}
					>
						<FontAwesomeIcon
							icon={faX}
							className="text-[#842029]"
						/>
					</button>
				</div>
			</div>
		);
	};

	return (
		<div className="modal-styles">
			<button
				className="bg-[#49A6E9] px-[.8rem] py[.2rem] text-white rounded "
				onClick={handleShowModal}
			>
				Show Modal
			</button>

			{showModal &&
				createPortal(<Modal />, document.getElementById("portal"))}
		</div>
	);
};

export default Portal;
