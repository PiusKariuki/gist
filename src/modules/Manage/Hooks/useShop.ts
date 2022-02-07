import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/store/Store";
import Swal from "sweetalert2";

const useShop = () => {
	const { _id } = useRecoilValue<any>(user);
	const { Axios } = useRequest();
	const [myShops, setMyShops] = useState<any>([]);
	const [load, setLoad] = useState<boolean>(false);

	const getShopsByUserId = async () => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/shop/${_id}`);
			setMyShops(data);
			setLoad(false);
		} catch (error) {
			Swal.fire({
				icon: "error",
				text: "error",
			});
			setLoad(false);
		}
	};

	return { myShops, load, getShopsByUserId };
};

export default useShop;
