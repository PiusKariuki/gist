import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Shops from "../components/Shops";
import Topbar from "../../../shared/components/Topbar";
import { Route, Routes, } from "react-router-dom";
import Searching from "../components/Searching";



const Preview = () => {
	return (
		<>
			<Hero />
			<Shops />
			<Products />
		</>
	);
};

const Home = () => {
	return (
		<div className="flex flex-col flex-nowrap overflow-x-clip">
			<Topbar />
			<Routes>
				<Route index element={<Preview />} />
				<Route path="/search/*" element={<Searching />} />
			</Routes>
		</div>
	);
};

export default Home;
