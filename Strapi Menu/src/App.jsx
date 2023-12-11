import { BrowserRouter, Route, Routes } from "react-router-dom";
import Strapi from "./components/Strapi";
import Productos from "./pages/Productos";
import Solutions from "./pages/Solutions";
import Resourses from "./pages/Resourses";

function App() {
  return (
		<div className="w-[100%] h-[100svh] bg-[#6366F1] ">
			<BrowserRouter >
			<Strapi />
				<Routes>
					<Route path="#" element={<Productos />} />
					<Route path="#" element={<Solutions />} />
					<Route path="#" element={<Resourses />} />
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App
