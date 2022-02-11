import axios from "axios";
import React from "react";
import { useRecoilValue } from "recoil";
import { user } from "../store/store";
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

	return { Axios };
};

export default useRequest;
