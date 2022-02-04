import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom, cartSelector } from "shared/store/Cart";
import Swal from "sweetalert2";

const useCart = () => {
	const setCartAtom = useSetRecoilState(cartAtom);
   const totalValue = useRecoilValue(cartSelector);
   const cartValue = useRecoilValue<any>(cartAtom);
	const addToCart = (
		quantity: number,
		price: number,
		image: string,
		name: string
	) => {
		setCartAtom((prev: any) => prev.push({ name, quantity, price, image }));
		Swal.fire({
			icon: "success",
			text: quantity + name + "successfully added to cart",
			timer: 1000,
		});
	};

	const removeItem = (name: string) => {
		setCartAtom((prev: any) => prev.filter((item: any) => item.name !== name));
	};

	return { addToCart,removeItem,totalValue,cartValue };
};

export default useCart;
