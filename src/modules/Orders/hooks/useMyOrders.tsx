import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/store/Store";
import Swal from "sweetalert2";

const useMyOrders = () => {
	const { Axios } = useRequest();
	const [orders, setOrders] = useState<any>([]);
	const [load, setLoad] = useState(false);
	const { _id } = useRecoilValue<any>(user);
	const [shops, setMyShops] = useState<any>([]);
	const [shopId, setShopId] = useState("");
	let actions = ["edit"];
	const [orderId, setOrderId] = useState<any>("");
	const [open, setOpen] = useState<boolean>(false);
	const [status, setStatus] = useState("pending");

	const columns = [
		{
			name: "Date Placed",
			selector: (row: any) => row.date,
		},
		{
			name: "Status",
			selector: (row: any) => row.status,
		},
		{
			name: "Actions",
			selector: (row: any) => row.actions,
		},
	];

	let populate = orders.map((obj: any) =>
		Object.assign(obj, {
			actions: actions.map(
				(action: string, key: number): JSX.Element => (
					<button
						className="red-btn px-[1rem] py-[0.4rem]"
						key={key}
						id={obj._id}
						value={obj._id}
						onClick={(e) => {
							setOrderId(e.currentTarget.value);
							setOpen(true);
						}}>
						{action}
					</button>
				)
			),
			// status: (
			// 	<span
			// 		className="text-center items-center text-white w-[20rem] bg-blue-20 px-[0.3rem]
			//        py-[0.1rem] rounded-2xl font-[700]">
			// 		{obj.status}
			// 	</span>
			// ),
			date: new Date(obj.createdAt).toLocaleDateString(),
		})
	);

	const getMyShops = async () => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/shop/${_id}`);
			setMyShops(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				title: "Failed to get your orders",
			});
		}
	};

	const getMyOrders = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoad(true);
		try {
			let { data } = await Axios.get(`/orders/all/shop/${shopId}`);
			setOrders(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				title: "Failed to get your orders",
			});
		}
	};

	// .............................edit order part
	const editOrder = async (e: any, orderId: string) => {
		e.preventDefault();

		setLoad(true);
		try {
			await Axios.put(`/orders/orders/${orderId}`, {
				status,
			});
			setLoad(false);
			Swal.fire({
				icon: "success",
				title: "Your order has been updated",
				timer: 1500,
			}).then(()=>setOpen(false));
         
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error updating order",
				timer: 1500,
			});
			setLoad(false);
		}
	};

	return {
		getMyOrders,
		columns,
		load,
		orders,
		getMyShops,
		setShopId,
		shops,
		populate,
		open,
		setOpen,
		orderId,
		editOrder,
		setStatus,
	};
};

export default useMyOrders;
