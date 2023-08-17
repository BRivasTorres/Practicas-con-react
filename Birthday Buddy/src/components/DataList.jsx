import ButtonClear from "./ButtonClear";

const DataList = ({ data }) => {
	return (
		<div className="p-[2rem] bg-[#FFFFFF] rounded-[1rem] ">
			<h2 className="text-[3rem]  mb-8">5 Birthdays today</h2>
			{data.map((item) => (
				<div key={item.id} className=" flex gap-[2rem] mb-[30px]">
					<div>
						<img
							src={item.image}
							alt={item.name}
							className="rounded-[50%] w-[75px] h-[75px] "
						/>
					</div>
					<div>
						<h3 className="text-[2rem] font-[500] ">{item.name}</h3>
						<h5>{item.age} years</h5>
					</div>
				</div>
			))}
			<ButtonClear />
		</div>
	);
};

export default DataList;
