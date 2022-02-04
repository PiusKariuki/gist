import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";


const Cart = () => {
	const { addToCart, removeItem, totalValue,cartValue } = useCart();
   let navigate = useNavigate();
	return (
		<div className="z-50 w-[90vw] bg-gray-400 flex flex-col px-[1rem] py-[2rem]">
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
			<div className="flex flex-row justify-between text-[1.2rem]">
				<p className="font-[300]">Estimated total</p>
				<p className="font-[600]">{totalValue}</p>
			</div>

			<div
				className="flex border-[0.12rem]  border-black-40 rounded-2xl px-[0.5rem] py-[0.5rem] 
            bg-white">
				<p className="text-red-20 text-[1.2rem] font-[300] tracking-wide leading-relaxed">
					Items in your cart will not be reserved. Complete checkout to secure
					your order
				</p>
			</div>

			<button
         onClick={()=>navigate(`/orders`)}
				type="button"
				className="bg-red-20 w-[8rem] py-[1.1rem] px-[1.4rem]">
				Checkout
			</button>
			<div className="flex flex-col gap-[1.3rem]">
				{cartValue?.items?.map((item: any, key: number) => (
					<CartItem
						image={item?.image}
						name={item.name}
						price={item.price}
						amount={item.amount}
					/>
				))}
			</div>
		</div>
	);
};

export default Cart;
