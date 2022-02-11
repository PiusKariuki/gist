import React, { useEffect } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useOrders from "../hooks/useOrders";

const Orders = () => {
	const { renderSpinner } = useSpinner();

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

	useEffect(() => {
		getBillingByUserId();
		getShippingByUserId();
	}, []);
	return (
		<div className="flex flex-col">
			{/* <div className="hidden lg:flex lg:max-w-[25%] bg-green-60 lg:min-h-screen slef-start" /> */}
			<form
				autoComplete="off"
				onSubmit={handleSubmit}
				action=""
				className="flex flex-col gap-y-[0.1rem] w-full lg:w-[50%] py-[3rem] px-[1rem] self-center">
				{/* billing address */}
				<label
					htmlFor="billing"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					Billing Address
				</label>
				<select
					onChange={handleChange}
					value={billing}
					required
					id="billing"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem]  font-bold px-[1rem] focus:ring-2 focus:ring-blue-500">
					<option disabled selected value="">
						{" "}
						-- select an option --{" "}
					</option>
					{userBillings?.map((bill: any, key: number) => (
						<option value={bill?._id} key={key}>
							{bill?.name}
						</option>
					))}
				</select>
				{/* shipping address */}
				<label
					htmlFor="shipping"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					Shipping Address
				</label>
				<select
					onChange={handleChange}
					value={shipping}
					required
					id="shipping"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem]  font-bold px-[1rem] focus:ring-2 focus:ring-blue-500">
					<option disabled selected value="">
						{" "}
						-- select an option --{" "}
					</option>
					{userShippings?.map((ship: any, key: number) => (
						<option value={ship?._id} key={key}>
							{ship?.name}
						</option>
					))}
				</select>
				<div className="mt-[1rem]">{renderSpinner(load)}</div>
				<button
					disabled={billing?.length < 1 || shipping?.length < 1}
					type="submit"
					className="bg-red-20 px-[2rem] py-[1rem] w-[16rem] self-center 
                mt-[2rem] text-[1.4rem] text-white font-[700] rounded-xl hover:bg-red-600
                disabled:bg-gray-400
                ">
					Submit order
				</button>
			</form>
		</div>
	);
};

export default Orders;
