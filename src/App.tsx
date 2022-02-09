import Login from "modules/Auth/components/Login";
import Register from "modules/Auth/components/Register";
import Preview from "modules/Home/components/Preview";
import Home from "modules/Home/views/Home";
import EditProfile from "modules/Manage/components/EditProfile";
import MyShops from "modules/Manage/components/MyShops";
import Manage from "modules/Manage/views/Manage";
import Orders from "modules/Orders/views/Orders";
import Product from "modules/Product/views/Product";
import Rooms from "modules/Rooms/views/Rooms";
import Searching from "modules/Search/views/Searching";
import MyShop from "modules/shop/Views/MyShop";
import Shop from "modules/shop/Views/shop";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "shared/RouteProtection/Protector";



const App: React.FC = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route path="/" element={<Preview />} />
				<Route path="/searching" element={<Searching />} />
				<Route path="/product/:productId" element={<Product />} />
				<Route path="/shop/:shopId" element={<Shop />} />
				<Route path="/rooms/:roomId" element={<Rooms />} />
				<Route
					path="/orders"
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
				<Route path="/myAccount" element={<EditProfile />} />
				<Route path="/myAccount/shops" element={<MyShops />} />
            <Route path="/myAccount/shops/:shopId" element={<MyShop />} />
			</Route>

			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
};

export default App;
