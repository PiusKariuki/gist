import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "shared/http/Http";
import useGetOrder from "../hooks/useGetOrder";
import useMyOrders from "../hooks/useMyOrders";
interface Props {
	order: any;
	orderId: string;
	setOpenView: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewOrder: React.FC<Props> = ({ order, setOpenView }) => {
	let navigate = useNavigate();

	return (
		<div
			className="flex flex-col p-[1rem] bg-white hover:border-[0.2rem] hover:border-gray-200
         border-[0.2rem] rounded-2xl  hover:shadow-2xl relative ">
			<FontAwesomeIcon
				icon={faXmark}
				size="2x"
				color="red"
				className="absolute right-[5%] top-[4%]"
				onClick={() => setOpenView(false)}
			/>

			<div className="flex flex-row gap-x-[1rem]">
				<img src="" alt="" />
				<div className="flex flex-col w-[16rem]">
					<p className="text-black-40 font-[900] text-[1.4rem] mb-[1rem]">
						{order?.itemId?.productId?.name}
						<br />
						{/* <span className="font-[300]">{userName}</span> */}
					</p>
				</div>
			</div>

			<div
				className="flex relative w-[70vw] h-[40vh] md:w-[25rem] bg-no-repeat bg-center 
            bg-cover rounded-xl
            border-[0.1rem]"
				style={{
					backgroundImage: `url(${imgUrl}/${order?.itemId?.productId}.png)`,
				}}>
				<p
					className="absolute bottom-[4%] right-[10%] text-white font-[600] text-[1.2rem]
            bg-black-80 px-[1rem]">
					$ {order?.totalCost}
				</p>
			</div>
		</div>
	);
};

export default ViewOrder;
