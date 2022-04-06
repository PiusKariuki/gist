import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	name: string;
	img: string;
	id: string;
}

const ViewShop: React.FC<Props> = ({ name, img, id }) => {
	let navigate = useNavigate();

	return (
		<div
			className="flex relative flex-shrink-0  card-border rounded-lg hover:shadow-2xl
         bg-white gradient"
			onClick={() => navigate(`/shop/${id}`)}>
			<img
				src={img}
				alt=""
				className="object-cover w-[18rem] h-[40vh] 3xl:w-[48rem] 3xl:h-[30vh] 
            object-center z-10 rounded-lg"
				onError={({ currentTarget }) => {
					currentTarget.onerror = null;
					currentTarget.src = "/img/picture.png";
				}}
			/>
			<p
				className="absolute bottom-[4%] right-[5%] text-white font-[900] text-[1rem]
            bg-gray-20 opacity-70 px-2 rounded-md z-10">
				{name}
			</p>
		</div>
	);
};

export default ViewShop;
