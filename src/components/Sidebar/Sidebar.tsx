import { GitGraph, Home } from "lucide-react";
import Logo from "../ui/Logo";
import SidebarItem from "./SidebarItem";
import WorkspaceToggle from "./WorkspaceToggle";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
	return (
		<div className="bg-sidebar text-sidebar-foreground p-4 sticky top-4 overflow-y-scroll">
			<Logo />
			<WorkspaceToggle />
			<SidebarSection title="Dashboards">
				<SidebarItem icon={<Home className="size-5" />} text={"Overview"} />
				<SidebarItem
					icon={<GitGraph className="size-5" />}
					text={"Analytics"}
				/>
			</SidebarSection>
		</div>
	);
};

export default Sidebar;
