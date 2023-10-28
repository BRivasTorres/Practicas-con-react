import { useState } from "react";

const Form = () => {
	const [colorGenerator, setcolorGenerator] = useState();
	const [text, setText] = useState();

	return (
		<form>
			<h2>Color Generator</h2>
			<input type="color" />
			<input type="text" />
			<button>Submit</button>
		</form>
	);
};

export default Form;
