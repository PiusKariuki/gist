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
   console.log(id);
   
	return (
		<div
			className="flex relative w-[25rem] h-[40vh] bg-no-repeat bg-center bg-cover flex-shrink-0
         border-2 rounded-lg hover:shadow-2xl bg-white px-[3rem]"
			style={{
				backgroundImage: `url(${imgUrl}/${id}.png)`,
			}}
			onClick={() => navigate(`/shop/${id}`)}>
			<p className="absolute bottom-[4%] right-[40%] text-white font-[900] text-[1.2rem]
           px-2 bg-black-80">
				{name}
			</p>
		</div>
	);
};

export default ViewShop;
