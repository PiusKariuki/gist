import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";

const useShop = () => {
	const {_id} = useRecoilValue<any>(user);
	const { Axios } = useRequest();
	const [myShop, setMyShop] = useState<any>({});
	const [load, setLoad] = useState<boolean>(false);
   
   
	const getShopsByUserId = async () => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/shop/${_id}`);
			setMyShop(data);
			setLoad(false);
		} catch (error:any) {
			Swal.fire({
				icon: "error",
				text: error?.response?.data?.message,
			});
			setLoad(false);
		}
	};

	return { myShop, load, getShopsByUserId };
};

export default useShop;
