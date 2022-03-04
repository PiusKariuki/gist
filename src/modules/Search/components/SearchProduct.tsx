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
			className="flex flex-col rounded-3xl shadow-lg  border-[0.2rem] p-[2rem]
         flex-shrink-0"			>
			<div
				style={{ backgroundImage: `url(${imgUrl}/${img})` }}
				className="bg-cover bg-center bg-no-repeat w-[60vw] md:w-[30vw] lg:w-[24vw] h-[12rem] 
            rounded-2xl self-center border-2"
			/>
			<p className="text-gray-10 font-[900] text-[1rem] ">{name}</p>
			<p className="text-gray-10 font-[300] text-[1rem] ">
				by:&nbsp;&nbsp;&nbsp;
				<span className="font-[900]">{userName || "Pius"}</span>
			</p>
			<p className="text-gray-10 font-[900] text-[1rem] ">
				$:&nbsp;&nbsp;&nbsp;{price}
			</p>
			<button
         onClick={() => navigate(`/product/${id}`, { replace: true })}
         className="blue-btn mt-[2rem]">View</button>
		</div>
	);
};

export default SearchProduct;
