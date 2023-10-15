import data from "../mocks/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const DataCard = () => {
	return (
		<section className="flex flex-col gap-4">
			<div className="flex flex-col mb-6">
				<h2 className="text-[2.3rem]">{data[0].role}</h2>
				<span className="uppercase bg-[#CBD5E1] p-[.5rem] w-fit rounded ">
					{data[0].name}{" "}
				</span>
				<small className="capitalize text-[1rem]">{data[0].date}</small>
			</div>
			{data[0].description.map((desc, id) => {
				return (
					<div key={id} className="flex items-center gap-7">
						<i>
							<FontAwesomeIcon
								icon={faAnglesRight}
								className="text-[#14BEC4]"
							/>
						</i>
						<p>{desc}</p>
					</div>
				);
			})}
		</section>
	);
};

export default DataCard;
