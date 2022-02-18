import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom, cartOpen } from "shared/recoil/cart";

const Cart = () => {
	const { addToCart, removeItem, totalValue } = useCart();
	const cartValue = useRecoilValue(cartAtom);
	const setOpenCart = useSetRecoilState(cartOpen);
	let navigate = useNavigate();
   
	return (
		<div
			className="w-[90vw] md:w-[45vw] flex flex-col px-[1rem] py-[2rem] gap-y-[0.5rem]
          min-h-screen">
			<div
				className="flex flex-col gap-[2rem] bg-white max-h-[60vh] lg:max-h-[60vh] overflow-y-scroll
            px-[0.4rem] md:px-[1rem] py-[3rem] border-t-2">
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

			<div className="flex flex-row md:text-[1.2rem] md:w-[40%] justify-between self-end">
				<p className="font-[500]">Estimated shipping</p>
				<p className="font-[600] text-blue-20">$0.00</p>
			</div>

			<div className="flex flex-row md:text-[1.2rem] md:w-[40%] justify-between self-end">
				<p className="font-[500]">Estimated tax</p>
				<p className="font-[600] text-blue-20">$0.00</p>
			</div>

			<div
				className="flex flex-row md:text-[1.2rem] tracking-wider md:w-[40%] justify-between
            self-end">
				<p className="font-[500]">Estimated total</p>
				<p className="font-[600] text-blue-20 text-left">
					${isNaN(totalValue) ? 0 : totalValue}
				</p>
			</div>

			<button
				disabled={cartValue.length === 0}
				onClick={() => {
					setOpenCart((prev: boolean) => !prev);
					navigate(`/orders`);
				}}
				type="button"
				className="bg-blue-20 md:w-[40%] py-[0.4rem] px-[1.4rem] rounded-md self-end
            hover:bg-blue-400 text-white text-[1.3rem] font-[500] 
            disabled:bg-gray-300  my-[1.5rem]">
				Checkout
			</button>
		</div>
	);
};

export default Cart;
