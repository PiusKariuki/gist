import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useShop from "modules/shop/Hooks/useShop";
import React, { useEffect, useRef } from "react";
import useHorizontalScroll from "shared/hooks/useHorizontalScroll";
import ViewShop from "../../../shared/components/ViewShop";
import "../styles/shop.css";

const Shops = () => {
	const { shops, getShops, errors, load } = useShop();
	useEffect(() => {
		getShops();
	}, []);
	const { scrollRight, scrollLeft } = useHorizontalScroll();

	const scrollRef = useRef<any>(null);

	return (
		<div className="flex flex-col py-[3rem] px-[2rem] relative">
			<p className="text-black-40 text-[2.2rem] font-[600] mb-[2rem]">
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
				<FontAwesomeIcon
					onClick={() => scrollLeft(scrollRef)}
					icon={faAnglesLeft}
					color="#89CFF0"
					className="z-10 hidden lg:flex lg:absolute text-[4rem] left-10 top-[50%] "
				/>
				<FontAwesomeIcon
					onClick={() => scrollRight(scrollRef)}
					icon={faAnglesRight}
					color="#89CFF0"
					className="z-10 hidden lg:flex lg:absolute text-[4rem] right-10 top-[50%] "
				/>
			</div>
		</div>
	);
};

export default Shops;
