import Sidebar from "@/components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<main className="min-h-screen grid gap-4 grid-cols-[250px_1fr] font-poppins">
			<Sidebar />
			<Outlet />
		</main>
	);
};

export default AppLayout;
