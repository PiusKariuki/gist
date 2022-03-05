import useRoom from "modules/Rooms/hooks/useRoom";
import React, { useEffect, useRef } from "react";
import RecentRooms from "shared/components/RecentRooms";
import useSpinner from "shared/components/spinner/useSpinner";
import useHorizontalScroll from "shared/hooks/useHorizontalScroll";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rooms = () => {
	const { renderSpinner } = useSpinner();
	const { load, rooms, getAllRooms } = useRoom();
	useEffect(() => {
		getAllRooms();
	}, []);

	const { scrollRight, scrollLeft } = useHorizontalScroll();

	const scrollRef = useRef<any>(null);

	return (
		<div className="flex flex-col py-[3rem] px-[2rem] h-full  relative">
			<p className="text-black-40 text-[1.4rem] md:text-[2.2rem] font-[600] mb-[2rem]">
				Recent rooms
			</p>
			{renderSpinner(load)}
			<div
				ref={scrollRef}
				className="scroller flex flex-row gap-x-8 overflow-x-auto w-screen">
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
			<div
				className=" bg-[rgba(0,0,0,.3)]  hover:bg-[rgba(0,0,0,.6)]   w-[3.125rem]
                h-[3.125rem] rounded-full
               z-10 hidden lg:flex lg:absolute  left-10 top-[50%] 
               ">
				<FontAwesomeIcon
					onClick={() => scrollLeft(scrollRef)}
					icon={faArrowLeft}
					className="flex text-[1.25rem] self-center mx-auto text-[#00bcd7]"
				/>
			</div>

			<div
				className="bg-[rgba(0,0,0,.3)]  hover:bg-[rgba(0,0,0,.6)]  z-10 hidden
             lg:flex lg:absolute text-[2rem]
               w-[3.125rem] h-[3.125rem] rounded-full right-10 top-[50%]">
				<FontAwesomeIcon
					onClick={() => scrollRight(scrollRef)}
					icon={faArrowRight}
					className="flex text-[1.25rem] self-center mx-auto text-[#00bcd7]"
				/>
			</div>
		</div>
	);
};

export default Rooms;
