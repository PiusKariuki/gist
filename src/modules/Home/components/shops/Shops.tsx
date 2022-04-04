import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useShop from "modules/shop/Hooks/useShop";
import React, { useEffect, useRef } from "react";
import useHorizontalScroll from "shared/hooks/useHorizontalScroll";
import ViewShop from "./ViewShop";
import "../../styles/shop.css";
import useSpinner from "shared/components/spinner/useSpinner";

const Shops = () => {
	const { shops, getRecentShops, load } = useShop();
	useEffect(() => {
		getRecentShops();
	}, []);
	const { scrollRight, scrollLeft } = useHorizontalScroll();
	const { renderSpinner } = useSpinner();
	const scrollRef = useRef<any>(null);

	return (
		<div className="flex flex-col py-[3rem] px-[2rem] relative">
			<p className="text-black-40 text-[1.2rem] md:text-[1.6rem] font-[700] mb-[2rem]">
				Popular shops
			</p>
			{renderSpinner(load)}
			<div
				ref={scrollRef}
				className="scroller flex flex-row gap-x-8 overflow-x-scroll">
				{shops.length > 0 &&
					shops?.map((shop: any, key: number) => (
						<ViewShop
							name={shop?.name}
							img={shop?.image}
							id={shop?._id}
							key={key}
						/>
					))}
				{/*......................................
                  *FLOATING BTNS FOR HORIZONTAL SCROLL
               ......................................*/}
				{shops?.length && shops.length > 5 ? (
					<>
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
					</>
				) : null}
			</div>
		</div>
	);
};

export default Shops;
