import Products from "modules/Products/views/Products";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "shared/components/Navbar";
import Topbar from "shared/components/Topbar";

const Dashboard: React.FC = (): JSX.Element => {
	return (
		<div className="flex flex-col overflow-x-clip">
			<Topbar />
			<Navbar />
			<Routes>
            <Route index  element={<Products />}/>
         </Routes>
		</div>
	);
};

export default Dashboard;
