import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DataContext } from "./Tabs";

const DataCard = () => {
	const data = useContext(DataContext);

	return (
		<section className="flex flex-col gap-4">
			<div className="flex flex-col mb-4">
				<h2 className="text-[2.3rem]">{data.role}</h2>
				<span className="uppercase bg-[#CBD5E1] p-[.5rem] w-fit rounded my-[.5rem] ">
					{data.name}{" "}
				</span>
				<small className="capitalize text-[1rem]">{data.date}</small>
			</div>
			{data.description.map((desc, id) => {
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
