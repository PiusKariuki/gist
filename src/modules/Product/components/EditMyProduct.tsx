import React, { useState } from "react";
import { faUserCircle, faMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import EditProductForm from "./EditProductForm";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productOpen } from "../store/store";

interface Props {
	name: string;
	price: string;
	img: string;
	userName: string;
	id: string;
}

const EditMyProduct: React.FC<Props> = ({
	name,
	price,
	img,
	userName,
	id,
}): JSX.Element => {
	let navigate = useNavigate();
	const setOpen = useSetRecoilState(productOpen);
	const open = useRecoilValue(productOpen);
	// console.log(open);

	return (
		<div
			className="flex flex-col p-[1rem] bg-white hover:border-[0.2rem] hover:border-gray-200
         border-[0.2rem] rounded-2xl border-white hover:shadow-2xl z-0">
			<FontAwesomeIcon
				icon={faMarker}
				size="2x"
				color="blue"
				className=" ml-auto mt-[2rem]"
				onClick={() => setOpen(true)}
			/>
			<p className="text-blue-20 font-[900] text-[1.4rem] mb-[1rem]">
				{name}
				<br />
				<FontAwesomeIcon icon={faUserCircle} size="1x" color="blue" />
				&nbsp;&nbsp;&nbsp;<span className="">{userName}</span>
			</p>
			<div
				className="flex relative w-[70vw] h-[40vh] md:w-[25rem] bg-no-repeat bg-center bg-cover 
            rounded-xl  border-[0.1rem]"
				style={{ backgroundImage: `url(/img/${img})` }}>
				<p
					className="absolute bottom-[4%] right-[10%] text-white font-[600] text-[1.2rem]
            bg-black-80 px-[1rem]">
					$ {price}
				</p>
			</div>

			{/*edit modal */}
			{open ? (
				<div className="absolute left-0">
					<EditProductForm productId={id} />
				</div>
			) : null}
		</div>
	);
};

export default EditMyProduct;
