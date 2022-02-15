import useShop from "modules/shop/Hooks/useShop";
import React, { useEffect } from "react";
import ViewShop from "../../../../shared/components/ViewShop";
import "../styles/shop.css";

const Edit = () => {
	const { shops, getShops, errors, load } = useShop();
	useEffect(() => {
		getShops();
	}, []);
	return (
		<div className="flex flex-col py-[3rem] px-[2rem] bg-teal-50">
			<p className="text-black-40 text-[2.2rem] font-[600] mb-[2rem]">
				Popular shops
			</p>
			<div className="scroller flex flex-row gap-x-8 overflow-x-auto ">
				{shops.length > 0 &&
					shops.map((shop: any, key: number) => (
						<ViewShop
							name={shop.name}
							userName={shop.userId.userName}
							img={shop.image}
							id={shop._id}
							key={key}
						/>
					))}
			</div>
		</div>
	);
};

export default Edit;