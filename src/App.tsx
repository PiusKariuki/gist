import Login from "modules/Auth/components/Login";
import Register from "modules/Auth/components/Register";
import Preview from "modules/Home/components/Preview";
import Home from "modules/Home/views/Home";
import Product from "modules/Product/views/Product";
import Searching from "modules/Search/views/Searching";
import Shop from "modules/shop/Views/shop";
import React from "react";
import { Route, Routes } from "react-router-dom";



const App: React.FC = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route path="/" element={<Preview />} />
				<Route path="/searching" element={<Searching />} />
				<Route path="/product/:productId" element={<Product />} />
				<Route path="/shop/:shopId" element={<Shop />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
};

export default App;
