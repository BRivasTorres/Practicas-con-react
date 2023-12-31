import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Documents from "./pages/Documents";
import Calendar from "./pages/Calendar";
import Errro404 from "./pages/Errro404";

function App() {
	return (
		<div className="bg-[#F1F5F9] h-[100dvh]">
			<BrowserRouter>
				<Sidebar />
				<Routes>
					<Route path="/home" element={Home} />
					<Route path="/team" element={Team} />
					<Route path="/projects" element={Projects} />
					<Route path="/documents" element={Documents} />
					<Route path="/calendar" element={Calendar} />
					<Route path="*" element={Errro404} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
