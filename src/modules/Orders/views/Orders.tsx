import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import Existing from "../components/ExistingModal";
import NewBilling from "../components/NewBilling";
import NewShipping from "../components/NewShipping";
import useOrders from "../hooks/useOrders";

const Orders = () => {
	const { renderSpinner } = useSpinner();
	const [open, setOpen] = useState(false);

	const {
		billing,
		shipping,
		handleChange,
		getBillingByUserId,
		getShippingByUserId,
		userShippings,
		userBillings,
		load,
		handleSubmit,
	} = useOrders();
	let navigate = useNavigate();
	useEffect(() => {
		getBillingByUserId();
		getShippingByUserId();
	}, [open]);
	return (
		<div className="flex flex-col w-full relative px-[3rem] py-[2rem] lg:py-[1rem]">

			<Routes>
				<Route path="/" element={<NewShipping />} />
				<Route path="/newBilling" element={<NewBilling />} />
				<Route path="/existing" element={<Existing />} />
			</Routes>
		</div>
	);
};

export default Orders;
