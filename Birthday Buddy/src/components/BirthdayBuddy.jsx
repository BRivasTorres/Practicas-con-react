import data from "../mocks/data";
import DataList from "./DataList";

const BirthdayBuddy = () => {
	return (
		<div className="w-[40%] mx-auto my-0 p-[2rem]">
			<DataList data={data} />
		</div>
	);
};

export default BirthdayBuddy;
