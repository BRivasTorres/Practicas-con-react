import { useState } from "react"

const Form = () => {
    const [input, setInput] = useState()
    const [submit, setSubmit] = useState();
    
  return (
		<form action="" className="w-[45%] grid grid-cols-[_1fr_100px] max-w-[600px] mt-[1rem] ">
			<input
				type="text"
				placeholder="cat"
				className="border-[1px] border-[#CBD5E1] px-[1rem] py-[.2rem] bg-transparent text-white "
			/>
			<button className="bg-[#645CFF] hover:bg-[#A29DFF] text-white ">Search</button>
		</form>
  );
}

export default Form
