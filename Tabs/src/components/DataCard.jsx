import data from "../mocks/data";

const DataCard = () => {
	return (
		<div>
			{data.map((card, id) => {
				return (
					<section key={id}>
						<div>
							<h2>{card.role}</h2>
							<h3>{card.name} </h3>
							<small>{card.date}</small>
						</div>
						<div>
							{card.description.map((cardDesc, id) => {
								return <i key={id}>{cardDesc}</i>;
							})}
						</div>
					</section>
				);
			})}
		</div>
	);
};

export default DataCard;
