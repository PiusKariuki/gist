import React from "react";
import Login from "../components/Login";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Register from "../components/Register";
import Landing from "modules/Landing/views/Landing";
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
		return <Navigate to="/dashboard" state={{ from: location }} replace />;

	return children;
};

const Auth = () => {
	// return (
		// <Routes>
		// 	<Route
		// 		index
		// 		element={
		// 			<AuthStatus>
		// 				<Landing />
		// 			</AuthStatus>
		// 		}
		// 	/>
		// 	<Route path="/auth/register" element={<Register />} />
		// 	<Route
		// 		path="/dashboard/*"
		// 		element={
		// 			<RequireAuth>
		// 				<Dashboard />
		// 			</RequireAuth>
		// 		}></Route>
		// </Routes>
	// );
};

export default Auth;
