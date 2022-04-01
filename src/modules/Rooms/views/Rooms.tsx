import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import BuyModal from "../components/BuyModal";
import RoomImages from "../components/RoomImages";
import RoomProducts from "../components/RoomProducts";
import useRoom from "../hooks/useRoom";

interface Props {
	title: string;
	userName: string;
	shopName: string;
	shopImg: string;
	shopDescription: string;
}

const Rooms = () => {
	const { room, load, getRoomById } = useRoom();
	const { renderSpinner } = useSpinner();
	let { roomId } = useParams();
	const [details, setDetails] = useState(true);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		getRoomById(roomId);
	}, []);

	return (
		<>
			<div
				className="flex flex-col md:flex-row gap-y-[2rem] md:max-h-screen relative
            overflow-y-clip ]">
				<div className="fixed inset-y-80 inset-x-80 z-50">
					{renderSpinner(load)}
				</div>

				<video
					controls
					src="/img/room.mp4"
					className="h-[30vh] md:h-screen md:w-[50vw] lg:px-[0.3rem]
               bg-black-70"
				/>

				<div
					className="flex flex-col px-[1rem] md:px-[2rem] md:mt-[8rem] gap-y-[2rem]
               md:self-center w-full  md:h-[80vh]">
					<button
						className="red-btn py-[0.5rem] md:absolute left-2 top-[60%] lg:top-[80%]
                   mb-[4rem] z-10"
						onClick={() => setOpen((prev: boolean) => !prev)}>
						Buy
					</button>
					<div className="inline-flex sticky top-4 left-6">
						<button
							onClick={() => setDetails((prev: boolean) => !prev)}
							className={`${details ? "bg-black-80 text-white" : "bg-white"}
                     px-[3rem] py-[0.5rem] outline outline-black-80 text-[1.3rem] font-[700]
                     rounded-l-md
                     `}>
							Details
						</button>
						<button
							onClick={() => setDetails((prev: boolean) => !prev)}
							className={`${!details ? "bg-black-80 text-white" : "bg-white"}
                        px-[3rem] py-[0.5rem] outline outline-black-80 text-[1.3rem] font-[700]
                        rounded-r-md
                     `}>
							Images
						</button>
					</div>

					{/* shop details */}
					{details ? (
						<>
							<div className="flex flex-row gap-x-[1rem]">
								<div className="flex flex-col w-[16rem]">
									<p className="text-black-80 font-[900] text-[1.4rem] mb-[1rem]">
										{room?.title}
										<br />
										<span className="font-[300]">
											by {room?.ownerId?.userName}
										</span>
									</p>
								</div>
								<div
									style={{
										backgroundImage: `url(/img/${room?.shopId?.image})`,
									}}
									className="flex w-[5rem] h-[5rem] rounded-full  self-center bg-center 
                           bg-no-repeat bg-cover"
								/>
							</div>

							{/* shop description */}
							<div className="flex">
								<p className="text-[1.2rem] text-black-80">
									{room?.shopId?.description}
								</p>
							</div>
						</>
					) : null}

					{/* products */}
               
					<div className="flex flex-col md:max-h-screen overflow-y-scroll py-10">
						{details
							? room?.productIds?.map((product: any, key: number) => (
									<RoomProducts
										key={key}
										name={product.name}
										quantity={product.quantity}
										price={product.price}
										image={product?.images[0]}
									/>
							  ))
							: room?.productIds?.map((product: any, key: number) => (
									<RoomImages imgs={product.images} key={key} />
							  ))}
					</div>
					{/* room images */}

					<div className="fixed top-16  z-50">
						{open
							? room?.productIds?.map((product: any, key: number) => (
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
			</div>
		</>
	);
};

export default Rooms;
