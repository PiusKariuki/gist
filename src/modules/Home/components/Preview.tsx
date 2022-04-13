import React from "react";
import Hero from "./Hero";
import Products from "./products/HomeProducts";
import Rooms from "./rooms/Rooms";
import Shops from "./shops/PopularShops";
import Upcoming from "./Upcoming/Upcoming";

const Preview = () => {
	return (
		<>
			<Hero />
         <Upcoming />
			<Shops />
			<Products />
			<Rooms />
		</>
	);
};

export default Preview;
