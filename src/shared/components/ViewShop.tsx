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
			className="flex relative w-[18rem] h-[40vh] bg-no-repeat bg-center bg-cover flex-shrink-0
         border-2 rounded-lg hover:shadow-2xl bg-white px-[3rem]"
			style={{
				backgroundImage: `url(${imgUrl}/6221ba43b6df2720266b5b3b.png)`,
			}}
			onClick={() => navigate(`/shop/${id}`)}>
			<p
				className="absolute bottom-[4%] right-[5%] text-white font-[500] text-[1rem]
           px-2 bg-black-80 opacity-80 rounded-md">
				{name}
			</p>
		</div>
	);
};

export default ViewShop;
