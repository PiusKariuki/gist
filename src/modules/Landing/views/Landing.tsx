import Auth from "modules/Auth/Views/Auth";
import Products from "modules/Product/views/Product";
import ShopDetails from "modules/Shops/Views/ShopDetails";
import Shops from "modules/Shops/Views/Shops";
import React from "react";
import { Route, Routes,useLocation,Navigate } from "react-router-dom";
import Topbar from "shared/components/Topbar";
import { user } from "shared/store/Store";
import { useRecoilValue } from "recoil";
import Login from "modules/Auth/components/Login";
import Register from "modules/Auth/components/Register";


const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const userObj = useRecoilValue<any>(user);
	let location = useLocation();
	if (userObj.token.length < 1)
		return <Navigate to="/" state={{ from: location }} replace />;

	return children;
};

const AuthStatus: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const userObj = useRecoilValue<any>(user);
	let location = useLocation();
	if (userObj.token.length > 1)
		return <Navigate to="/" state={{ from: location }} replace />;

	return children;
};



const Dashboard: React.FC = (): JSX.Element => {
	return (
		<div className="flex flex-col overflow-x-clip">
			{/* <Topbar />
			<Navbar />
			<Routes>
            <Route index  element={<Products />}/>
            <Route path="/shops" element={<Shops />} />
            <Route path="/shops/:shopId" element={<ShopDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
         </Routes> */}
		</div>
	);
};

export default Dashboard;
