import {
	faTimes,
	faArrowRight,
	faShoppingCart,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom, cartOpen } from "shared/recoil/cart";
import { menuOpen } from "shared/recoil/menu";
import { searchInput } from "shared/recoil/search";
import { user } from "shared/recoil/user";
import useSearch from "../hooks/useSearch";


const Topbar = () => {
	const [searching, setSearching] = useState<boolean>(false);
	let navigate = useNavigate();
	const setSearch = useSetRecoilState(searchInput);
	const setCartOpen = useSetRecoilState(cartOpen);
	const setMenuOpen = useSetRecoilState(menuOpen);
	const cart = useRecoilValue<any>(cartAtom);
	let { userName,token } = useRecoilValue<any>(user);
	const { handleChange, input, setInput } = useSearch();
   
	let number = cart.length;

	return (
		<div
			className="flex flex-row flex-nowrap  py-[1rem] px-[0.5rem] md:px-[2rem] 
         gap-x-[1rem]">
			{/* div wrapper for input and icons */}
			<p
				onClick={() => {
					navigate("/");
				}}
				className="hidden md:flex text-blue-20 text-[1.6rem] font-semibold cursor-pointer">
				Gist-Shop
			</p>
			<div className="relative mr-auto">
				<input
					onFocus={() => {
						setSearching(true);
						navigate("/searching");
					}}
					onBlur={() => {
						// setInput("");
					}}
					onChange={handleChange}
					className={`${
						searching
							? "w-[90vw] md:w-[35vw] lg:w-[45vw] xl:w-[65vw] border-2 relative shadow-lg rounded-md px-[2rem] h-[2.6rem] outline-none"
							: token?.length < 1
							? "little:w-[25vw] border-2 relative shadow-lg rounded-md px-[2rem] h-[2.6rem] outline-none md:w-[35vw] lg:w-[45vw] xl:w-[65vw]"
							: "little:w-[25vw] border-2 relative shadow-lg rounded-md px-[2rem] h-[2.6rem] outline-none md:w-[35vw] lg:w-[45vw] xl:w-[65vw]"
					}`}
					placeholder="Type a product or shop name"
					value={input}
				/>
				<FontAwesomeIcon
					icon={faTimes}
					size="1x"
					color="red"
					className={`${
						searching ? "absolute right-[17%] top-[30%]" : "hidden"
					}`}
					onClick={() => {
						setSearch("");
						setInput("");
						setSearching(false);
						navigate("/");
					}}
				/>
				<FontAwesomeIcon
					icon={faArrowRight}
					size="1x"
					color="blue"
					className={`${
						searching
							? "absolute right-[5%] top-[30%]"
							: "hidden md:absolute right-[5%] top-[30%]"
					}`}
					onClick={() => {
						navigate("/searching");
					}}
				/>
			</div>
			{token === undefined ? (
				<button
					className={`${
						searching
							? "hidden md:flex  w-[8rem] ml-auto  py-[0.3rem] self-center border-2 border-blue-20 text-[1.2rem] hover:bg-blue-400 rounded-md text-center hover:text-white justify-around  font-[600] "
							: "flex w-[8rem] ml-auto  py-[0.3rem] self-center border-2 border-blue-20 text-[1.2rem] hover:bg-blue-400 rounded-md text-center hover:text-white justify-around  font-[600] "
					}
             
             `}
					onClick={() => navigate("/login")}>
					Sign in
				</button>
			) : 
         <p className="text-blue-20 font-600 text-center self-center lg:text-[1.6rem] 
         ">Hello🖐  {userName}</p>
         
         }
			<div
				onClick={() => {
					setCartOpen((prev: boolean) => !prev);
					setMenuOpen((prev: boolean) => (prev ? !prev : prev));
				}}
				className="relative flex text-center">
				<FontAwesomeIcon
					icon={faShoppingCart}
					color="blue"
					className={`${
						searching
							? "hidden md:flex md:ml-[2rem] self-center fa-lg md:fa-3x"
							: "self-center md:ml-[2rem]  fa-lg md:fa-3x "
					}`}
				/>
				<div
					className="absolute bg-blue-20 text-[1rem] font-[900] right-[-58%] top-[-20%] 
               w-[1.8rem] h-[1.8rem] rounded-full text-white text-center pt-[0.2rem]">
					{number}
				</div>
			</div>
			<FontAwesomeIcon
				onClick={() => {
					setMenuOpen((prev: boolean) => !prev);
					setCartOpen((prev: boolean) => (prev ? !prev : prev));
				}}
				icon={faBars}
				color="blue"
				className={`${
					searching
						? "hidden md:flex md:ml-[2rem] self-center fa-lg md:fa-3x"
						: "self-center md:ml-[2rem] fa-lg md:fa-3x"
				}`}
			/>
		</div>
	);
};

export default Topbar;
