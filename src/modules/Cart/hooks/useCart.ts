import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom, cartSelector,cartOpen } from "shared/store/Cart";
import Swal from "sweetalert2";

interface Cart {
	quantity: number;
	price: number;
	image: string;
	name: string;
	shopId: string;
}


const useCart = () => {
	const setCartAtom = useSetRecoilState<any>(cartAtom);
	const totalValue = useRecoilValue(cartSelector);
   

	const addToCart = (
		quantity: number,
		price: number,
		image: string,
		name: string,
		shopId: string,
      id:string
	) => {
		setCartAtom((prev: any) => [
			{
				name: name,
				quantity: quantity,
				price: price,
				image: image,
				shopId: shopId,
            id: id,
			},...prev,
		]);
      
		Swal.fire({
			icon: "success",
			text: "successfully added to cart",
			timer: 1000,
		});
	};
	const removeItem = (id: string) => {
		setCartAtom((prev: any) => prev.filter((item: any) => item.id !== id));
	};

	return { addToCart, removeItem, totalValue};
};

export default useCart;
