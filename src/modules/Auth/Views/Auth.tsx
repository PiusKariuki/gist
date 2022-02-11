import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { user } from "shared/store/store";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const userObj = useRecoilValue<any>(user);
	let location = useLocation();
	if (userObj.token.length < 1) {
      Swal.fire({
				icon: "info",
				title: "Please login or register to view this page",
				showConfirmButton: false,
				timer: 1000,
			});
		return <Navigate to="/" state={{ from: location }} replace />;
	}

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
