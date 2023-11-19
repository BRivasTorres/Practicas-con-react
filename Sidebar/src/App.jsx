import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="bg-[#F1F5F9] h-[100dvh] ">
			<Sidebar />
			<BrowserRouter>
				<Routes>
					<Route />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
