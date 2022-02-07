import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const CreateShop: React.FC = (): JSX.Element => {

	return (
		<div className="flex flex-col overflow-x-clip">
			<Navbar />
         <Outlet />
		</div>
	);
};

export default CreateShop;
