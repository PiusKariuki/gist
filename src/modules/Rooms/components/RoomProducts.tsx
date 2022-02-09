import React from "react";

interface Props {
	name: string;
	price: number;
	quantity: number;
	image: string;
}

const RoomProducts: React.FC<Props> = ({ name, price, quantity, image }) => {
	return (
		<div className="flex flex-col">
			<p className="text-black-40 text-[1.4rem] underline">{name}</p>
			<div className="flex flex-row justify-around items-center">
				<p className="text-red-20 text-[1.4rem]">$ {price}</p>
				<p className="text-red-20 text-[1.4rem]"># {quantity}</p>
				<div
					style={{ backgroundImage: `url(/img/${image})` }}
					className="flex w-[4rem] h-[4rem] rounded-full bg-center bg-cover bg-no-repeat "
				/>
			</div>
		</div>
	);
};

export default RoomProducts;
