import {
	faHome,
	faUser,
	faShoppingBasket,
	faGift,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = (): JSX.Element => {
	return (
		<div className="flex flex-row flex-nowrap justify-around py-[3rem] border-b-2 border-black-40">
			{/* home */}
			<NavLink
				to="/"
				className="flex flex-row flex-nowrap items-center 
            gap-x-[0.2rem]">
				<FontAwesomeIcon icon={faHome} size="1x" color="#00FFFF" />
				<p className="text-[0.9rem] md:text-[1.4rem] font-[700] text-blue-20">Home</p>
			</NavLink>
			{/* Profile */}
			<NavLink
				to="/myAccount"
				className="flex flex-row flex-nowrap items-center 
            gap-x-[0.2rem]">
				<FontAwesomeIcon icon={faUser} size="1x" color="#00FFFF" />
				<p className="text-[0.9rem] md:text-[1.4rem] font-[700] text-blue-20">User</p>
			</NavLink>
			{/* Shops */}
			<NavLink
				to="/myAccount/shops"
				className="flex flex-row flex-nowrap items-center 
            gap-x-[0.2rem]">
				<FontAwesomeIcon icon={faShoppingBasket} size="1x" color="#00FFFF" />
				<p className="text-[0.9rem] md:text-[1.4rem] font-[700] text-blue-20">Shop</p>
			</NavLink>
			{/* orders */}
			<NavLink
				to="/myAccount/orders"
				className="flex flex-row flex-nowrap items-center 
            gap-x-[0.2rem]">
				<FontAwesomeIcon icon={faGift} size="1x" color="#00FFFF" />
				<p className="text-[0.9rem] md:text-[1.4rem] font-[700] text-blue-20">Orders</p>
			</NavLink>
		</div>
	);
};

export default Navbar;
