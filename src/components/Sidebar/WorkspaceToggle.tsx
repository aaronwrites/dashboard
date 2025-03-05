import { ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";

const WorkspaceToggle = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="border-b border-stone-300 relative mt-4 mb-6 pb-4">
			<button
				className="flex p-1.5 gap-2 items-center border border-gray-700 w-full rounded-lg hover:bg-[#191F2E] cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<img
					src="/avatar.png"
					alt="avatar"
					className="size-10 shrink-0 rounded-md"
				/>
				<div className="text-start">
					<p className="text-xs text-gray-400">Workspace</p>
					<p className="text-sm text-white font-semibold">AirDash</p>
				</div>
				<ChevronsUpDownIcon className="size-4 ml-auto" />
			</button>
			{isOpen && (
				<div className="absolute top-[90%] left-0 p-2 justify-center space-y-1 w-full rounded-lg bg-white text-black">
					<button className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-200 w-full">
						<img
							src="/avatar.png"
							alt="avatar"
							className="size-10 shrink-0 rounded-md"
						/>
						<div className="text-start">
							<p className="text-sm text-black font-semibold">AirDash</p>
						</div>
					</button>
					<button className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-300 w-full">
						<img
							src="/avatar.png"
							alt="avatar"
							className="size-10 shrink-0 rounded-md"
						/>
						<div className="text-start">
							<p className="text-sm text-black font-semibold">AirDash</p>
						</div>
					</button>
				</div>
			)}
		</div>
	);
};

export default WorkspaceToggle;
