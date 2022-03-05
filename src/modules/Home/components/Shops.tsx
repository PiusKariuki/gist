import {
	faArrowLeft,
   faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useShop from "modules/shop/Hooks/useShop";
import React, { useEffect, useRef } from "react";
import useHorizontalScroll from "shared/hooks/useHorizontalScroll";
import ViewShop from "../../../shared/components/ViewShop";
import "../styles/shop.css";

const Shops = () => {
	const { shops, getShops } = useShop();
	useEffect(() => {
		getShops();
	}, []);
	const { scrollRight, scrollLeft } = useHorizontalScroll();

	const scrollRef = useRef<any>(null);

	return (
		<div className="flex flex-col py-[3rem] px-[2rem] relative">
			<p className="text-black-40 text-[1.4rem] md:text-[2.2rem] font-[600] mb-[2rem]">
				Popular shops
			</p>
			<div
				ref={scrollRef}
				className="scroller flex flex-row gap-x-8 overflow-x-scroll">
				{shops.length > 0 &&
					shops?.map((shop: any, key: number) => (
						<ViewShop
							name={shop?.name}
							userName={shop?.userId?.userName}
							img={shop?.image}
							id={shop?._id}
							key={key}
						/>
					))}
				{/*......................................
                  *FLOATING BTNS FOR HORIZONTAL SCROLL
               ......................................*/}
				<div
					className=" bg-[rgba(0,0,0,.3)]  hover:bg-[rgba(0,0,0,.6)]  w-[3.125rem] 
               h-[3.125rem] rounded-full z-10 hidden lg:flex lg:absolute  left-10 top-[50%] 
               ">
					<FontAwesomeIcon
						onClick={() => scrollLeft(scrollRef)}
						icon={faArrowLeft}
						className="flex text-[1.25rem] self-center mx-auto text-[#00bcd7]"
					/>
				</div>

				<div
					className="bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.6)] z-10 hidden lg:flex 
               lg:absolute text-[2rem] w-[3.125rem] h-[3.125rem] rounded-full right-10 top-[50%]">
					<FontAwesomeIcon
						onClick={() => scrollRight(scrollRef)}
						icon={faArrowRight}
						className="flex text-[1.25rem] self-center mx-auto text-[#00bcd7]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Shops;
