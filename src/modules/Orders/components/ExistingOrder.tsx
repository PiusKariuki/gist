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
		shipping,
		handleChange,
		getShippingByUserId,
		userShippings,
		load,
		shippingName,
	} = useOrders();
	let navigate = useNavigate();

	useEffect(() => {
		getShippingByUserId();
	}, []);

	return (
		<div className="flex w-full flex-col relative">
			<div
				onClick={() => navigate(`/orders`)}
				className="flex  flex-row w-[15rem] md:w-[20rem] px-[1.2rem] md:px-[2rem] py-[0.5rem] 
            shadow-xl self-center md:self-start rounded-xl text-blue-30 space-x-3 mt-[3rem] 
            items-center cursor-pointer my-[3rem] group hover:bg-gray-20 hover:text-white">
				<FontAwesomeIcon
					icon={faCircleInfo}
					className="self-center text-[1.1rem] group-hover:text-white"
				/>
				<p
					className="text-blue-40 text-[0.9rem] md:text-[1.1rem] font-[500]
               group-hover:text-white">
					Go back and input new info.
				</p>
			</div>
			<p className="text-gray-20 font-[600]  text-[1.2rem] mb-8">
				Final Step. Place your order
			</p>
			<div className="flex flex-col gap-y-[0.1rem] w-full md:w-[40%]  ">
				{/* shipping address */}
				<select
					onChange={handleChange}
					// value={shipping}
					required
					id="shipping"
					className=" h-[2.25rem] outline-none text-blue-40
               rounded-[0.25rem]  font-bold px-[1rem] form-ring">
					<option
						disabled
						selected
						value=""
						className="text-[1rem] text-gray-20 font-[700]">
						{" "}
						-- select a shipping address --{" "}
					</option>
					{userShippings?.map((ship: any, key: number) => (
						<option
							id={ship.name}
							value={ship?._id}
							key={key}
							className="text-[1.2rem] text-blue-30 font-bold">
							{ship?.name}
						</option>
					))}
				</select>
				<div className="mt-[1rem]">{renderSpinner(load)}</div>
				<div className="flex w-full justify-between">
					<button
						type="button"
						disabled={shipping?._id === undefined}
						onClick={() => navigate(`/orders/preview/${shipping._id}`)}
						className="blue-btn">
						Preview order
					</button>
				</div>
			</div>
		</div>
	);
};

export default ExistingOrder;
