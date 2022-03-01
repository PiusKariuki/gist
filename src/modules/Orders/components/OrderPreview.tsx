import React from "react";
import { cartAtom, cartSelector } from "shared/recoil/cart";
import { useRecoilValue } from "recoil";
import useOrders from "../hooks/useOrders";
import useSpinner from "shared/components/spinner/useSpinner";
import { user } from "shared/recoil/user";

const OrderPreview: React.FC<{
	address: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ address, setOpen }) => {
	const cartItems = useRecoilValue<any>(cartAtom);
	const subTotal = useRecoilValue<any>(cartSelector);
	const { handleSubmit, load } = useOrders();
	const { renderSpinner } = useSpinner();
	const { wallet } = useRecoilValue<any>(user);

	return (
		<div className="flex w-screen h-screen bg-white opacity-[0.93] relative z-0">
			<div
				className="flex flex-col py-[3rem] px-[1rem]  bg-white z-50 opacity-100
            rounded-md gap-y-[2rem] shadow-lg w-[80vw] md:w-[60vw] backdrop-blur-3xl
            fixed top-[10%] left-[10%] md:left-[20%]">
				<p className="text-gray-20 text-[1.3rem] font-[700]">Products</p>
				<div
					className="flex  flex-wrap space-x-2  space-y-2 md:space-x-10 items-center 
            opacity-100 bg-white">
					{cartItems.map((item: any, key: number) => (
						<p
							key={key}
							className="text-blue-30 px-[0.2rem] shadow-2xl font-[700] rounded-xl">
							{item.name}
						</p>
					))}
				</div>
				<p className="text-blue-30 text-[1.2rem] space-x-4 font-[600]">
					<span className="text-gray-20 text-[1.3rem] font-[700]">
						Sub total:&nbsp;&nbsp;GC&nbsp;
					</span>
					{subTotal}
				</p>
				<p className="text-blue-30 text-[1.2rem] space-x-4 font-[600]">
					<span className="text-gray-20 text-[1.3rem] font-[700]">
						Wallet balance:&nbsp;&nbsp;GC&nbsp;
					</span>
					{wallet -subTotal}
				</p>
				<p className="text-blue-30 text-[1.3rem] space-x-4 font-[600]">
					<span className="text-gray-20 text-[1.3rem] font-[700]">
						Shipping Address:&nbsp;&nbsp;
					</span>
					{address}
				</p>

				<div className="flex flex-row space-x-10 md:justify-between">
					<button
						onClick={handleSubmit}
						className="bg-gray-20 px-[0.8rem] py-[0.3rem] w-[8rem]
                  mt-[2rem] text-[1.2rem] text-white font-[700] rounded-xl hover:bg-blue-600
                  disabled:bg-gray-400">
						Submit
					</button>
					{renderSpinner(load)}
					<button
						onClick={() => setOpen(false)}
						className="bg-red-20 px-[0.8rem] py-[0.3rem] w-[8rem]
                  mt-[2rem] text-[1.2rem] text-white font-[700] rounded-xl hover:bg-blue-600
                  disabled:bg-gray-400">
						close
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrderPreview;
