import {
	faStore,
	faUser,
	faArrowRightFromBracket,
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
			className="w-[90vw] md:w-[40vw] min-h-screen flex flex-col gap-y-[2rem] 
         px-[2rem] py-[3rem]">
			<div
				className="flex flex-row cursor-pointer items-center gap-x-[1rem]"
				onClick={() => {
					navigate(`/myAccount`);
					setMenuOpen(false);
				}}>
				<FontAwesomeIcon icon={faUser} size="2x" color="#6F00FF" />
				<p className="text-[1.4rem] font-[700]">My Account</p>
			</div>
			<div className="flex flex-row cursor-pointer items-center gap-x-[1rem] pl-[0.5rem]">
				<FontAwesomeIcon
					icon={faArrowRightFromBracket}
					size="2x"
					color="#F40009"
				/>
				<p className="text-[1.4rem] font-[700] text-red-20">Logout</p>
			</div>
		</div>
	);
};

export default Menu;
