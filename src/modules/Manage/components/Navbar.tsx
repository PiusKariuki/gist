import {
	faHome,
	faUser,
	faShoppingBasket,
	faGift,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({ open, setOpen }): JSX.Element => {
	return (
		<div
			className="flex flex-col w-[80vw] md:w-[25vw] py-[3rem] px-[3rem] gap-y-[2rem] 
         relative">
			<FontAwesomeIcon
				onClick={() => setOpen(false)}
				icon={faXmark}
				size="3x"
				color="red"
				className="absolute right-10 top-8"
			/>

			{/* home */}
			<NavLink
				onClick={() => setOpen(false)}
				to="/"
				className={({ isActive }) =>
					isActive
						? "text-blue-20 flex flex-row flex-nowrap items-center  gap-x-[0.2rem] mt-[4rem]"
						: "text-black-40 flex flex-row flex-nowrap items-center  gap-x-[0.2rem] mt-[4rem]"
				}>
				<FontAwesomeIcon icon={faHome} size="1x" color="" />
				<p className="text-[0.9rem] md:text-[1.4rem] font-[700]">Home</p>
			</NavLink>
			{/* Profile */}
			<NavLink
				onClick={() => setOpen(false)}
				to="/myAccount/profile"
				className={({ isActive }) =>
					isActive
						? "text-blue-20 flex flex-row flex-nowrap items-center  gap-x-[0.2rem]"
						: "text-black-40 flex flex-row flex-nowrap items-center  gap-x-[0.2rem]"
				}>
				<FontAwesomeIcon icon={faUser} size="1x" color="#00FFFF" />
				<p className="text-[0.9rem] md:text-[1.4rem] font-[700]">User</p>
			</NavLink>
			{/* Shops */}
			<NavLink
				onClick={() => setOpen(false)}
				to="/myAccount/shops"
				className={({ isActive }) =>
					isActive
						? "text-blue-20 flex flex-row flex-nowrap items-center  gap-x-[0.2rem]"
						: "text-black-40 flex flex-row flex-nowrap items-center  gap-x-[0.2rem]"
				}>
				<FontAwesomeIcon icon={faShoppingBasket} size="1x" color="" />
				<p className="text-[0.9rem] md:text-[1.4rem] font-[700]">Shop</p>
			</NavLink>
			{/* orders */}
			<NavLink
				onClick={() => setOpen(false)}
				to="/myAccount/orders"
				className={({ isActive }) =>
					isActive
						? "text-blue-20 flex flex-row flex-nowrap items-center  gap-x-[0.2rem]"
						: "text-black-40 flex flex-row flex-nowrap items-center  gap-x-[0.2rem]"
				}>
				<FontAwesomeIcon icon={faGift} size="1x" color="" />
				<p className="text-[0.9rem] md:text-[1.4rem] font-[700] ">Orders</p>
			</NavLink>
		</div>
	);
};

export default Navbar;
