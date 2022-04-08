import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
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
			className="flex flex-col rounded-lg shadow-lg card-border px-[0.5rem] py-[0.8rem]
         flex-shrink-0 relative">
			<div className="flex gradient rounded-md  border-[0.1rem] border-gray-300">
				<img
					src={img}
					alt=""
					className="h-[35vh] md:h-[25vh] lg:h-[30vh] w-[80vw] md:w-[38vw] 
               lg:w-[23rem] 2xl:w-[23rem] 3xl:w-[45rem] object-cover  rounded-md"
               	onError={({ currentTarget }) => {
							currentTarget.onerror = null;
							currentTarget.src = "/img/picture.png";
						}}
				/>
			</div>
			<p className="text-blue-20 font-[900] text-[1rem] my-[1rem]">{name}</p>
			<Link to={`/myAccount/shops/products/${id}`} className="card-link">
				view products
			</Link>
			{/* absolute btns */}
			<button
				onClick={() => {
					navigate(`/myAccount/shops/add/${id}`);
				}}
				className=" px-[0.8rem] py-[0.1rem] rounded-lg absolute top-[6%]
            left-[5%] bg-white">
				<FontAwesomeIcon
					icon={faPlus}
					className="self-center text-[0.8rem]"
					color="red "
				/>
			</button>
			<button
				onClick={() => {
					navigate(`/myAccount/shops/edit/${id}`);
				}}
				className="px-[0.8rem] py-[0.1rem] rounded-lg absolute top-[6%]  right-[5%] text-[1rem]
            bg-white">
				<FontAwesomeIcon
					onClick={() => {
						navigate(`/myAccount/shops/edit/${id}`);
					}}
					icon={faPen}
					className="self-center text-gray-20 text-[0.8rem]"
				/>
			</button>
		</div>
	);
};

export default ViewMyShops;
