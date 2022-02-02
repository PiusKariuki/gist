import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div
			className="flex flex-row  px-[3rem] gap-x-[2rem] py-[1rem] items-center
         justify-around font-[900] text-[0.8rem] md:text-[1.2rem] uppercase text-black-40
   ">
			<NavLink
				to="/"
				className={({ isActive }) =>
					`${
						isActive
							? "border-b-[0.2rem] border-blue-20 pb-[0.5rem] md:pb-[1rem] md:px-[1.2rem]"
							: "border-0 pb-[0.5rem] md:pb-[1rem] md:px-[1.2rem]"
					} }`
				}>
				PRODUCTS
			</NavLink>
			<NavLink
				to="/shops"
				className={({ isActive }) =>
					`${
						isActive
							? "border-b-[0.2rem] border-blue-20 pb-[0.5rem] md:pb-[1rem] md:px-[1.2rem]"
							: "border-0 pb-[0.5rem] md:pb-[1rem] md:px-[1.2rem]"
					} }`
				}>
				Shops
			</NavLink>
			<NavLink
				to="/"
				className={({ isActive }) =>
					`${
						isActive
							? "border-b-[0rem] border-blue-20 pb-[0.5rem] md:pb-[1rem] md:px-[1.2rem]"
							: "border-0 pb-[0.5rem] md:pb-[1rem] md:px-[1.2rem]"
					} }`
				}>
				Orders
			</NavLink>
			<NavLink
				to="/"
				className={({ isActive }) =>
					`${
						isActive
							? "border-b-[0rem] border-blue-20 pb-[0.5rem] md:pb-[1rem] md:px-[1.2rem]"
							: "border-0 pb-[0.5rem] md:pb-[1rem] md:px-[1.2rem]"
					} }`
				}>
				Cart
			</NavLink>
		</div>
	);
};

export default Navbar;
