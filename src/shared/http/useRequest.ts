import axios from "axios";
import React from "react";
import { useRecoilValue } from "recoil";
import { User } from "shared/Store/User";
import { baseUrl } from "./Http";

const useRequest = () => {
	const userObj = useRecoilValue<any>(User);
	const tkn = userObj?.token;

	const Axios = axios.create({
		baseURL: baseUrl,
	});

	Axios.interceptors.request.use((request: any) => {
		request.headers.Authorization = `Bearer ${tkn}`;
		return request;
	});

	return { Axios };
};

export default useRequest;
