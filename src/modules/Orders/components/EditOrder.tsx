import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useMyOrders from "../hooks/useMyOrders";

interface Props {
	orderId: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
   shopId: string;
}

const EditOrder: React.FC<Props> = ({ setOpen, orderId,shopId }) => {
	const { editOrder, setStatus } = useMyOrders();
	return (
		<div
			className="flex flex-col py-[3rem] px-[2rem] relative bg-white justify-around items-center
         rounded-md gap-y-[3rem] shadow-lg md:w-[30rem] z-50 opacity-100">
			<FontAwesomeIcon
				icon={faXmark}
				size="2x"
				color="red"
				className="absolute right-[5%] top-[4%]"
				onClick={() => setOpen(false)}
			/>
			<form
				className="flex flex-col justify-around gap-y-[4rem]"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					editOrder(e, orderId,shopId);
					setOpen(false);
				}}>
				{/* billing address */}
				<label
					htmlFor="billing"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.3rem] mt-[3rem] 
               mb-[0.5rem]">
					Change order status
				</label>
				<select
					onChange={(e) => setStatus(e.target.value)}
					required
					id="billing"
					className="h-[3.25rem] outline-none text-blue-20
               rounded-[0.25rem]  font-bold px-[1rem] ring-2 ring-blue-500">
					<option disabled defaultValue="true" value="">
						{" "}
						-- select an option --{" "}
					</option>
					<option value="pending" className="text-[1.2rem] font-[700]">Pending</option>
					<option value="cancelled" className="text-[1.2rem] font-[700]">Cancelled</option>
					<option value="shipped" className="text-[1.2rem] font-[700]">Shipped</option>
					<option value="delivered" className="text-[1.2rem] font-[700]">Delivered</option>
				</select>
				<button
					type="submit"
					// disabled={value !== name}
					className=" border-[0.2rem] border-red-20 px-[1rem] py-[0.4rem]
               text-red-20 text-[700] disabled:bg-gray-200 disabled:border-red-300
               disabled:text-red-200">
					Submit
				</button>
			</form>
		</div>
	);
};

export default EditOrder;
