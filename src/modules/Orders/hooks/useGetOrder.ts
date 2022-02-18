import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";

const useGetOrder = () => {
	const [order, setOrder] = useState<any>({});
	const [load, setLoad] = useState(false);

	const { Axios } = useRequest();

	const getOrderById = async (id: string) => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/orders/orders/${id}`);
			setOrder(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
			// Swal.fire({
			// 	icon: "error",
			// 	title: "Failed to get your order",
			// });
		}
	};

	return { order, load, getOrderById };
};

export default useGetOrder;
