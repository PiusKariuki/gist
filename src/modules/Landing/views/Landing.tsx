import Products from "modules/Products/views/Products";
import ShopDetails from "modules/Shops/Views/ShopDetails";
import Shops from "modules/Shops/Views/Shops";
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
            <Route path="/shops" element={<Shops />} />
            <Route path="shops/:shopId" element={<ShopDetails />} />
         </Routes>
		</div>
	);
};

export default Dashboard;
