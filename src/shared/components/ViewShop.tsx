import React from "react";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "shared/http/Http";

interface Props {
	name: string;
	userName: string;
	img: string;
	id: string;
}

const ViewShop: React.FC<Props> = ({ name, userName, img, id }) => {
	let navigate = useNavigate();
	return (
		<div
			className="flex relative w-[25rem] h-[40vh] bg-no-repeat bg-center bg-contain flex-shrink-0
         border-2 rounded-2xl hover:shadow-2xl"
			style={{
				backgroundImage: `url(http://52.43.151.113/public/img/6209661b66d82e5452cff1d1.png)`,
			}}
			onClick={() => navigate(`/shop/${id}`)}>
			<img
				src="http://52.43.151.113/public/img/6209661b66d82e5452cff1d1.png"
				alt=""
				className="w-10 h-10"
			/>
			<p className="absolute top-[4%] left-[10%] text-black-20 font-[600] text-[1.2rem]">
				<span className="text-black-40">by</span>&nbsp;&nbsp;
				{userName}
			</p>
			<p className="absolute bottom-[4%] right-[40%] text-blue-20 font-[900] text-[1.4rem]">
				{name}
			</p>
		</div>
	);
};

export default ViewShop;
