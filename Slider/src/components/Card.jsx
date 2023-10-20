import data from "../mocks/data";

const Card = () => {
	return (
		<div>
			{data.map((item) => {
				return (
					<div key={item.id}>
						<article>
							<img src={item.image} alt={item.name} />
							<h2>{item.name}</h2>
							<span>{item.title} </span>
						</article>
						<p>{item.quote} </p>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
