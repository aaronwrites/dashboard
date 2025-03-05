import { Bell, Search } from "lucide-react";

const Navbar = () => {
	return (
		<nav className="w-16">
			<Search />
			<Bell />
			<img src="/avatar.jpg" alt="avatar" />
		</nav>
	);
};

export default Navbar;
