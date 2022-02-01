import React from "react";
import Card from "../Components/Card";

const Shops = () => {
	return (
		<div
			className="flex flex-col md:flex-row flex-wrap px-[2rem] py-[3rem] w-screen 
         justify-around gap-y-[2.2rem]">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default Shops;
