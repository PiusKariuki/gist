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
		<div className="w-full bg-white flex flex-col px-[1rem] py-[0.6rem] gap-y-[1rem]">
			<div
				className="flex flex-row flex-nowrap text-[0.9rem] text-black-40 font-[600]
          justify-between">
				<div
					style={{ backgroundImage: `url(/img/${image})` }}
					className="h-[3rem] w-[3rem] bg-cover bg-center bg-no-repeat "
				/>
				<p className="text-blue-20 text-left w-[6rem]">{name}</p>

				<p className="text-[#00000080]">$ {isNaN(price*amount)? 0: price*amount}</p>
			</div>
			<div
				className="flex flex-row flex-nowrap justify-between text-[1rem] text-black-40 
            font-[600]">
				<p className="">
					#<span className="text-blue-20 text-[1.3rem]">{amount}</span>
				</p>
			</div>
			<div className="flex flex-row justify-end">
				<FontAwesomeIcon
					onClick={() => removeItem(id)}
					icon={faTrash}
					size="1x"
					color="red"
				/>
			</div>
		</div>
	);
};

export default CartItem;
