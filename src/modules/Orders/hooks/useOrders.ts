import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useRequest from "shared/http/useRequest";
import { cartAtom, cartSelector } from "shared/recoil/cart";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";

const useOrders = () => {
	const [userBillings, setUserBillings] = useState<any>([]);
	const [userShippings, setUserShippings] = useState<any>([]);

	const [billing, setBilling] = useState<string>(userBillings[0]);
	const [shipping, setShipping] = useState<string>(userShippings[0]);
	const [load, setLoad] = useState<boolean>(false);

	const setCartAtom = useSetRecoilState<any>(cartAtom);
	const cartItems = useRecoilValue<any>(cartAtom);
	const subTotal = useRecoilValue<any>(cartSelector);
	const { _id } = useRecoilValue<any>(user);
	const { Axios } = useRequest();
	let navigate = useNavigate();

	const handleChange = (e: any) => {
		let id = e.target.id;
		switch (id) {
			case "billing":
				setBilling(e.target.value);
				break;

			case "shipping":
				setShipping(e.target.value);
				break;

			default:
				break;
		}
	};

	const getBillingByUserId = async () => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/billing/all/${_id}`);
			setUserBillings(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
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
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoad(true);
		let productIds = cartItems.map((item: any) => item.productId);

		try {
			await Promise.all(
				cartItems.map(async (item: any): Promise<any> => {
					await Axios.post(`/orders/${_id}`, {
						billingId: billing,
						shippingId: shipping,
						subTotal,
						tax: 0,
						shippingFee: 0,
						productId: item.productId,
						shopId: item.shopId,
						quantity: item.quantity,
					});
				})
			);
			setLoad(false);
			Swal.fire({
				icon: "success",
				title: "Your order has been placed",
			}).then(() => navigate("/"));
			setCartAtom([]);
		} catch (error) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				title: "Your order was not placed",
			});
		}
	};

	return {
		billing,
		shipping,
		getBillingByUserId,
		getShippingByUserId,
		userShippings,
		userBillings,
		load,
		handleSubmit,
		handleChange,
	};
};

export default useOrders;
