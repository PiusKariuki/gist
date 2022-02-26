import React from "react";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "shared/http/Http";
import { faEdit, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
			className="flex flex-col rounded-2xl shadow-lg  border-[0.2rem] p-[1rem]
       flex-shrink-0 relative">
			<img
				src={imgUrl + "/" + img}
				alt=""
				className="w-[24rem] h-[40vh] lg:w-[24rem] 3xl:w-[45rem] object-cover rounded-md"
			/>
			<p className="text-blue-20 font-[900] text-[1.4rem] mb-[1rem]">{name}</p>
			<button
				onClick={() =>navigate(`/myAccount/shops/products/${id}`)}
				className="blue-btn">
				View Products
			</button>
			{/* absolute btns */}
			<button
				onClick={() => {
					navigate(`/myAccount/shops/add/${id}`);
				}}
				className=" px-[1rem] py-[0.4rem] rounded-lg absolute top-[5%]
                     left-[5%] text-[1rem] bg-white">
				<FontAwesomeIcon
					icon={faPlus}
					size="1x"
					className="self-center"
					color="red"
				/>
			</button>
			<button
				onClick={() => {

					navigate(`/myAccount/shops/edit/${id}`);
				}}
				className=" px-[1rem] py-[0.4rem] rounded-lg absolute top-[5%] 
                     right-[5%] text-[1rem]  bg-white">
				<FontAwesomeIcon
					onClick={() => {
						navigate(`/myAccount/shops/edit/${id}`);
					}}
					icon={faPen}
					size="1x"
					className="self-center"
					color="blue"
				/>
			</button>
		</div>
	);
};

export default ViewMyShops;
