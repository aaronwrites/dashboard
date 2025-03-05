import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Dashboard />} />
					<Route path="/settings" element={<Settings />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
