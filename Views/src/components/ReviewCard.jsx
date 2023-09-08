import data from "../mocks/data";

const ReviewCard = () => {
	return (
		<div>
			{data.map((item) => {
				return (
					<div key={item.id}>
						<img src={item.image} alt="" />
						<h2>{item.name}</h2>
						<h3>{item.job} </h3>
						<p>{item.text}</p>
					</div>
				);
			})}{" "}
		</div>
	);
};

export default ReviewCard;
