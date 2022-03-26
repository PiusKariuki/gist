import React from "react";
import { useNavigate } from "react-router-dom";

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
			className="flex relative w-[18rem] h-[40vh] 3xl:w-[48rem] 3xl:h-[30vh] bg-no-repeat
          bg-center bg-cover flex-shrink-0  card-border rounded-md hover:shadow-2xl
           bg-white px-[3rem]"
			style={{
				backgroundImage: `url(${img})`,
			}}
			onClick={() => navigate(`/shop/${id}`)}>
			<p
				className="absolute bottom-[4%] right-[5%] text-white font-[900] text-[1rem]
            bg-gray-20 opacity-70 px-2 rounded-md z-10">
				{name}
			</p>
		</div>
	);
};

export default ViewShop;
