import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { user } from "shared/store/Store";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";

export const RequireAuth: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const { token } = useRecoilValue<any>(user);
   
	let location = useLocation();
	if (token?.length < 1 || token === undefined) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};

export const AuthStatus: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const userObj = useRecoilValue<any>(user);
	let location = useLocation();
	if (userObj?.token?.length > 1) {
		Swal.fire({
			icon: "info",
			title: "you are logged in😁",
			timer: 1500,
		});
		return <Navigate to="/" state={{ from: location }} replace />;
	}

	return children;
};
