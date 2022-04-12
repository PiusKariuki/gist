import {
	faTimes,
	faShoppingCart,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
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
	let { userName, token, wallet } = useRecoilValue<any>(user);
	const { handleChange, input, setInput } = useSearch();

	let number = cart.length;

	return (
		<div
			className="flex flex-row  my-2 py-[0.2rem] px-[0.8rem] md:px-[2rem] lg:px-[4rem] 
         gap-x-[1rem] w-full justify-evenly max-h-12">
			{/* div wrapper for input and icons */}
			<p
				onClick={() => {
					navigate("/");
				}}
				className="hidden md:flex text-blue-40 text-[1.6rem] font-semibold cursor-pointer">
				Gist-Shop
			</p>
			<div className="relative  flex justify-around">
				<input
					onFocus={() => {
						setSearching(true);
						navigate("/searching");
					}}
					onChange={handleChange}
					className={`${
						searching
							? " w-[60vw] md:w-[35vw] lg:w-[45vw] xl:w-[50vw] border-2 relative shadow-lg rounded-md px-4 md:px-[1.4rem] outline-none"
							: token?.length < 1
							? "little:w-[40vw] border-2 relative shadow-lg rounded-md px-4 outline-none md:w-[35vw] lg:w-[45vw] xl:w-[50vw]"
							: "little:w-[40vw] border-2 relative shadow-lg rounded-md px-4 outline-none md:w-[35vw] lg:w-[45vw] xl:w-[50vw]"
					}`}
					placeholder="search"
					value={input}
				/>
				<FontAwesomeIcon
					icon={faTimes}
					color="red"
					className={`${
						searching
							? "absolute text-[1.1rem] md:hidden right-[17%] top-[35%] md:top-[30%] lg:top-[15%] lg:text-[1.5rem] lg:right-[10%] translate-x-[-50%] translate-y-[-50]"
							: "hidden"
					}`}
					onClick={() => {
						setSearch("");
						setInput("");
						setSearching(false);
						navigate("/");
					}}
				/>
			</div>
			{token === undefined ? (
				<button
					className={`${
						searching
							? "hidden md:flex  w-[8rem] ml-auto  py-[0.3rem] self-center border-2 border-blue-20 text-[1.2rem] hover:bg-blue-400 rounded-md text-center hover:text-white justify-around  font-[600] flex-nowrap"
							: "flex w-[8rem] ml-auto  py-[0.3rem] self-center border-2 border-blue-20 text-[1.2rem] hover:bg-blue-400 rounded-md text-center hover:text-white justify-around  font-[600] "
					}
             
             `}
					onClick={() => navigate("/login")}>
					Sign in
				</button>
			) : (
				<p
					className="invisible 425:visible text-blue-40 text-center self-center lg:text-[1rem] 
         ">
					Hello🖐 {userName}, GC. {wallet}
				</p>
			)}
			<div
				onClick={() => {
					setCartOpen((prev: boolean) => !prev);
					setMenuOpen((prev: boolean) => (prev ? !prev : prev));
				}}
				className="relative flex text-center">
				<FontAwesomeIcon
					icon={faShoppingCart}
					color="#33546D"
					className={`${
						searching
							? "hidden md:flex md:ml-[2rem] self-center fa-lg md:fa-3x"
							: "self-center md:ml-[2rem]  fa-lg md:fa-3x "
					}`}
				/>
				{/* {searching ? null : ( */}
				<div
					className="absolute bg-blue-20 text-[1rem] font-[900] right-[-58%] top-[-20%] 
               w-[1.8rem] h-[1.8rem] rounded-full text-white text-center pt-[0.2rem]">
					{number}
				</div>
				{/* )} */}
			</div>
			{token?.length > 0 ? (
				<FontAwesomeIcon
					onClick={() => {
						setMenuOpen((prev: boolean) => !prev);
						setCartOpen((prev: boolean) => (prev ? !prev : prev));
					}}
					icon={faBars}
					color="#33546D"
					className={`${
						searching
							? "hidden md:flex md:ml-[2rem] self-center fa-lg md:fa-3x"
							: "self-center md:ml-[2rem] fa-lg md:fa-3x"
					}`}
				/>
			) : null}
		</div>
	);
};

export default Topbar;
