import Login from "modules/Auth/components/Login";
import Register from "modules/Auth/components/Register";
import Home from "modules/Home/views/Home";
import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";


const App: React.FC = (): JSX.Element => {
	return (
		<>
			<Routes>
				{/* <Route path="/*" element={<Landing/>} /> */}
				<Route path="/*" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	);
};

export default App;
