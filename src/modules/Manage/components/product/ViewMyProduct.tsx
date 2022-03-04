import React from "react";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetRecoilState } from "recoil";
import { deleteOpen, productOpen } from "../../store/store";
import { imgUrl } from "shared/http/Http";
import { useNavigate } from "react-router-dom";

interface Props {
	name: string;
	price: string;
	images: string;
	userName: string;
	id: string;
}

const ViewMyProduct: React.FC<Props> = ({
	name,
	price,
	images,
	userName,
	id,
}): JSX.Element => {
	const setOpen = useSetRecoilState(productOpen);
	const setOpenDelete = useSetRecoilState(deleteOpen);
	let navigate = useNavigate();

	return (
		<div
			className="flex flex-col px-[1rem] py-[3rem] bg-white hover:border-[0.2rem] 
         hover:border-gray-200 border-[0.2rem] rounded-2xl border-white shadow-2xl  relative ">
			<FontAwesomeIcon
				icon={faPenToSquare}
				color="blue"
				className=" absolute right-5 top-3 font-[300] text-[1.6rem]"
				onClick={() => navigate(`/myAccount/shops/products/edit/${id}`)}
			/>
			<FontAwesomeIcon
				icon={faTrash}
				color="red"
				className=" ml-auto mt-[2rem] absolute left-5 -top-5 font-[300] text-[1.6rem]"
				onClick={() => setOpenDelete(true)}
			/>

			<p className="text-blue-20 font-[500] text-[1.4rem] my-[1rem]">{name}</p>
			<img
				src={`${imgUrl}/${images[0]}`}
				alt=""
				className="h-[35vh] md:h-[25vh] lg:h-[30vh] w-[80vw] md:w-[38vw] 
            lg:w-[20rem] 2xl:w-[23rem] 3xl:w-[45rem] object-cover  rounded-md"
			/>

			<button
				onClick={() => navigate(`/myAccount/shops/products/preview/${id}`)}
				className="absolute bottom-[4%] left-[10%] bg-gray-20 px-[1rem] py-[0.3rem] 
            rounded-md text-white font-bold">
				View Product
			</button>

			<p
				className="absolute bottom-[4%] right-[10%] text-white font-[600] text-[1.2rem]
            bg-black-80 px-[1rem]">
				GC {price}
			</p>
		</div>
	);
};

export default ViewMyProduct;
