import SearchShop from "modules/Search/components/SearchShop";
import shop from "modules/shop/Views/shop";
import React, { useEffect, useState } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useShop from "../Hooks/useShop";
import EditShopModal from "./EditShopModal";

const MyShops = () => {
	const { myShops, load, getShopsByUserId } = useShop();
	const { renderSpinner } = useSpinner();
	const [open, setOpen] = useState<boolean>(false);
	const [shopId, setShopId] = useState<string>("");
	useEffect(() => {
		getShopsByUserId();
	}, []);
	return (
		<div
			className="flex flex-row flex-wrap items-center gap-[2rem] px-[2rem] py-[3rem] 
         justify-center relative">
			{renderSpinner(load)}
			<div className="flex flex-col md:flex-row w-full gap-x-[2rem] ">
				{myShops.map((shop: any, key: number) => (
					<div className="relative" key={key}>
						<SearchShop
							key={key}
							img={shop.image}
							name={shop.name}
							userName={shop.userId.userName}
							id={shop._id}
						/>
						<button
							onClick={() => {
								setShopId(shop._id);
								setOpen(true);
							}}
							className="bg-red-20 px-[2rem] py-[1rem] rounded-lg absolute top-[5%]
                     right-[5%] text-white text-[1.4rem]">
							Edit
						</button>
					</div>
				))}
				<div className="absolute">
					<EditShopModal open={open} shopId={shopId} setOpen={setOpen}/>
				</div>
			</div>
		</div>
	);
};

export default MyShops;
