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
			className="w-[60vw] md:w-[30vw] lg:w-[20vw] flex flex-col px-[0.5rem] py-[2rem] gap-y-[0.5rem]
          min-h-screen">
			<div
				className="flex flex-col gap-[2rem] bg-white max-h-[60vh] lg:max-h-[50vh] overflow-y-scroll
            px-[0.8rem] md:px-[0.8rem] py-[3rem] border-t-2">
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
							className="bg-contain bg-center  bg-no-repeat h-[10rem] w-[7rem]"
						/>
						<p className="text-red-20 font-[700] text-[1rem] md:text-[1rem]">
							Your cart is empty.
						</p>
					</div>
				)}
			</div>

			{cartValue.length > 0 ? (
				<>
					<div className="flex flex-row md:text-[1rem] justify-between self-start ">
						<p className="font-[500]">Estimated shipping &nbsp;&nbsp;</p>
						<p className="font-[600] text-blue-20">GC0.00</p>
					</div>

					<div className="flex flex-row md:text-[1rem] justify-between self-start ">
						<p className="font-[500]">Estimated tax &nbsp;&nbsp;</p>
						<p className="font-[600] text-blue-20">GC0.00</p>
					</div>

					<div
						className="flex flex-row md:text-[1rem] tracking-wider justify-between
                  self-start ">
						<p className="font-[500]">Estimated total &nbsp;&nbsp;</p>
						<p className="font-[600] text-blue-20 text-left">
							GC{isNaN(totalValue) ? 0 : totalValue}
						</p>
					</div>

					<button
						disabled={cartValue.length === 0}
						onClick={() => {
							setOpenCart((prev: boolean) => !prev);
							navigate(`/orders`);
						}}
						type="button"
						className="bg-blue-20 md:w-[40%] py-[0.4rem] px-[1rem] rounded-md self-start
                  hover:bg-blue-400 text-white text-[1.1rem] font-[500] 
                  disabled:bg-gray-300  my-[1.5rem]">
						Checkout
					</button>
				</>
			) : null}
		</div>
	);
};

export default Cart;
