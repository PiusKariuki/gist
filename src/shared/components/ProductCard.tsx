import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
	images: Array<string>;
	name: string;
	price: number;
	quantity: number;
}

const ProductCard: React.FC<Props> = ({ images, name, price, quantity }) => {
	const [img, setImg] = useState(0);

	return (
		<div className="flex flex-col relative md:w-[40%] lg:w-[28%] shadow-2xl border-2 rounded-3xl 
         py-[1.2rem] max-h-[65vh] md:max-h-[80vh] lg:max-h-[80vh] z-20">
			<div
				style={{ backgroundImage: `url(/img/${images[img]})` }}
				className=" bg-contain bg-no-repeat bg-center w-full h-[18rem] md:h-[24rem] relative
               hover:scale-125 lg:hover:scale-[1.25] z-0 transition ease-in-out  duration-500">
				{/* <button className="btn bg-green-80 absolute bottom-2 right-2 w-[5.5rem] h-[2.5rem]
               text-white font-[800]">
					MORE
				</button> */}
			</div>
			<div
				className="flex flex-col text-[1.2rem] md:text-[1.35rem] font-[800] bg-white text-center 
            py-[1rem]  rounded-2xl items-center gap-y-[0.8rem] z-20 text-black-40">
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

			<FontAwesomeIcon
				icon={faArrowLeft}
				color="green"
				size="2x"
				onClick={() =>
					setImg((prev) => (prev === 0 ? images.length - 1 : prev - 1))
				}
				className="absolute  top-[25%] left-[2%]"
			/>
			<FontAwesomeIcon
				icon={faArrowRight}
				color="green"
				size="2x"
				className="absolute  top-[25%] right-[2%] "
				onClick={() =>
					setImg((prev) => (prev === images.length - 1 ? 0 : prev + 1))
				}
			/>
		</div>
	);
};

export default ProductCard;
