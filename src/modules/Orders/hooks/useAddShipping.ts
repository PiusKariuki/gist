import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";
import { shippingOpen } from "../store/store";

const useAddShipping = () => {
	const [shippingName, setShippingName] = useState("");
	const [address1, setAddress1] = useState("");
	const [address2, setAddress2] = useState("");
	const [state, setState] = useState("");
	const [phone, setPhone] = useState("");
	const [city, setCity] = useState("");
	const [shipLoad, setLoad] = useState(false);
	const { Axios } = useRequest();
	const setOpen = useSetRecoilState(shippingOpen);
	let { _id } = useRecoilValue<any>(user);
	let navigate = useNavigate();

	const clearShippingAttributes = () => {
		setShippingName("");
	};

   const handlePhoneChange = (e: string) => {
			setPhone(e);
		};

	const handleShippingChange = (e: any) => {
		let id = e.target.id;
		switch (id) {
			case "name":
				setShippingName(e.target.value);
				break;

			case "address1":
				setAddress1(e.target.value);
				break;

			case "address2":
				setAddress2(e.target.value);
				break;

			case "city":
				setCity(e.target.value);
				break;

			case "state":
				setState(e.target.value);
				break;

			// case "phone":
			// 	setPhone(e);
			// 	break;

			default:
				break;
		}
	};

	const addShipping = async () => {
		setLoad(true);
		try {
			await Axios.post(`/address`, {
				name: shippingName,
				addrress1: address1,
				addrress2: address2,
				city,
				state,
				phone,
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
		address1,
		address2,
		state,
		city,
		phone,
		addShipping,
		handleShippingChange,
		clearShippingAttributes,
		shipLoad,
		handlePhoneChange,
	};
};

export default useAddShipping;
