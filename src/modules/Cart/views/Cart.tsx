import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom,cartOpen } from "shared/Store/Cart";

const Cart = () => {
	const { addToCart, removeItem, totalValue } = useCart();
	const cartValue = useRecoilValue(cartAtom);
   const setOpenCart = useSetRecoilState(cartOpen);
	let navigate = useNavigate();
	return (
		<div className="w-[90vw] md:w-[45vw] flex flex-col px-[1rem] py-[2rem] gap-y-[0.5rem]">
			{/* <div className="flex flex-row justify-between text-[1.2rem]">
				<p className="font-[300]">Sub total</p>
				<p className="font-[600]">{cartValue?.subTotal}</p>
			</div> */}
			<div className="flex flex-row justify-between text-[1.2rem]">
				<p className="font-[300]">Estimated shipping</p>
				<p className="font-[600]">$0.00</p>
			</div>

		   <div className="flex flex-row justify-between text-[1.2rem]">
				<p className="font-[300]">Estimated tax</p>
				<p className="font-[600]">$0.00</p>
			</div>

			<div className="flex flex-row justify-between text-[1.2rem] tracking-wider">
				<p className="font-[300]">Estimated total</p>
				<p className="font-[600] text-blue-20">${isNaN(totalValue)? 0: totalValue }</p>
			</div>

			<div
				className="flex border-[0.12rem]  border-black-40  px-[0.5rem] py-[0.5rem] 
            bg-white">
				<p className=" text-[0.9rem] font-[400] tracking-wide leading-relaxed">
					Items in your cart will not be reserved. Complete checkout to secure
					your order.
				</p>
			</div>

			<button
				disabled={cartValue.length === 0}
				onClick={() => {
					setOpenCart((prev: boolean) => !prev);
					navigate(`/orders`);
				}}
				type="button"
				className="bg-red-20 w-full md:w-[60%] py-[0.4rem] px-[1.4rem] rounded-md
            hover:bg-red-400 text-white text-[1.3rem] font-[500] 
            disabled:bg-gray-300 self-center my-[1.5rem]">
				Checkout
			</button>
			<div className="flex flex-col gap-[1.3rem] bg-white">
				{cartValue.length > 0 ? (
					cartValue?.map((item: any, key: number) => (
						<CartItem
							image={item?.image}
							name={item.name}
							price={item.price}
							amount={item.quantity}
							id={item.id}
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
