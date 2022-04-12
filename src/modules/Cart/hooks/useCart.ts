import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom, cartOpen, cartSelector } from "shared/recoil/cart";
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
	const cart = useRecoilValue(cartAtom);

	// the id is a uuid string to identify components in the cart to avoid deleting all similr
	//products.
	const addToCart = (
		quantity: number,
		price: number,
		image: string,
		name: string,
		shopId: string,
		productId: string,
		sellerId: string,
		variation: string,
		id: string
	) => {
		const checkCart = cart.findIndex((el: any) => el.productId === productId);
		if (checkCart !== -1) {
			let filteredCart = cart.filter((el: any) => el.productId !== productId);
			setCartAtom((prev: any) => [
				{
					name: name,
					quantity: prev[checkCart].quantity + quantity,
					price: price,
					image: image,
					shopId: shopId,
					productId: productId,
					sellerId: sellerId,
					variation,
					id: id,
				},
				...filteredCart,
			]);
		} else {
			setCartAtom((prev: any) => [
				{
					name: name,
					quantity: quantity,
					price: price,
					image: image,
					shopId: shopId,
					productId: productId,
					sellerId: sellerId,
					variation,
					id: id,
				},
				...prev,
			]);
		}

		Swal.fire({
			icon: "success",
			text: "successfully added to cart",
			timer: 1000,
		});
	};
	const removeItem = (id: string) => {
		setCartAtom((prev: any) => prev.filter((item: any) => item.id !== id));
	};

	return { addToCart, removeItem, totalValue };
};

export default useCart;
