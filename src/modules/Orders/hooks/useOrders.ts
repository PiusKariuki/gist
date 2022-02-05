import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/store/Store";

const useOrders = () => {
	const [billing, setBilling] = useState<string>("");
	const [shipping, setShipping] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);

	const [userBillings, setUserBillings] = useState([]);
	const [userShippings, setUserShippings] = useState([]);

	const { _id } = useRecoilValue<any>(user);
	const { request } = useRequest();

	const getBillingByUserId = async () => {
		setLoad(true);
		try {
			let billings = await request.get(`/billing/all/${_id}`);
			setUserBillings(billings);
			setLoad(false);
		} catch (error) {
			setLoad(false);
		}
	};
	const getShippingByUserId = async () => {
		setLoad(true);
		try {
			let shippings = await request.get(`/billing/all/${_id}`);
			setUserShippings(shippings);
			setLoad(false);
		} catch (error) {
			setLoad(false);
		}
	};

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

   const handleSubmit = (e: any) => {
      e.preventDefault();
      // request.post()
   }



	return {
		billing,
		shipping,
		handleChange,
		getBillingByUserId,
		getShippingByUserId,
		userShippings,
		userBillings,
		load,
      handleSubmit
	};
};

export default useOrders;
