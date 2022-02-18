import React from "react";
import useAddShipping from "../hooks/useAddShipping";
import { shippingOpen } from "../store/store";
import { useSetRecoilState } from "recoil";
import useSpinner from "shared/components/spinner/useSpinner";
import useOrders from "../hooks/useOrders";

const Existing: React.FC<{
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setOpen }) => {
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
	React.useEffect(() => {
		getBillingByUserId();
		getShippingByUserId();
	}, [open]);
	return (
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
			<div className="flex w-full justify-between">
				<button
					disabled={billing?.length < 1 || shipping?.length < 1}
					type="submit"
					className="bg-blue-20 px-[2rem] py-[0.5rem] w-[40%] 
                mt-[2rem] text-[1.4rem] text-white font-[700] rounded-xl hover:bg-blue-600
                disabled:bg-gray-400
                ">
					Submit order
				</button>
				<button
					onClick={() => setOpen((prev: boolean) => !prev)}
					type="button"
					className="bg-red-20 px-[2rem] py-[0.5rem] w-[20%] 
                mt-[2rem] text-[1.4rem] text-white font-[700] rounded-xl hover:bg-red-600
                disabled:bg-gray-400
                ">
					Close
				</button>
			</div>
		</form>
	);
};

export default Existing;
