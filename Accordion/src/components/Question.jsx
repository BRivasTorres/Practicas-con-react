import data from "../mocks//data";

const Question = () => {
	return (
		<div className="p-[2rem] h-[100%]  flex flex-col justify-between">
			<h2 className="text-center text-[3rem] font-semibold ">
				Questions
			</h2>
			{data.map((element) => {
				return (
					<div
						key={element.id}
						className=" p-[1rem] shadow-lg mb-8 rounded-[10px]"
					>
						<div>
							<h3 className="text-[1.3rem]">{element.title}</h3>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Question;
