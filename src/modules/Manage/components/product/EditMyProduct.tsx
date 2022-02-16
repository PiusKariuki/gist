import React from "react";
import {
	faUserCircle,
	faPenToSquare,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { deleteOpen, productOpen } from "../../store/store";
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
	const setOpen = useSetRecoilState(productOpen);
	const setOpenDelete = useSetRecoilState(deleteOpen);

	return (
		<div
			className="flex flex-col px-[1rem] py-[3rem] bg-white hover:border-[0.2rem] hover:border-gray-200
         border-[0.2rem] rounded-2xl border-white shadow-2xl  relative ">
			<FontAwesomeIcon
				icon={faPenToSquare}
				size="2x"
				color="blue"
				className=" ml-auto mt-[2rem] absolute right-5 -top-5"
				onClick={() => setOpen(true)}
			/>
			<FontAwesomeIcon
				icon={faTrash}
				size="2x"
				color="red"
				className=" ml-auto mt-[2rem] absolute left-5 -top-5"
				onClick={() => setOpenDelete(true)}
			/>

			<p className="text-blue-20 font-[900] text-[1.4rem] my-[1rem]">
				{name}
				<br />
				<FontAwesomeIcon icon={faUserCircle} size="1x" color="blue" />
				&nbsp;&nbsp;&nbsp;<span className="">{userName}</span>
			</p>
			<img src="/img/lebron2.png" alt="" className="w-[24rem]" />
			<p
				className="absolute bottom-[4%] right-[10%] text-white font-[600] text-[1.2rem]
            bg-black-80 px-[1rem]">
				$ {price}
			</p>
		</div>
	);
};

export default EditMyProduct;
