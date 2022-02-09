import React from "react";
import { useNavigate } from "react-router-dom";

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
			className="flex flex-col rounded-2xl shadow-lg  border-[0.2rem] p-[2rem]
       flex-shrink-0 relative"
			onClick={() => navigate(`/myAccount/shops/${id}`)}>
			<div
				style={{ backgroundImage: `url(/img/${img})` }}
				className="bg-contain bg-center bg-no-repeat w-[60vw] md:w-[30vw] lg:w-[24vw] h-[12rem] rounded-2xl"
			/>
			<p className="text-blue-20 font-[900] text-[1.4rem] mb-[1rem]">{name}</p>
			<p className="text-black-40 font-[900] text-[1.4rem] mb-[1rem]">
				by:&nbsp;&nbsp;&nbsp;{userName}
			</p>

		</div>
	);
};

export default ViewMyShops;