import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";

const useOrderByShopID = () => {
	const { Axios } = useRequest();
	const [orders, setOrders] = useState<any>([]);
	const [load, setLoad] = useState(false);
	const { _id } = useRecoilValue<any>(user);
	const [shops, setMyShops] = useState<any>([]);
	const [shopId, setShopId] = useState("");
	const [orderId, setOrderId] = useState<any>("");
	const [open, setOpen] = useState<boolean>(false);
	const [openView, setOpenView] = useState<boolean>(false);
	const [status, setStatus] = useState("pending");
	const [order, setOrder] = useState<any>({});
   
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
			actions: (
				<div className="flex w-full gap-x-[2rem]">
					<button
						className="bg-gray-20 hover:bg-blue-40 text-white px-[1rem] py-[0.3rem] h-8
                  rounded-2xl"
						id={obj._id}
						value={obj._id}
						onClick={(e) => {
							setOrderId(e.currentTarget.value);
							setOpen(true);
							setOpenView(false);
						}}>
						Edit
					</button>
					<button
						className="bg-blue-40  hover:bg-gray-20 text-white px-[1rem] py-[0.3rem] h-8
                  rounded-2xl"
						id={obj._id}
						value={obj._id}
						onClick={(e) => {
							setOrderId(e.currentTarget.value);
							getOrderById(e.currentTarget.value);
							setOpen(false);
						}}>
						View
					</button>
				</div>
			),

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

	const getOrderByShopID = async (id: string) => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/orders/all/shop/${id}`);
			setOrders(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
		}
	};

	// .............................edit order part
	const editOrder = async (
		e: React.FormEvent<HTMLFormElement>,
		orderId: string,
		shopId: string
	) => {
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
			}).then(() => {
				getOrderByShopID(shopId);
				setOpen(false);
			});
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error updating order",
				timer: 1500,
			});
			setLoad(false);
		}
	};

	const getOrderById = async (id: string) => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/orders/orders/${id}`);
			setOpenView(true);
			setOrder(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
		}
	};

	return {
		getOrderByShopID,
		columns,
		load,
		orders,
		getMyShops,
		setShopId,
		shops,
		populate,
		open,
		setOpen,
		openView,
		setOpenView,
		orderId,
		editOrder,
		setStatus,
		shopId,
		getOrderById,
		order,
	};
};

export default useOrderByShopID;
