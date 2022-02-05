import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom } from "shared/store/Cart";

const Cart = () => {
	const { addToCart, removeItem, totalValue } = useCart();
	const cartValue = useRecoilValue(cartAtom);
	let navigate = useNavigate();
	return (
		<div className="w-[90vw] flex flex-col px-[1rem] py-[2rem] gap-y-[2rem]">
			{/* <div className="flex flex-row justify-between text-[1.2rem]">
				<p className="font-[300]">Sub total</p>
				<p className="font-[600]">{cartValue?.subTotal}</p>
			</div> */}
			{/* <div className="flex flex-row justify-between text-[1.2rem]">
				<p className="font-[300]">Estimated tax</p>
				<p className="font-[600]">{cartValue?.tax}</p>
			</div> */}
			{/* <div className="flex flex-row justify-between text-[1.2rem]">
				<p className="font-[300]">Estimated shipping</p>
				<p className="font-[600]">{cartValue?.shippingFee}</p>
			</div> */}
			<div className="flex flex-row justify-between text-[1.2rem] tracking-wider font-[600]">
				<p className="">Estimated total</p>
				<p className="text-blue-20">${totalValue}</p>
			</div>

			<div
				className="flex border-[0.12rem]  border-black-40 rounded-2xl px-[0.5rem] py-[0.5rem] 
            bg-white">
				<p className="text-red-20 text-[1rem] font-[600] tracking-wide leading-relaxed">
					Items in your cart will not be reserved. Complete checkout to secure
					your order
				</p>
			</div>

			<button
				disabled={cartValue.length === 0}
				onClick={() => navigate(`/orders`)}
				type="button"
				className="bg-red-20 w-full py-[0.7rem] px-[1.4rem] rounded-xl hover:bg-red-400 
            md:hover:scale-110 text-white text-[1.3rem] font-[700] disabled:bg-gray-300">
				Checkout
			</button>
			<div className="flex flex-col gap-[1.3rem]">
				{cartValue.length > 0 ? (
					cartValue?.map((item: any, key: number) => (
						<CartItem
							image={item?.image}
							name={item.name}
							price={item.price}
							amount={item.quantity}
							key={key}
						/>
					))
				) : (
					<div
						className="flex flex-row self-center items-center py-[3rem] gap-x-[2rem]
                px-[2rem]">
						<div
							style={{ backgroundImage: `url(/img/wallet.png)` }}
							className="bg-contain bg-center  bg-no-repeat h-[10rem] w-[10rem]"
						/>
						<p className="text-red-20 font-[700] text-[1rem] md:text-[1.7rem]">
							Your cart is empty.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
