import useShop from "modules/Shops/Hooks/useShop";
import React, { useEffect } from "react";
import ViewShop from "./ViewShop";
import "../styles/shop.css";

const Shops = () => {
	const { shops, getShops, errors, load } = useShop();
	useEffect(() => {
		getShops();
	}, []);
	return (
		<div className="flex flex-col py-[3rem] px-[2rem] bg-teal-50">
			<p className="text-black-40 text-[2.2rem] font-[600] mb-[2rem]">Popular shops</p>
			<div className="scroller flex flex-row gap-x-8 overflow-x-auto ">
				{shops.length > 0 &&
					shops.map((shop: any, key: number) => (
						<ViewShop
							name={shop.name}
							userName={shop.userId.userName}
							img={shop.image}
                     key={key}
						/>
					))}
			</div>
		</div>
	);
};

export default Shops;
