import {
	faHome,
	faUser,
	faShoppingBasket,
	faGift,
   faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = (): JSX.Element => {
	return (
		<div
			className="flex flex-row bg-white px-[0.5rem] py-[2rem] lg:py-[1rem] lg:px-[4rem]
           space-x-2  lg:space-x-5 w-screen shadow-xl">
			{/*......................................
            *HOME
         ......................................*/}
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive
						? "text-blue-20 flex flex-row flex-nowrap items-center  space-x-[0.2rem]"
						: "text-black-80 flex flex-row flex-nowrap items-center  space-x-[0.2rem]"
				}>
				<FontAwesomeIcon icon={faHome} size="1x" color="" />
				<p className="hidden md:flex text-[0.9rem] md:text-[1.2rem] font-[400]">
					home
				</p>
			</NavLink>
			<p className="lg:text-[2rem] text-black-80 font-[500] self-start">/</p>
			{/*......................................
               *PROFILE
            ......................................*/}
			<NavLink
				to="/myAccount/profile"
				className={({ isActive }) =>
					isActive
						? "text-blue-20 flex flex-row flex-nowrap items-center  space-x-[0.2rem]"
						: "text-black-80 flex flex-row flex-nowrap items-center  space-x-[0.2rem]"
				}>
				<FontAwesomeIcon icon={faUser} size="1x" color="" />
				<p className="hidden md:flex text-[0.9rem] md:text-[1.2rem] font-[400]">
					profile
				</p>
			</NavLink>
			<p className="lg:text-[2rem] text-black-80 font-[500] self-center">/</p>
			{/*......................................
            *SHOP
         ......................................*/}
			<NavLink
				to="/myAccount/shops"
				className={({ isActive }) =>
					isActive
						? "text-blue-20 flex flex-row flex-nowrap items-center  space-x-[0.2rem]"
						: "text-black-80 flex flex-row flex-nowrap items-center  space-x-[0.2rem]"
				}>
				<FontAwesomeIcon icon={faShoppingBasket} size="1x" color="" />
				<p className="text-[0.9rem] md:text-[1.2rem] font-[400]">my shop</p>
			</NavLink>
			<p className="lg:text-[2rem] text-black-80 font-[500] self-start">/</p>
			{/*......................................
            *ORDERS
         ......................................*/}
			<NavLink
				to="/myAccount/orders"
				className={({ isActive }) =>
					isActive
						? "text-blue-20 flex flex-row flex-nowrap items-center  space-x-[0.2rem]"
						: "text-black-80 flex flex-row flex-nowrap items-center  space-x-[0.2rem]"
				}>
				<FontAwesomeIcon icon={faTruck} size="1x" color="" />
				<p className="text-[0.9rem] md:text-[1.2rem] font-[400]">my orders</p>
			</NavLink>
			<p className="lg:text-[2rem] text-black-80 font-[500] self-start">/</p>
		</div>
	);
};

export default Navbar;
