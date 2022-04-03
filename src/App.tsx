import Login from "modules/Auth/components/Login";
import Register from "modules/Auth/components/Register";
import Preview from "modules/Home/components/Preview";
import Home from "modules/Home/views/Home";
import EditProfile from "modules/Manage/components/profile/EditProfile";
import MyShopsRoutes from "modules/Manage/routes/MyShopRoutes";
import Manage from "modules/Manage/views/Manage";
import MyOrders from "modules/Orders/views/MyOrders";
import Orders from "modules/Orders/routes/Orders";
import Product from "modules/Product/views/Product";
import Rooms from "modules/Rooms/views/Rooms";
import Searching from "modules/Search/views/Searching";
import Shop from "modules/shop/Views/shop";
import Wallet from "modules/Wallet/views/Wallet";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth, AuthStatus } from "shared/RouteProtection/Protector";

const App: React.FC = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route path="/" element={<Preview />} />
				<Route path="/searching" element={<Searching />} />
				<Route path="/wallet" element={<Wallet />} />
				<Route path="/product/:productId" element={<Product />} />
				<Route path="/shop/:shopId" element={<Shop />} />
				<Route path="/rooms/:roomId" element={<Rooms />} />
				<Route
					path="/orders/*"
					element={
						<RequireAuth>
							<Orders />
						</RequireAuth>
					}
				/>
			</Route>
			{/* seller routes */}
			<Route
				path="/myAccount"
				element={
					<RequireAuth>
						<Manage />
					</RequireAuth>
				}>
				<Route path="/myAccount/profile" element={<EditProfile />} />
				<Route path="/myAccount/shops/*" element={<MyShopsRoutes />} />
				<Route path="/myAccount/orders" element={<MyOrders />} />
			</Route>

			<Route
				path="/login"
				element={
					<AuthStatus>
						<Login />
					</AuthStatus>
				}
			/>
			<Route
				path="/register"
				element={
					<AuthStatus>
						<Register />
					</AuthStatus>
				}
			/>
		</Routes>
	);
};

export default App;
