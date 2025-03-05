import { TentTree } from "lucide-react";

const Logo = () => {
	return (
		<div className="flex gap-2 shrink-0 text-white font-semibold cursor-pointer">
			<TentTree />
			<p className="text-xl tracking-widest">AirDash</p>
		</div>
	);
};

export default Logo;
