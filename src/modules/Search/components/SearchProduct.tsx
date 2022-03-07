import React from "react";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "shared/http/Http";

interface Props {
	img: string;
	name: string;
	price: number;
	userName: string;
	id: string;
}

const SearchProduct: React.FC<Props> = ({ name, img, price, userName, id }) => {
	let navigate = useNavigate();
	return (
		<div
			className="flex flex-col rounded-lg shadow-lg pt-[0.2rem] px-[0.2rem]
         pb-[0.8rem] flex-shrink-0">
			<div className="flex gradient rounded-t-md mb-4 justify-center">
				<img
					src={`${imgUrl}/${img}`}
					className="w-[60vw] md:w-[30vw] lg:w-[24vw] h-[12rem] 
               self-center  object-scale-down"
				/>
			</div>

			<div className="flex flex-col space-y-2 px-2">
				<p className="text-blue-40 font-[600] text-[1rem] ">{name}</p>
				<p className="text-gray-10 font-[300] text-[1rem] ">
					by&nbsp;&nbsp;&nbsp;
					<span className="font-[400]">{userName || "Pius"}</span>
				</p>
				<p className="text-red-20 font-[400] text-[1rem] ">
					$:&nbsp;&nbsp;&nbsp;{price}
				</p>
				<button
					onClick={() => navigate(`/product/${id}`, { replace: true })}
					className="blue-btn w-1/3">
					View
				</button>
			</div>
		</div>
	);
};

export default SearchProduct;
