import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	name: string;
	userName: string;
	img: string;
   id: string;
}

const ViewShop: React.FC<Props> = ({ name, userName, img,id }) => {
   let navigate = useNavigate();
	return (
		<div
			className="flex relative w-[25rem] h-[40vh] bg-no-repeat bg-center bg-cover flex-shrink-0
         border-2 rounded-2xl hover:shadow-2xl"
			style={{ backgroundImage: `url(/img/${img})` }}
         onClick={()=> navigate(`/shop/${id}`)}
         >
			<p className="absolute top-[4%] right-[80%] text-black-20 font-[600] text-[1.2rem]">
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
