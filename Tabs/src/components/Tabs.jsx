import DataCard from "./DataCard";
import Names from "./Names";

const Tabs = () => {
	return (
		<div className="mx-auto flex gap-[2rem] p-[3rem] ">
			<Names />
			<DataCard />
		</div>
	);
};

export default Tabs;
