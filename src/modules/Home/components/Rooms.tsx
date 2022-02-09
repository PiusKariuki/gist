import useRoom from "modules/Rooms/hooks/useRoom";
import React, { useEffect } from "react";
import RecentRooms from "shared/components/RecentRooms";
import useSpinner from "shared/components/spinner/useSpinner";

const Rooms = () => {
	const { renderSpinner } = useSpinner();
	const { load, rooms, getAllRooms } = useRoom();
	useEffect(() => {
		getAllRooms();
	}, []);

	return (
		<div className="flex flex-col py-[3rem] px-[2rem] h-full w-screen">
			<p className="text-black-40 text-[2.2rem] font-[600] mb-[2rem]">
				Recent rooms
			</p>
			{renderSpinner(load)}
			<div className="scroller flex flex-row gap-x-8 overflow-x-auto w-screen">
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
					<RecentRooms roomId={room?._id} key={key} />
				))}
			</div>
		</div>
	);
};

export default Rooms;
