import { useState } from "react";
import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


const FormNewsletter = () => {
    const [submitBtn, setSubmitBtn] = useState("Submit")
    const [isFormSubmited, setIsFormSubmited] = useState(false)
    const [inputs, setInputs] = useState({
        name : "",
        lastName: "",
        email: "test@example.com"
    })
    
    const handleInputChange = (e) => {
		const { name, value } = e.target;
		setInputs((prevValues) => ({ ...prevValues, [name]: value }));
	};
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitBtn("Submitting")
        setIsFormSubmited(true)
    }
     
    const notify = () => {
		toast.success("Suscribed", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};
    
    if (isFormSubmited) {
        notify()
		return <Navigate to="/" replace />;
	}
    
  return (
		<>
			<form
				className="h-fit bg-white flex flex-col w-[30%] p-[2rem] shadow-lg rounded-md"
				onSubmit={handleSubmit}
			>
				<h2 className="text-center text-[2.5rem] ">Our newsletter</h2>
				<label htmlFor="name" className="mt-[1rem]">
					Name
				</label>
				<input
					required
					type="text"
					id="name"
					name="name"
					value={inputs.name}
					onChange={handleInputChange}
					className="bg-[#F8FAFC] px-[.8rem] py-[.4rem] border border-[#E2E8F0] rounded-l-lg "
				/>
				<label htmlFor="last-name" className="mt-[1rem]">
					Last Name
				</label>
				<input
					required
					type="text"
					name="lastName"
					id="lastName"
					value={inputs.lastName}
					onChange={handleInputChange}
					className="bg-[#F8FAFC] px-[.8rem] py-[.4rem] border border-[#E2E8F0] rounded-l-lg "
				/>
				<label htmlFor="email" className="mt-[1rem]">
					Email
				</label>
				<input
					required
					type="text"
					name="email"
					id="email"
					value={inputs.email}
					onChange={handleInputChange}
					className="bg-[#F8FAFC] px-[.8rem] py-[.4rem] border border-[#E2E8F0] rounded-l-lg "
				/>
				<button
					type="submit"
					className="bg-greenCustom px-[1rem] py-[.5rem] text-white rounded-md mt-[2rem] "
				>
					{submitBtn}
				</button>
			</form>
		</>
  );
}

export default FormNewsletter
