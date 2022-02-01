import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div
			className="flex flex-row bg-amber-100 px-[3rem] gap-x-[2rem] py-[1rem] items-center
         justify-between font-[600] text-[0.8rem] md:text-[1.2rem] uppercase
   ">
			<Link to="/">Home</Link>
			<Link to="/">Shop</Link>
			<Link to="/">Orders</Link>
			<Link to="/">Cart</Link>
		</div>
	);
};

export default Navbar;
