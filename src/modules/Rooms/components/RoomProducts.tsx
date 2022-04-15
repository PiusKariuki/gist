import React from "react";

interface Props {
	name: string;
	price: number;
	quantity: number;
	image: string;
}

const RoomProducts: React.FC<Props> = ({ name, price, quantity, image }) => {
	return (
		<div className="flex flex-col min-h-[30vh]">
			<p className="text-black-80 text-[1.4rem] font-[700] underline">{name}</p>
		</div>
	);
};

export default RoomProducts;
