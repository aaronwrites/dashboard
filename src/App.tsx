import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<main className="min-h-screen grid gap-4 grid-cols-[250px_1fr]">
			<Sidebar />
			<Dashboard />
		</main>
	);
}

export default App;
