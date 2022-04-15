import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useFetch from "shared/hooks/useFetch";
import BuyModal from "../components/BuyModal";
import Details from "../components/Details";
import RoomImages from "../components/RoomImages";
import Tabs from "../components/Tabs";
import Video from "../components/Video";
import "../styles/rooms.css";

interface Props {
	title: string;
	userName: string;
	shopName: string;
	shopImg: string;
	shopDescription: string;
}

const Rooms = () => {
	// const { room, load, getRoomById } = useRoom();
	const { data, getObject, load } = useFetch();

	const { renderSpinner } = useSpinner();
	let { roomId } = useParams();
	const [details, setDetails] = useState(true);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		getObject(`/rooms/rooms/${roomId}`, "GET", {});
	}, []);

	return (
		<div className="flex flex-col w-full">
			{load ? (
				renderSpinner(load)
			) : (
				<div className="flex flex-col md:flex-row w-full md:gap-x-4">
					<Video setOpen={setOpen} price={data?.productPrice} />

					<div
						className="flex flex-col w-full py-8 md:py-0 overflow-y-scroll scrolle 
               md:max-h-[80vh] border-b-2 gap-y-8">
						<Tabs setDetails={setDetails} details={details} />
						{details
							? data?.productIds?.map((product: any, key: number) => (
									<Details
										name={product?.name}
										userName={data?.ownerId?.userName}
										title={data?.title}
										description={data?.shopId?.description}
									/>
							  ))
							: //  room images
							  data?.productIds?.map((product: any, key: number) => (
									<RoomImages imgs={product.images} />
							  ))}
					</div>

					{/* products */}
					<div className="fixed top-16 right-0  z-50 shadow-2xl">
						{open
							? data?.productIds?.map((product: any, key: number) => (
									<BuyModal
										_id={product?._id}
										name={product.name}
										price={product.price}
										image={product?.images[0]}
										quantity={product?.quantity}
										open={open}
										setOpen={setOpen}
										key={key}
									/>
							  ))
							: null}
					</div>
				</div>
			)}
		</div>
	);
};

export default Rooms;
