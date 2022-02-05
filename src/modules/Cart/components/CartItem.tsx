import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useCart from "../hooks/useCart";

interface Props {
	image: string;
	name: string;
	amount: number;
	price: number;
}

const CartItem: React.FC<Props> = ({ image, name, amount, price }) => {
	const { removeItem } = useCart();
	return (
		<div
			className="w-full bg-white flex flex-col border-[0.1rem] border-black-40 rounded-md 
         px-[1rem] py-[0.6rem] gap-y-[1rem]">
			<div className="flex flex-row flex-nowrap text-[1rem] text-black-40 font-[600] justify-between">
				<div
					style={{ backgroundImage: `url(/img/${image})` }}
					className="border-[0.12rem]  border-black-40 h-[4rem] w-[4rem] bg-cover bg-center
               bg-no-repeat rounded-md"
				/>
				<p className="text-blue-20 text-left w-[6rem]">{name}</p>
			</div>
			<div
				className="flex flex-row flex-nowrap justify-between text-[1rem] text-black-40 
         font-[600]">
				<p className="">
					Items: <span className="text-blue-20 text-[1.3rem]">{amount}</span>
				</p>
				<p className="text-blue-20">$ {price * amount}</p>
			</div>
			<div className="flex flex-row justify-end">
				<FontAwesomeIcon
					onClick={() => removeItem(name)}
					icon={faTrash}
					size="1x"
					color="red"
				/>
			</div>
		</div>
	);
};

export default CartItem;
