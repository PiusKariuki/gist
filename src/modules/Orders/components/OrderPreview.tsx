import React, { useLayoutEffect } from "react";
import { cartAtom, cartSelector } from "shared/recoil/cart";
import { useRecoilValue } from "recoil";
import useOrders from "../hooks/useOrders";
import useSpinner from "shared/components/spinner/useSpinner";
import { user } from "shared/recoil/user";
import { useParams } from "react-router-dom";


const OrderPreview: React.FC = () => {
	const cartItems = useRecoilValue<any>(cartAtom);
	const subTotal = useRecoilValue<any>(cartSelector);
	const { handleSubmit, load, shippingName, getShippingById } = useOrders();
	const { renderSpinner } = useSpinner();
	const { wallet } = useRecoilValue<any>(user);
	let { addressId } = useParams<string>();

   useLayoutEffect(()=>{
      getShippingById(addressId)
   },[])

	return (
		<div
			className="flex flex-col py-[3rem] px-[1rem]  bg-white z-50 opacity-100
            rounded-md gap-y-[2rem]  w-[80vw] md:w-[60vw]">
			<div
				className="flex  flex-wrap space-x-2  space-y-2 md:space-x-10 items-center 
               md:space-y-0 bg-white">
				<p className="text-gray-20 text-[0.9rem] space-x-4 font-[600">
					Products:{" "}
				</p>
				{cartItems.map((item: any, key: number) => (
					<p
						key={key}
						className="text-blue-40 px-[0.2rem] shadow-2xl font-[600] rounded-xl">
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
				{shippingName}
			</p>

			<div className="flex flex-row space-x-10">
				<button
					onClick={() => handleSubmit(addressId)}
					className="bg-gray-20 px-[0.2rem] py-[0.3rem] w-[8rem]
                  mt-[2rem] text-[0.9rem] text-white font-[700] rounded-2xl hover:bg-blue-600
                  disabled:bg-gray-400">
					Place order
				</button>
				{renderSpinner(load)}
			</div>
		</div>
	);
};

export default OrderPreview;
