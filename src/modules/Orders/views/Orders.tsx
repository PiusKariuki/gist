import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Existing from "../components/ExistingOrder";
import NewShipping from "../components/NewShipping";
import useOrders from "../hooks/useOrders";

const Orders = () => {
	const [open, setOpen] = useState(false);

	const {
		getBillingByUserId,
		getShippingByUserId,
	} = useOrders();
	useEffect(() => {
		getBillingByUserId();
		getShippingByUserId();
	}, [open]);
	return (
		<div className="flex flex-col w-full relative px-[3rem] py-[2rem] lg:py-[1rem]">

			<Routes>
				<Route path="/" element={<NewShipping />} />
				<Route path="/existing" element={<Existing />} />
			</Routes>
		</div>
	);
};

export default Orders;
