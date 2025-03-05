import { ReactNode } from "react";

type SidebarItemProps = {
	icon: ReactNode;
	text: string;
};

const SidebarItem = ({ icon, text }: SidebarItemProps) => {
	return (
		<div
			className={`flex gap-2.5 items-center text-sm rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-4 py-2`}
		>
			{icon}
			<p className="text-sm">{text}</p>
		</div>
	);
};

export default SidebarItem;
