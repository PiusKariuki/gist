import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Shops from "../components/Shops";
import Topbar from "../components/Topbar";

const Home = () => {
	return (
		<div className="flex flex-col flex-nowrap overflow-x-clip">
			<Topbar />
			<Hero />
         <Shops />
         <Products />
		</div>
	);
};

export default Home;
