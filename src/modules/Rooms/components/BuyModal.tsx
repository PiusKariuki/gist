import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	open: boolean;
	setOpen: any;
	name: string;
	price: number;
	quantity: number;
	_id: string;
	image: string;
}
const BuyModal: React.FC<Props> = ({
	open,
	setOpen,
	name,
	price,
	quantity,
	image,
	_id,
}) => {
	let navigate = useNavigate();
	return (
		<div
			className="flex flex-col w-[90vw] md:w-[48vw]  bg-white rounded-md shadow-xl relative 
         min-h-screen gap-y-[2rem] py-[3rem] px-[1rem]  ">
			<p className="text-[1.4rem] text-center font-[700]">
				Products available for purchase
			</p>
         <FontAwesomeIcon icon={faXmark} size="2x" color="red"  className="absolute top-5 left-12"
         onClick={()=>setOpen(false)}
         />
			<hr />

			<div className="flex flex-row justify-around ">
				<div
					style={{ backgroundImage: `url(/img/${image})` }}
					className="w-[4rem] h-4rem] bg-contain bg-no-repeat bg-center rounded-xl border-2"
				/>
				<div className="flex flex-col">
					<p className="text-[1rem] font-[700] text-black-40 flex- flex-wrap">
						{name}
					</p>
					<p className="text-[1rem] text-red-20">GC. {price}</p>
					<p className="text-[1rem] text-black-40">{quantity}</p>
				</div>
				<div className="flex">
					<button
						className="red-btn py-[0.3rem] px-[0.3rem] w-[4rem] h-[4rem] bg-white text-red-20 
                  border-2 border-red-20 hover:text-white"
						onClick={() => navigate(`/product/${_id}`)}>
						Buy
					</button>
				</div>
			</div>
         <hr />
		</div>
	);
};

export default BuyModal;
