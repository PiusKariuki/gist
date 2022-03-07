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
			className="flex relative w-[18rem] h-[40vh] 3xl:w-[48rem] 3xl:h-[30vh] bg-no-repeat
          bg-center bg-cover flex-shrink-0  border-2 rounded-xl hover:shadow-2xl
           bg-white px-[3rem]"
			style={{
				backgroundImage: `url(${imgUrl}/6221ba43b6df2720266b5b3b.png)`,
			}}
			onClick={() => navigate(`/shop/${id}`)}>
			<p
				className="absolute bottom-[4%] left-[5%] text-white font-[900] text-[1rem]
            px-2 rounded-md z-10">
				{name}
			</p>
		</div>
	);
};

export default ViewShop;
