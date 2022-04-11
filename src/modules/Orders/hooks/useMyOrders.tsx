import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";


const useOrderByShopID = () => {
	const { Axios } = useRequest();
	const [orders, setOrders] = useState<any>([]);
	const [load, setLoad] = useState(false);
	const { _id } = useRecoilValue<any>(user);
	const [shopId, setShopId] = useState("");
	const [orderId, setOrderId] = useState<any>("");
	const [open, setOpen] = useState<boolean>(false);
	const [status, setStatus] = useState("pending");


   
	let navigate = useNavigate();

	const columns = [
		{
			name: "Date Placed",
			selector: (row: any) => new Date(row.date).toLocaleDateString(),
		},
		{
			name: "Product",
			selector: (row: any) => row.itemId.productId.name,
		},
		{
			name: "Qty",
			selector: (row: any) => row.itemId.productId.quantity,
		},
		{
			name: "variations",
			selector: (row: any) => row.itemId.productId.variations,
		},
		{
			name: "Status",
			selector: (row: any) => row.status,
		},
		{
			name: "actions",
			selector: (row: any) => row.actions,
		},
	];




	const getMyShop = async () => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/shop/${_id}`);
			setShopId(data._id);
			setLoad(false);
			await getOrderByShopID(data?._id);
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

	const getOrdersByUserID = async () => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/orders/${_id}`);
			setOrders(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
		}
	};

	
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
			await getOrderByShopID(shopId);
			setLoad(false);
			setOpen(false);
			Swal.fire({
				icon: "success",
				title: "Your order has been updated",
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

	{
		/*......................................
      *get order by id and then naviigate to the product  
   ......................................*/
	}
	const getOrderById = async (id: string) => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/orders/orders/${id}`);
			setLoad(false);
			navigate(`/product/${data?.itemId?.productId?._id}`);
		} catch (error) {
			setLoad(false);
		}
	};

	return {
		getOrderByShopID,
		getOrdersByUserID,
		columns,
		load,
		getMyShop,
		open,
		setOpen,
		orderId,
		shopId,
		editOrder,
		setStatus,
		orders,
      getOrderById,
      setOrderId
	};
};

export default useOrderByShopID;
