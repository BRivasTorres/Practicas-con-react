import Tours from "./components/Tours";
import { ToursProvider } from "./components/ToursContext";

function App() {
	return (
		<ToursProvider>
			<div className="bg-[#F8FAFC] w-[100%]">
				<Tours />
			</div>
		</ToursProvider>
	);
}

export default App;
