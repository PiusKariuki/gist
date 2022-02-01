import React, { useState } from "react";

interface Props {
	images: Array<string>;
	name: string;
	price: number;
	quantity: number;
}

const Cards: React.FC<Props> = ({ images, name, price, quantity }) => {
	const [img, setImg] = useState(0);

	return (
		<div className="flex flex-col relative md:w-[28%] shadow-lg border-2 rounded-2xl">
			<div
				style={{ backgroundImage: `url(/img/${images[img]})` }}
				className=" bg-contain bg-no-repeat bg-center w-full h-[18rem] md:h-[24rem] relative">
				{/* <button className="btn bg-green-80 absolute bottom-2 right-2 w-[5.5rem] h-[2.5rem]
               text-white font-[800]">
					MORE
				</button> */}
			</div>
			<div
				className="flex flex-col text-[1.2rem] md:text-[1.35rem] font-[800] bg-white text-center py-[1rem] 
            rounded-2xl border-t-2 items-center gap-y-[0.8rem]">
				<p>{name}</p>
				<p className="text-red-600 font-[800]">${price}</p>
				<p>
					In Stock: <span className="text-red-600">{quantity}</span>
				</p>
				<button className="btn h-[4rem] bg-green-80 w-[12rem] text-white">
					<img src="/img/cart.png" className="h-[2rem] inline mr-auto" />
					<span>Add to cart</span>
				</button>
			</div>
			<img
				src="/img/left-chevron.svg"
				alt=""
				className="absolute h-[3rem] opacity-40 top-[25%]
            left-[2%]"
				onClick={() =>
					setImg((prev) => (prev === 0 ? images.length - 1 : prev - 1))
				}
			/>
			<img
				src="/img/right-chevron.svg"
				alt=""
				className="absolute h-[3rem] opacity-40 top-[25%]
            right-[2%] "
				onClick={() =>
					setImg((prev) => (prev === images.length - 1 ? 0 : prev + 1))
				}
			/>
		</div>
	);
};

export default Cards;
