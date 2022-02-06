import {
	faStore,
	faUserCircle,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
	let navigate = useNavigate();
	return (
		<div className="w-[90vw md:w-[40vw] min-h-screen flex flex-col gap-y-[2rem] bg-teal-50">
			<div className="flex flex-row cursor-pointer">
				<FontAwesomeIcon icon={faUserCircle} size="1x" color="blue" />
				<p className="text-[1.4rem] font-[700]">My Account</p>
			</div>
			<div
				className="flex flex-row cursor-pointer"
				onClick={() => navigate(`/myAccount/shop`)}>
				<FontAwesomeIcon icon={faStore} size="1x" color="blue" />
				<p className="text-[1.4rem] font-[700]">Manage Shop</p>
			</div>
			<div className="flex flex-row cursor-pointer">
				<FontAwesomeIcon icon={faSignOutAlt} size="1x" color="red" />
				<p className="text-[1.4rem] font-[700] text-red-20">Logout</p>
			</div>
		</div>
	);
};

export default Menu;
