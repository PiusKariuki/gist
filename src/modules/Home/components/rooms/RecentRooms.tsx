import React from "react";
import { useNavigate } from "react-router-dom";

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
			className="flex flex-col px-[0.5rem] py-[0.3rem] bg-white card-border
         rounded-md hover:shadow-2xl relative"
			onClick={() => navigate(`/rooms/${roomId}`)}>
			<div className="flex flex-row gap-x-[1rem]">
				<div className="flex gradient rounded-full h-8 w-8 border-[.1rem] border-gray-300">
					<img
						src={userImage}
						alt=""
						className="w-8 h-8 rounded-full self-center object-scale-down"
						onError={({ currentTarget }) => {
							currentTarget.onerror = null;
							currentTarget.src = "/img/picture.png";
						}}
					/>
				</div>

				<div className="flex flex-col w-[16rem]">
					<p className="text-black-40 font-[500] text-[1rem] mb-[1rem]">
						{title}
						<br />
						<span className="font-[300]">{userName}</span>
					</p>
				</div>
			</div>

			<div className="flex relative gradient border-[0.0625rem] rounded-md">
				<img
					src={shopImage}
					alt=""
					className="h-[40vh] md:w-[25rem]  3xl:w-[48rem] 3xl:h-[30vh] object-scale-down"
					onError={({ currentTarget }) => {
						currentTarget.onerror = null;
						currentTarget.src = "/img/picture.png";
					}}
				/>
			</div>
		</div>
	);
};

export default RecentRooms;
