import React from "react";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "shared/http/Http";

interface Props {
	name: string;
	userName: string;
	img: string;
	id: string;
}

const ViewMyShops: React.FC<Props> = ({ name, userName, img, id }) => {
	let navigate = useNavigate();
	return (
		<div
			className="flex flex-col rounded-2xl shadow-lg  border-[0.2rem] p-[1rem]
       flex-shrink-0 relative">
			<img src={imgUrl+"/"+img} alt="" className="w-[24rem] h-[40vh] object-cover rounded-md" />
			<p className="text-blue-20 font-[900] text-[1.4rem] mb-[1rem]">{name}</p>
			<button
				onClick={() => navigate(`/myAccount/shops/${id}`)}
				className="blue-btn">
				View Products
			</button>
		</div>
	);
};

export default ViewMyShops;
