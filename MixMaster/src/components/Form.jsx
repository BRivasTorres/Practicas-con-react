import { useContext } from "react";
import DataContext from "../context/DataContext";

const Form = () => {
    
    const {handleSubmitChange, handleSubmitSearch, input} = useContext(DataContext)
    
  return (
    <div>
        <form
            className="grid grid-cols-[_1fr_100px]"
            onSubmit={handleSubmitSearch}
        >
            <input
                type="text"
                className="bg-[#F8FAFC] p-[.3rem] border border-[#E2E8F0] rounded-l-lg "
                value={input}
                onChange={handleSubmitChange}
            />
            <button type="submit" className="bg-greenCustom  rounded-r-lg">
                Serch
            </button>
        </form>
    </div>
  );
}

export default Form
