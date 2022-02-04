import React, { useState } from "react";
import { Axios } from "shared/http/Http";

const useShopDetails = () => {
	const [shopDetails, setShopDetails] = useState<any>([]);
	const [errors, setErrors] = useState<any>("");
	const [load, setLoad] = useState<boolean>(false);

	const getShopDetails = async (shopId: any) => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/products/${shopId}`);
			setShopDetails(data);
			setLoad(false);
		} catch (error) {
			setErrors(error);
			setLoad(false);
		}
	};

	return { shopDetails, getShopDetails, load, errors };
};

export default useShopDetails;
