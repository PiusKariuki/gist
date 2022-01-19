import axios from "axios";

export const baseUrl = "https://kilimo-backend.herokuapp.com";

export const Axios = axios.create({
	baseURL: baseUrl,
});

