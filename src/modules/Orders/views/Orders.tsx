import React from "react";
import { Route, Routes } from "react-router-dom";
import Existing from "../components/ExistingOrder";
import NewShipping from "../components/NewShipping";
import OrderPreview from "../components/OrderPreview";

const Orders:React.FC = () => {
	return (
		<div className="flex flex-col w-full relative px-[3rem] py-[2rem] lg:py-[1rem]">
			<Routes>
				<Route path="/" element={<NewShipping />} />
				<Route path="/existing" element={<Existing />} />
				<Route path="/preview/:addressId" element={<OrderPreview />} />
			</Routes>
		</div>
	);
};

export default Orders;
