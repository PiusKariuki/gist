import React, { useEffect } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import Card from "../../../shared/components/ShopCard";
import useShop from "../Hooks/useShop";

const Shops = () => {
	const { shops, getShops, errors, load } = useShop();
	const { renderSpinner } = useSpinner();

	useEffect(() => {
		getShops();
	}, []);

	return (
		<div
			className="flex flex-col md:flex-row flex-wrap px-[2rem] py-[3rem] w-screen 
         justify-around gap-y-[2.2rem]">
			{renderSpinner(load)}
			{shops.length > 1 &&
				shops.map((shop: any, key: number) => (
					<Card
						name={shop.name}
						image={shop.image}
						location={shop.location}
                  shopId={shop._id}
						key={key}
					/>
				))}
		</div>
	);
};

export default Shops;
