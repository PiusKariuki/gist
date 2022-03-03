import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";
import { shippingOpen } from "../store/store";

const useAddShipping = () => {
	const [shippingName, setShippingName] = useState("");
	const [shippingStreet, setStreet] = useState("");
	const [shippingZip, setZip] = useState("");
	const [shipLoad, setLoad] = useState(false);
	const { Axios } = useRequest();
	const setOpen = useSetRecoilState(shippingOpen);
	let { _id } = useRecoilValue<any>(user);
	let navigate = useNavigate();

	const clearShippingAttributes = () => {
		setShippingName("");
		setStreet("");
		setZip("");
	};

	const handleShippingChange = (e: any) => {
		let id = e.target.id;
		switch (id) {
			case "name":
				setShippingName(e.target.value);
				break;

			case "street":
				setStreet(e.target.value);
				break;
			case "zip":
				setZip(e.target.value);
				break;

			default:
				break;
		}
	};

	const addShipping = async (e: any) => {
		e.preventDefault();
		setLoad(true);
		try {
			await Axios.post(`/address`, {
				name: shippingName,
				street: shippingStreet,
				zipCode: shippingZip,
				userId: _id,
			});
			setLoad(false);
			setOpen((prev: boolean) => !prev);
			clearShippingAttributes();
			Swal.fire({
				icon: "success",
				title: "Shipping address has been added successfully",
				text: "Click Ok below to proceed to add billing address",
			}).then(() => navigate(`/orders/existing`));
		} catch (error) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				title: "Failed to add shipping address",
			});
		}
	};

	return {
		shippingName,
		shippingStreet,
		shippingZip,
		addShipping,
		handleShippingChange,
		clearShippingAttributes,
		shipLoad,
	};
};

export default useAddShipping;
