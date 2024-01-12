import { useContext, useState } from "react"
import APIContext from "../contexts/APIContext"

const Form = () => {
    const [input, setInput] = useState("")
    const {setQuery, handleRequest} = useContext(APIContext)
    
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(input)
        handleRequest()
    }
    
  return (
		<form onSubmit={handleSubmit} className="w-[45%] grid grid-cols-[_1fr_100px] max-w-[600px] mt-[1rem] ">
			<input
				type="text"
				placeholder="cat"
				className="border-[1px] border-[#CBD5E1] px-[1rem] py-[.2rem] bg-transparent text-white "
                value={input}
                onChange={handleInput}
			/>
			<button type="submit" className="bg-[#645CFF] hover:bg-[#A29DFF] text-white ">Search</button>
		</form>
  );
}

export default Form
