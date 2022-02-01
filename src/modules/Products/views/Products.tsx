import React from "react";
import Cards from "../components/Cards";

const Products = () => {
	return (
		<div className="flex flex-col md:flex-row flex-wrap px-[2rem] py-[3rem] w-screen 
         justify-around gap-y-[2.2rem]">
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
		</div>
	);
};

export default Products;
