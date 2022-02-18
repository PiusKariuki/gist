import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "shared/http/Http";

interface Props {
	roomId: string;
	title: string;
	userName: string;
	price: number;
	shopImage: string;
	userImage: string;
}

const RecentRooms: React.FC<Props> = ({
	roomId,
	title,
	userName,
	price,
	shopImage,
	userImage,
}) => {
	let navigate = useNavigate();
	let img = "0_61f951620019c849882d681d.png";
	return (
		<div
			className="flex flex-col p-[1rem] bg-white hover:border-[0.2rem] hover:border-gray-200
         border-[0.2rem] rounded-2xl border-white hover:shadow-2xl relative"
			onClick={() => navigate(`/rooms/${roomId}`)}>
			<div className="flex flex-row gap-x-[1rem]">
				<div
					style={{ backgroundImage: `url(${imgUrl}/${userImage})` }}
					className="flex w-[3rem] h-[3rem] rounded-full bg-black-70 self-center bg-center 
               bg-no-repeat bg-contain"
				/>
				<div className="flex flex-col w-[16rem]">
					<p className="text-black-40 font-[900] text-[1.4rem] mb-[1rem]">
						{title}
						<br />
						<span className="font-[300]">{userName}</span>
					</p>
				</div>
			</div>

			<div
				className="flex relative w-[70vw] h-[40vh] md:w-[25rem] bg-no-repeat bg-center 
            bg-cover rounded-xl
            border-[0.1rem]"
				style={{ backgroundImage: `url(${imgUrl}/${shopImage})` }}>
				<p
					className="absolute bottom-[4%] right-[10%] text-white font-[600] text-[1.2rem]
            bg-black-80 px-[1rem]">
					from $ {price}
				</p>
			</div>
		</div>
	);
};

export default RecentRooms;
