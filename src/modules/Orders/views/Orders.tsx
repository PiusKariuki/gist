import React, { useEffect, useState } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import AddBilllling from "../components/AddBilllling";
import AddShipping from "../components/AddShipping";
import useOrders from "../hooks/useOrders";
import "flowbite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

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

	useEffect(() => {
		getBillingByUserId();
		getShippingByUserId();
	}, [open]);
	return (
		<div className="flex flex-col w-full relative py-[2rem]">
			<button
				onClick={() => setOpen((prev: boolean) => !prev)}
				className="absolute top-6 left-10 md:left-12 px-[1rem] py-[0.3rem]
            bg-white outline rounded-md outline-blue-20">
				{open ? (
					<>
						<FontAwesomeIcon
							icon={faLeftLong}
							color="rgb(139 92 246)"
                     className="font-[900] text-[1.2rem]"
						/>
						<p className="text-blue-20 font-[800] text-[1.1rem]">
							Submit order
						</p>
					</>
				) : (
					<>
						<FontAwesomeIcon
							icon={faRightLong}
							color="rgb(139 92 246)"
                     className="font-[900] text-[1.2rem]"
						/>
						<p className="text-blue-20 font-[800] text-[1.1rem]">
							New Order Information
						</p>
					</>
				)}
			</button>
			{!open ? (
				<form
					autoComplete="off"
					onSubmit={handleSubmit}
					action=""
					className="flex flex-col gap-y-[0.1rem] w-full md:w-[40%] py-[3rem] px-[3rem]">
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
						className=" h-[2.25rem] outline-none text-blue-20
                  rounded-[0.25rem]  font-bold px-[1rem] ring-2 ring-blue-500">
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
						className=" h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem]  font-bold px-[1rem] ring-2 ring-blue-500">
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
						className="bg-blue-20 px-[2rem] py-[0.5rem] w-[16rem] 
                mt-[2rem] text-[1.4rem] text-white font-[700] rounded-xl hover:bg-blue-600
                disabled:bg-gray-400
                ">
						Submit order
					</button>
				</form>
			) : (
				<div
					className="flex flex-col md:flex-row w-full py-[6rem] px-[3rem]
               space-y-10 lg:gap-x-20 lg:py-[6rem] lg:space-y-0">
					<div className="flex flex-col w-full">
						<p className="text-black-80 text-[1.2rem] font-[700]">
							New shipping Information
						</p>
						<AddShipping />
					</div>
					<div className="flex flex-col w-full">
						<p className="text-black-80 text-[1.2rem] font-[700]">
							New Billing Information
						</p>
						<AddBilllling />
					</div>
				</div>
			)}
		</div>
	);
};

export default Orders;
