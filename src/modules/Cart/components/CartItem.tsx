import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { imgUrl } from "shared/http/Http";
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
		<div className="flex flex-row flex-nowrap rounded-3xl py-[2rem] items-center
      space-x-[1rem] lg:space-x-[3rem] w-full">
			<img src={`${imgUrl}/${image}`} alt="" className="flex w-[4rem] lg:w-[8rem]" />
			{/*.....................................rem.
            *
            ......................................*/}
			<div className="flex flex-col w-full flex-wrap">
				<p className="text-blue-20 md:text-[1.3rem] font-[800] capitalize truncate">
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