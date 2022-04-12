import { useState } from "react";
import useRequest from "shared/http/useRequest";

interface Props {
	method: "GET" | "PUT" | "POST" | "DELETE";
	info: any | undefined;
}
type Err = {
	response: {
		message: string;
	};
};

/**
 * Description
 * @returns {any}
 */
const useFetch = () => {
	const [data, setData] = useState<any>([{}]);
	const [mongoErr, setMongoErr] = useState<any>();
	const { Axios } = useRequest();
	const [load, setLoad] = useState(false);
   console.log(data);
   

	const getObject = async (
		route: string,
		method: Props["method"],
		info: Props["info"]
	) => {
		setLoad(true);
		switch (method) {
			case "GET":
				try {
					let { data } = await Axios.get(route);
					setData(data);
					setLoad(false);
				} catch (error: any) {
					setMongoErr(error.response.message);
					setLoad(false);
				}
				break;

			case "POST":
				try {
					let { data } = await Axios.post(route, info);
					setData(data);
					setLoad(false);
				} catch (error: any) {
					setMongoErr(error.response.message);
					setLoad(false);
				}
				break;
			case "PUT":
				try {
					let { data } = await Axios.put(route, info);
					setData(data);
					setLoad(false);
				} catch (error: any) {
					setMongoErr(error.response.message);
					setLoad(false);
				}
				break;
			case "DELETE":
				try {
					let { data } = await Axios.delete(route);
					setData(data);
					setLoad(false);
				} catch (error: any) {
					setMongoErr(error.response.message);
					setLoad(false);
				}
				break;
			default:
				break;
		}
	};

	return { data, mongoErr, setMongoErr, getObject, load };
};

export default useFetch;
