import axios from "axios";
import React from "react";
import { useRecoilValue } from "recoil";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";
import { baseUrl } from "./Http";

const useRequest = () => {
	const userObj = useRecoilValue<any>(user);
	const tkn = userObj?.token;

	const Axios = axios.create({
		baseURL: baseUrl,
	});

	Axios.interceptors.request.use((request: any) => {
		request.headers.Authorization = `Bearer ${tkn}`;
		return request;
	});

	// Axios.request({ url: baseUrl }).catch(function (error) {
	// 	if (!error.response) {
	// 		Swal.fire({
	// 			icon: "error",
	// 			title: "Network Error",
	// 		});
	// 	} else {
	// 		// http status code
	// 		const code = error.response.status;
	// 		// response data
	// 		const response = error.response.data;
	// 	}
	// });

	return { Axios };
};

export default useRequest;
