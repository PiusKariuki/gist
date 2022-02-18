import useRoom from "modules/Rooms/hooks/useRoom";
import React, { useEffect, useRef } from "react";
import RecentRooms from "shared/components/RecentRooms";
import useSpinner from "shared/components/spinner/useSpinner";
import useHorizontalScroll from "shared/hooks/useHorizontalScroll";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rooms = () => {
	const { renderSpinner } = useSpinner();
	const { load, rooms, getAllRooms } = useRoom();
	useEffect(() => {
		getAllRooms();
	}, []);

	const { scrollRight, scrollLeft } = useHorizontalScroll();

	console.log(rooms);

	const scrollRef = useRef<any>(null);

	return (
		<div className="flex flex-col py-[3rem] px-[2rem] h-full w-screen relative">
			<p className="text-black-40 text-[2.2rem] font-[600] mb-[2rem]">
				Recent rooms
			</p>
			{renderSpinner(load)}
			<div
				ref={scrollRef}
				className="scroller flex flex-row gap-x-8 overflow-x-auto w-screen">
				{/* {products.map((product: any, key: number) => (
					<RecentRooms
						name={product?.name}
						userName={product?.ownerId?.userName}
						img={product?.images[0]}
						price={product?.price}
						key={key}
						id={product?._id}
					/>
				))} */}
				{rooms.map((room: any, key: number) => (
					<RecentRooms
						title={room?.title}
						userName={room?.ownerId?.userName}
						price={room?.productPrice}
						shopImage={room?.shopId?.image}
						userImage={room?.ownerId?._id + ".png"}
						roomId={room?._id}
						key={key}
					/>
				))}
			</div>
			{/*......................................
                  *FLOATING BTNS FOR HORIZONTAL SCROLL
               ......................................*/}
			<FontAwesomeIcon
				onClick={() => scrollLeft(scrollRef)}
				icon={faAnglesLeft}
				className="z-10 hidden lg:flex lg:absolute text-[4rem] left-10 top-[50%] text-gray-300"
			/>
			<FontAwesomeIcon
				onClick={() => scrollRight(scrollRef)}
				icon={faAnglesRight}
				className="z-10 hidden lg:flex lg:absolute text-[4rem] right-10 top-[50%] text-gray-300"
			/>
		</div>
	);
};

export default Rooms;
