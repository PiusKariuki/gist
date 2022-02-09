import {
	faStore,
	faUserCircle,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	setMenuOpen: any;
}

const Menu: React.FC<Props> = ({ setMenuOpen }) => {
	let navigate = useNavigate();
	return (
		<div
			className="w-[90vw] md:w-[40vw] min-h-screen flex flex-col gap-y-[2rem] bg-teal-50 
         px-[2rem] py-[3rem] rounded-xl">
			<div
				className="flex flex-row cursor-pointer items-center gap-x-[1rem]"
				onClick={() => {
					navigate(`/myAccount`);
               setMenuOpen(false);
				}}>
				<FontAwesomeIcon icon={faUserCircle} size="2x" color="#1e90ff" />
				<p className="text-[1.4rem] font-[700]">My Account</p>
			</div>
			<div className="flex flex-row cursor-pointer items-center gap-x-[1rem] pl-[0.5rem]">
				<FontAwesomeIcon icon={faSignOutAlt} size="2x" color="red" />
				<p className="text-[1.4rem] font-[700] text-red-20">Logout</p>
			</div>
		</div>
	);
};

export default Menu;
