import React, { useEffect } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
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
		</div>
	);
};

export default Shops;
