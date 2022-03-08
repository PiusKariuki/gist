import {
	faRightFromBracket,
	faUser,
	faArrowRightFromBracket,
	faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { user } from "shared/recoil/user";

interface Props {
	setMenuOpen: any;
}

const Menu: React.FC<Props> = ({ setMenuOpen }) => {
	let navigate = useNavigate();
	const setUser = useSetRecoilState(user);
	return (
		<div
			className="w-[60vw] md:w-[20vw] min-h-screen flex flex-col gap-y-[2rem] 
         px-[2rem] py-[4rem]">
			<div
				className="flex flex-row cursor-pointer items-start gap-x-[1rem]"
				onClick={() => {
					navigate(`/myAccount/profile`);
					setMenuOpen(false);
				}}>
				<FontAwesomeIcon
					icon={faUser}
					color="#6F00FF"
					className="text-[1rem] self-center"
				/>
				<p className="text-[1.4rem] font-[500] text-gray-20">My Account</p>
			</div>

			<div
				onClick={() => {
					setMenuOpen(false);
					navigate("/wallet");
				}}
				className="flex flex-row cursor-pointer items-start gap-x-[1rem]">
				<FontAwesomeIcon
					icon={faWallet}
					color="#6F00FF"
					className="text-[1rem] self-center"
				/>
				<p className="text-[1.4rem] font-[500] text-gray-20">Wallet</p>
			</div>
			<div
				onClick={() => {
					setMenuOpen(false);
					setUser({});
					navigate("/");
				}}
				className="flex flex-row cursor-pointer items-start gap-x-[1rem] pl-[0.5rem]">
				<FontAwesomeIcon
					icon={faArrowRightFromBracket}
					className="text-[1rem] self-center"
					color="#F40009"
				/>
				<p className="text-[1.4rem] font-[500] text-red-20">Logout</p>
			</div>
		</div>
	);
};

export default Menu;
