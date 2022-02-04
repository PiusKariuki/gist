
import React from "react";
import { useLocation,Navigate } from "react-router-dom";
import { user } from "shared/store/Store";
import { useRecoilValue } from "recoil";



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
