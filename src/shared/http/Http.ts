import axios from "axios";

export const baseUrl = "http://localhost:5000";
// export const baseUrl = "http://52.43.151.113";

export const Axios = axios.create({
	baseURL: baseUrl,
});

