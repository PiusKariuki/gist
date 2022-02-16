import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useCart from "../hooks/useCart";

interface Props {
	image: string;
	name: string;
	amount: number;
	price: number;
	id: string;
}

const CartItem: React.FC<Props> = ({ image, name, amount, price, id }) => {
	const { removeItem } = useCart();
	return (
		<div className="flex flex-row flex-nowrap rounded-3xl  justify-around py-[2rem] items-center">
			<img src="/img/lebron2.png" alt="" className="w-[30%] " />
			{/*......................................
            *
            ......................................*/}
			<div className="flex flex-col">
				<p className="text-blue-20 md:text-[1.3rem] font-[800] capitalize">
					{name}
				</p>
				<p className="text-black-80 md:text-[1.4rem] font-[600] tracking-wider">
					{amount} x $ {price}
				</p>
			</div>
			{/*......................................
               *
               ......................................*/}
			<FontAwesomeIcon
				onClick={() => removeItem(id)}
				icon={faTrash}
				color="red"
				className="md:text-[1.5rem] font-bold"
			/>
		</div>
	);
};

export default CartItem;
