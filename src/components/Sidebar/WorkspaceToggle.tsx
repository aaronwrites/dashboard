import { cn } from "@/lib/utils";
import { ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";

const WorkspaceToggle = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="border-b border-stone-300 relative mt-4 mb-6 pb-4">
			<button
				className="flex p-1.5 gap-2.5 items-center border border-gray-700 w-full rounded-lg hover:bg-[#191F2E] cursor-pointer"
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
			<div
				className={cn(
					"absolute top-[90%] left-0 w-full rounded-lg bg-white text-black",
					"transition-all duration-300 ease-in-out origin-top",
					"overflow-hidden",
					isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
				)}
			>
				{isOpen && (
					<div className="p-2 space-y-1">
						<button className="flex items-center gap-2 p-1 cursor-pointer rounded-lg hover:bg-gray-200 w-full">
							<img
								src="/avatar.png"
								alt="avatar"
								className="size-10 shrink-0 rounded-md"
							/>
							<div className="text-start">
								<p className="text-sm text-black font-semibold">AirDash</p>
							</div>
						</button>
						<button className="flex items-center gap-2 p-1 cursor-pointer rounded-lg hover:bg-gray-300 w-full">
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
		</div>
	);
};

export default WorkspaceToggle;
