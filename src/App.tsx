import Login from "modules/Auth/components/Login";
import Register from "modules/Auth/components/Register";
import Home from "modules/Home/views/Home";
import Product from "modules/Product/views/Product";
import React from "react";
import { Route, Routes } from "react-router-dom";



const App: React.FC = (): JSX.Element => {
	return (
			<Routes>
				<Route  path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
            <Route path="/product/:productId" element={<Product/>} />
			</Routes>

	);
};

export default App;
