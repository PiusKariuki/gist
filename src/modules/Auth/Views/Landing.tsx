import React from "react";
import Login from "../components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "../components/Register";

const Landing: React.FC = (): JSX.Element => {
	return (
		<Routes>
			<Route index element={<Login />} />
			<Route path="/auth/register" element={<Register />} />
		</Routes>
	);
};

export default Landing;
