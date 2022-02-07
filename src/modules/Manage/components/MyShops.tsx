import SearchShop from "modules/Search/components/SearchShop";
import React, { useEffect } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useShop from "../Hooks/useShop";

const MyShops = () => {
	const { myShops, load, getShopsByUserId } = useShop();
   const {renderSpinner} = useSpinner();
	useEffect(() => {
		getShopsByUserId();
	}, []);
	return (
		<div className="flex flex-row flex-wrap items-center gap-[2rem] px-[2rem] py-[3rem] justify-center">
         {renderSpinner(load)}
			<div className="flex flex-col md:flex-row w-full gap-x-[2rem]">
				{myShops.map((shop: any, key: number) => (
					<SearchShop
						key={key}
						img={shop.image}
						name={shop.name}
						userName={shop.userId.userName}
						id={shop._id}
					/>
				))}
			</div>
		</div>
	);
};

export default MyShops;
