import React from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useOrders from "../hooks/useOrders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Existing: React.FC<{}> = () => {
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
	let navigate = useNavigate();

	React.useEffect(() => {
		getBillingByUserId();
		getShippingByUserId();
	}, [open]);
	return (
		<div className="flex w-full flex-col relative">
			<div
				onClick={() => navigate(`/orders`)}
				className="flex  flex-row w-[15rem] md:w-[20rem] px-[1.2rem] md:px-[2rem] py-[0.5rem] 
            shadow-xl self-center md:self-start rounded-xl text-blue-30 space-x-3 mt-[3rem] 
            items-center cursor-pointer my-[3rem]">
				<FontAwesomeIcon icon={faCircleInfo} size="2x"  />
				<p className="text-blue-30 text-[0.9rem] md:text-[1.1rem] font-[700]">
					Go back and input new info.
				</p>
			</div>
			<p className="text-blue-30 font-[600]  text-[1.6rem] mb-[2rem]">
				Final Step. Place your order
			</p>
			<form
				autoComplete="off"
				onSubmit={handleSubmit}
				action=""
				className="flex flex-col gap-y-[0.1rem] w-full md:w-[40%]  ">
				{/* billing address */}
				<label
					htmlFor="billing"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
               mb-[0.5rem] text-gray-20 ">
					Billing Address
				</label>
				<select
					onChange={handleChange}
					value={billing}
					required
					id="billing"
					className=" h-[2.25rem] outline-none text-blue-30 w-full
                  rounded-[0.25rem]  font-bold px-[1rem] ring-2 ring-gray-20">
					<option
						disabled
						selected
						value=""
						className="text-[1rem] text-blue-30">
						{" "}
						-- select an option --{" "}
					</option>
					{userBillings?.map((bill: any, key: number) => (
						<option
							value={bill?._id}
							key={key}
							className="text-[1.2rem] text-blue-30 font-bold">
							{bill?.name}
						</option>
					))}
				</select>
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
						disabled={billing?.length < 1 || shipping?.length < 1}
						type="submit"
						className="bg-blue-20 px-[2rem] py-[0.5rem] w-full md:w-[30%]
                mt-[2rem] text-[1.2rem] text-white font-[700] rounded-xl hover:bg-blue-600
                disabled:bg-gray-400
                ">
						Submit order
					</button>
				</div>
			</form>
		</div>
	);
};

export default Existing;
