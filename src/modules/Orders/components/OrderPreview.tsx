import React from "react";
import { cartAtom, cartSelector } from "shared/recoil/cart";
import { useRecoilValue } from "recoil";
import useOrders from "../hooks/useOrders";
import useSpinner from "shared/components/spinner/useSpinner";
import { user } from "shared/recoil/user";

const OrderPreview: React.FC<{
	shippingId: string;
	address: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ address, setOpen,shippingId }) => {
	const cartItems = useRecoilValue<any>(cartAtom);
	const subTotal = useRecoilValue<any>(cartSelector);
	const { handleSubmit, load } = useOrders();
	const { renderSpinner } = useSpinner();
	const { wallet } = useRecoilValue<any>(user);

	return (
		<div className="flex w-screen h-screen bg-white  relative z-0">
			<div
				className="flex flex-col py-[3rem] px-[1rem]  bg-white z-50 opacity-100
            rounded-md gap-y-[2rem] shadow-lg w-[80vw] md:w-[60vw]
            fixed top-[10%] left-[10%] md:left-[20%]">
				{/* <p className="text-gray-20  font-[700]">Products</p> */}
				<div
					className="flex  flex-wrap space-x-2  space-y-2 md:space-x-10 items-center 
            opacity-100 bg-white">
					{cartItems.map((item: any, key: number) => (
						<p
							key={key}
							className="text-gray-20 px-[0.2rem] shadow-2xl font-[600] rounded-xl">
							{item.name}
						</p>
					))}
				</div>
				<p className="text-gray-20 text-[0.9rem] space-x-4 font-[600]">
					<span className="font-[400]">
						Sub total:&nbsp;&nbsp;GC.&nbsp;&nbsp;
					</span>
					{subTotal}
				</p>
				<p className="text-gray-20 text-[0.9rem] space-x-4 font-[600]">
					<span className="font-[500]">
						Wallet balance:&nbsp;&nbsp;GC.&nbsp;&nbsp;
					</span>
					{wallet - subTotal}
				</p>
				<p className="text-gray-20 text-[0.9rem] space-x-4 font-[600]">
					<span className="font-[500]">Shipping Address:&nbsp;&nbsp;</span>
					{address}
				</p>

				<div className="flex flex-row space-x-10 md:justify-between">
					<button
						onClick={() => handleSubmit(shippingId)}
						className="bg-gray-20 px-[0.2rem] py-[0.3rem] w-[8rem]
                  mt-[2rem] text-[0.9rem] text-white font-[700] rounded-2xl hover:bg-blue-600
                  disabled:bg-gray-400">
						Place order
					</button>
					{renderSpinner(load)}
					<button
						onClick={() => setOpen(false)}
						className="bg-red-20 px-[0.2rem] py-[0.3rem] w-[4rem]
                  mt-[2rem] text-[0.9rem] text-white font-[700] rounded-2xl hover:bg-blue-600
                  disabled:bg-gray-400">
						close
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrderPreview;
