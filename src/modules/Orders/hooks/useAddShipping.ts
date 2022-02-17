import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";
import { shippingOpen } from "../store/store";

const useAddShipping = () => {
	const [shippingName, setShippingName] = useState("");
	const [street, setStreet] = useState("");
	const [zip, setZip] = useState("");
	const [load, setLoad] = useState(false);
	const { Axios } = useRequest();
	const setOpen = useSetRecoilState(shippingOpen);
	let { _id } = useRecoilValue<any>(user);

	const clearAttributes = () => {
		setShippingName("");
		setStreet("");
		setZip("");
	};

	const handleChange = (e: any) => {
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
				street,
				zipCode: zip,
				userId: _id,
			});
			setLoad(false);
			setOpen((prev: boolean) => !prev);
			clearAttributes();
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
		street,
		zip,
		addShipping,
		handleChange,
		clearAttributes,
      load
	};
};

export default useAddShipping;
