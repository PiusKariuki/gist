import React from "react";
import Topbar from "shared/components/Topbar";

const Dashboard: React.FC = (): JSX.Element => {
	return (
		<div className="flex flex-col">
			<Topbar />
		</div>
	);
};

export default Dashboard;
