import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";
import { billingOpen } from "../store/store";

const useAddBilling = () => {
	const [billingName, setBillingName] = useState("");
	const [street, setStreet] = useState("");
	const [zip, setZip] = useState("");
	const [load, setLoad] = useState(false);
	const { Axios } = useRequest();
	const setOpen = useSetRecoilState(billingOpen);
	let { _id } = useRecoilValue<any>(user);

	const clearAttributes = () => {
		setBillingName("");
		setStreet("");
		setZip("");
	};

	const handleChange = (e: any) => {
		let id = e.target.id;
		switch (id) {
			case "name":
				setBillingName(e.target.value);
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

	const addBilling = async (e: any) => {
		e.preventDefault();
		setLoad(true);
		try {
			await Axios.post(`/billing`, {
				name: billingName,
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
				title: "Failed to add billing",
			});
		}
	};

	return {
		billingName,
		street,
		zip,
		addBilling,
		handleChange,
		clearAttributes,
      load
	};
};

export default useAddBilling;
