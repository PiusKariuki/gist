import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useRequest from "shared/http/useRequest";
import { cartAtom, cartSelector } from "shared/recoil/cart";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";



const useOrders = () => {
	const [userShippings, setUserShippings] = useState<any>([]);

	const [shipping, setShipping] = useState<string>(userShippings[0]);
	const [load, setLoad] = useState<boolean>(false);

	const setCartAtom = useSetRecoilState<any>(cartAtom);
	const cartItems = useRecoilValue<any>(cartAtom);
	const subTotal = useRecoilValue<any>(cartSelector);
	const { _id } = useRecoilValue<any>(user);
	const { Axios } = useRequest();
	let navigate = useNavigate();
	const [shippingFee, setShippingFee] = useState(0);
	const [tax, setTax] = useState(0);
	const [shippingName, setShippingName] = useState<any>("");
	const [openPreview, setOpenPreview] = useState(false);
	const setUser = useSetRecoilState(user);



	const getShippingById = async (shippingId: any) => {
		setLoad(true);
		setLoad(false);
		try {
			let { data } = await Axios.get(`/address/${shippingId}`);
			setShippingName(data.name);
		} catch (error) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				text: "This shipping address is not available",
			});
		}
	};

	const handleChange = async (e: any) => {
		setLoad(true);
		setShipping(e.target.value);
		try {
			let { data } = await Axios.get(`/address/${e.target.value}`);
			setShippingName(data.name);
			setLoad(false);
			setOpenPreview(true);
		} catch (error) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				text: "This shipping address is not available",
			});
		}
	};

	const getShippingByUserId = async () => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/address/all/${_id}`);
			setUserShippings(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
		}
	};

	const handleSubmit = async (shippingId: any) => {
		setLoad(true);
		let sentObj = cartItems.map((item: any) =>
			Object.assign(
				{},
				{},
				{
					subTotal: item.price,
					shippingFee,
					tax,
					productId: item.productId,
					shopId: item.shopId,
					quantity: item.quantity,
					productOwnerId: item.sellerId,
					shippingId,
				}
			)
		);

		{
			/*......................................
         *configuring the request object
      ......................................*/
		}

		try {
			await Axios.post(`/orders/${_id}`, {
				order: sentObj,
			});

			setLoad(false);
			Swal.fire({
				icon: "success",
				title: "Your order has been placed",
				timer: 1500,
			}).then(() => navigate("/"));
			setCartAtom([]);
			setOpenPreview(false);
			navigate("/");
		} catch (error) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				title: "Your order was not placed",
			});
		}
	};

	return {
		shipping,
		getShippingByUserId,
		userShippings,
		load,
		handleSubmit,
		handleChange,
		shippingName,
		getShippingById,
		openPreview,
		setOpenPreview,
	};
};

export default useOrders;
