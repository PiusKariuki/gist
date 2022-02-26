import React, { useState, useEffect } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useOrders from "../hooks/useOrders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import OrderPreview from "./OrderPreview";

const ExistingOrder: React.FC<{}> = () => {
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
		shippingName,
		openPreview,
		setOpenPreview,
	} = useOrders();
	let navigate = useNavigate();

	useEffect(() => {
		getBillingByUserId();
		getShippingByUserId();
	}, [open]);

	useEffect(() => {
		if (shippingName?.length > 0 && !load) {
			setOpenPreview(true);
		}
	}, []);

	return (
		<div className="flex w-full flex-col relative">
			{openPreview ? (
				<div className="flex fixed top-[0%] left-[0%]">
					<OrderPreview address={shippingName} setOpen={setOpenPreview} />
				</div>
			) : null}
			<div
				onClick={() => navigate(`/orders`)}
				className="flex  flex-row w-[15rem] md:w-[20rem] px-[1.2rem] md:px-[2rem] py-[0.5rem] 
            shadow-xl self-center md:self-start rounded-xl text-blue-30 space-x-3 mt-[3rem] 
            items-center cursor-pointer my-[3rem]">
				<FontAwesomeIcon icon={faCircleInfo} size="2x" />
				<p className="text-blue-30 text-[0.9rem] md:text-[1.1rem] font-[700]">
					Go back and input new info.
				</p>
			</div>
			<p className="text-blue-30 font-[600]  text-[1.6rem] mb-[2rem]">
				Final Step. Place your order
			</p>
			<div
				className="flex flex-col gap-y-[0.1rem] w-full md:w-[40%]  ">
				{/* shipping address */}
				<label
					htmlFor="shipping"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mt-[3rem] 
               mb-[0.5rem] text-gray-20">
					Shipping Address
				</label>
				<select
					onChange={handleChange}
					value={shipping}
					required
					id="shipping"
					className=" h-[2.25rem] outline-none text-blue-30
               rounded-[0.25rem]  font-bold px-[1rem] ring-2 ring-gray-20">
					<option
						disabled
						selected
						value=""
						className="text-[1rem] text-blue-30">
						{" "}
						-- select an option --{" "}
					</option>
					{userShippings?.map((ship: any, key: number) => (
						<option
							id={ship.name}
							value={ship._id}
							key={key}
							className="text-[1.2rem] text-blue-30 font-bold">
							{ship?.name}
						</option>
					))}
				</select>
				<div className="mt-[1rem]">{renderSpinner(load)}</div>
				<div className="flex w-full justify-between">
				</div>
			</div>
		</div>
	);
};

export default ExistingOrder;
