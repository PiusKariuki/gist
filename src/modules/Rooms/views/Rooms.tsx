import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import RoomProducts from "../components/RoomProducts";
import useRoom from "../hooks/useRoom";

interface Props {
	title: string;
	userName: string;
	shopName: string;
	shopImg: string;
	shopDescription: string;
	// products: any;
}

const Rooms = () => {
	const { room, load, getRoomById } = useRoom();
	const { renderSpinner } = useSpinner();
	let { roomId } = useParams();
	const [details, setDetails] = useState(false);

	useEffect(() => {
		getRoomById(roomId);
	}, []);


	let price = 16.5;
	return (
		<>
			<div className="flex flex-col md:flex-row gap-y-[2rem] md:min-h-screen">
				{renderSpinner(load)}
				<video
					controls
					src="/img/room.mp4"
					className="h-[30vh] md:min-h-screen md:w-[50vw]
               bg-black-70"
				/>
				<div className="flex flex-col px-[1rem] gap-y-[2rem]">
					<button className="red-btn md:absolute left-0 top-[60%]">
						from $ {price}
					</button>
					<div className="inline-flex self-center">
						<button
							className="blue-btn rounded-none hover:rounded-none bg-white 
                  hover:text-white py-[0.4rem] px-[0.8rem] text-black-40 border-y-[0.2rem]
                  border-x-[0.2rem] border-black-40">
							Details
						</button>
						{/* <button
							className="blue-btn rounded-none hover:rounded-none bg-white 
                  hover:text-white py-[0.4rem] px-[0.8rem] text-black-40 border-y-[0.2rem]
                  border-r-[0.2rem] border-black-40">
							Images
						</button> */}
					</div>

					{/* shop details */}
					<div className="flex flex-row gap-x-[1rem]">
						<div
							style={{ backgroundImage: `url(/img/${room?.shopId?.image})` }}
							className="flex w-[5rem] h-[5rem] rounded-full  self-center bg-center 
                     bg-no-repeat bg-cover"
						/>
						<div className="flex flex-col w-[16rem]">
							<p className="text-black-40 font-[900] text-[1.4rem] mb-[1rem]">
								{room?.title}
								<br />
								<span className="font-[300]">by {room?.ownerId?.userName}</span>
							</p>
						</div>
					</div>

					{/* shop description */}
					<div className="flex">
						<p className="text-[1.2rem]">{room?.shopId?.description}</p>
					</div>

					{/* products */}
					{room?.productIds?.map((product: any, key: number) => (
						<RoomProducts
							key={key}
							name={product.name}
							quantity={product.quantity}
							price={product.price}
							image={product?.images[0]}
						/>
					))}

					{/* <div className="flex flex-row flex-wrap">
						{room?.productIds?.map((product: any, key: number) => (
							<img src={product.images[]} alt="" />
						))}
					</div> */}

				</div>
			</div>
		</>
	);
};

export default Rooms;
