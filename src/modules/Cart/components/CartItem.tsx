import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
	image: string;
	name: string;
	amount: number;
	price: number;
}

const CartItem: React.FC<Props> = ({ image, name, amount, price }) => {
	return (
		<div className="w-full bg-white flex flex-col border-[0.12rem] border-black-40">
			<div className="flex flex-row flex-nowrap">
				<div
					style={{ backgroundImage: `url(/img/${image})` }}
					className="border-[0.12rem]  border-black-40 h-[4rem] w-[4rem]"
				/>
				<p className="text-[1.2rem] text-black-40 font-[300]">{name}</p>
				<p className="text-[1.2rem] text-black-40 font-[300]">$ {price}</p>
			</div>
			<div className="flex flex-row flex-nowrap justify-between">
				<p className="text-[1.2rem] text-black-40 font-[300]">
					Items: {amount}
				</p>
				<FontAwesomeIcon icon={faTrash} size="1x" color="red" />
			</div>
		</div>
	);
};

export default CartItem;
