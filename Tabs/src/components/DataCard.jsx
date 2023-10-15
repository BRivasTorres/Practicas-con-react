import data from "../mocks/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const DataCard = () => {
	return (
		<div>
			{data.map((card, id) => {
				return (
					<section key={id} className="">
						<div>
							<h2>{card.role}</h2>
							<h3>{card.name} </h3>
							<small>{card.date}</small>
						</div>
						<div className="flex flex-col ">
							{card.description.map((cardDesc, id) => {
								return (
									<i key={id} className="">
										<FontAwesomeIcon icon={faAnglesRight} />
										{cardDesc}
									</i>
								);
							})}
						</div>
					</section>
				);
			})}
		</div>
	);
};

export default DataCard;
