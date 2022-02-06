import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import { cartAtom } from "shared/store/Cart";
import { user } from "shared/store/Store";


const useOrders = () => {
	const [billing, setBilling] = useState<string>("");
	const [shipping, setShipping] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);

	const [userBillings, setUserBillings] = useState<any>([]);
	const [userShippings, setUserShippings] = useState<any>([]);

   const cartItems = useRecoilValue<any>(cartAtom);
	const { _id } = useRecoilValue<any>(user);
	const { Axios } = useRequest();


	const getBillingByUserId = async () => {
		setLoad(true);
		try {
         
			let {data} = await Axios.get(`/billing/all/${_id}`);
			setUserBillings(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
		}
	};
	const getShippingByUserId = async () => {
		setLoad(true);
		try {
			let {data }= await Axios.get(`/address/all/${_id}`);
			setUserShippings(data);
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

   const handleSubmit = async (e: any) => {
      e.preventDefault();
      // cartItems.length > 0 && cartItems.map((item: any)=>
      
      // try {
      //    let res = await Axios.post(`/order/${productId}`)
      // } catch (error) {
         
      // }
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
