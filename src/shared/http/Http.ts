import axios from "axios";
import Swal from "sweetalert2";

// export const baseUrl = "http://localhost:5000";
export const baseUrl = "http://52.43.151.113";
export const imgUrl = "http://52.43.151.113/public/img";

export const Axios = axios
	.create({
		baseURL: baseUrl,
	})
	// .request({url: ""})
	// .catch(function (error) {
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
