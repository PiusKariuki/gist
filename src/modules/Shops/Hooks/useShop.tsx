import React, { useState } from "react";
import { Axios } from "shared/http/Http";

const useShop = () => {
	const [shops, setShops] = useState<any>([]);
	const [errors, setErrors] = useState<any>("");
	const [load, setLoad] = useState<boolean>(false);

	const getShops = async () => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/shop`);
			setShops(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
			setErrors(error);
		}
	};
	return { shops, getShops, errors, load };
};

export default useShop;
