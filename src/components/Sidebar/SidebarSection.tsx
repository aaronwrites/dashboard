import { ReactNode } from "react";

type SidebarSectionProps = {
	title: string;
	children: ReactNode;
};

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
	return (
		<div className="space-y-2">
			<p className="text-sm">{title}</p>
			{children}
		</div>
	);
};

export default SidebarSection;
