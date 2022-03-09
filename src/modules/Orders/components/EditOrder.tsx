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
		<div className="flex w-screen h-screen opacity-90 bg-gray-200 z-50 ">
			<div
				className="flex flex-col py-[3rem] px-[2rem] relative bg-white justify-self-center
             items-center rounded-md gap-y-[3rem] shadow-lg md:w-[30rem] opacity-100 self-center 
             w-full mx-auto backdrop-blur-md">
				<FontAwesomeIcon
					icon={faXmark}
					color="red"
					className="absolute right-[5%] top-[4%] text-[1.6rem]"
					onClick={() => setOpen(false)}
				/>
				<form
					className="flex flex-col justify-around gap-y-[2rem]"
					onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
						editOrder(e, orderId, shopId);
						setOpen(false);
					}}>
					<div className="flex flex-col space-y-4">
						<p className="text-blue-40 text-[1.1rem] font-[700]">Status</p>
						<select
							onChange={(e) => setStatus(e.target.value)}
							required
							id="billing"
							className="h-[2.25rem] outline-none text-blue-20
                     rounded-[0.25rem]  font-semibold px-[1rem] form-ring">
							<option disabled defaultValue="true" value="">
								{" "}
								-- select an option --{" "}
							</option>
							<option value="pending" className="text-[1.2rem] font-[500]">
								Pending
							</option>
							<option value="cancelled" className="text-[1.2rem] font-[500]">
								Cancelled
							</option>
							<option value="shipped" className="text-[1.2rem] font-[500]">
								Shipped
							</option>
							<option value="delivered" className="text-[1.2rem] font-[500]">
								Delivered
							</option>
						</select>
					</div>
					<button
						type="submit"
						// disabled={value !== name}
						className="bg-gray-20 text-white px-[1rem] py-[0.2rem]  rounded-md 
                  hover:bg-blue-40 font-[700]">
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditOrder;
