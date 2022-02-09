import {
	faTimes,
	faArrowRight,
	faShoppingCart,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { cartOpen } from "shared/store/Cart";
import { menuOpen } from "shared/store/Menu";
import useSearch from "../hooks/useSearch";
import { searchInput } from "../store/Search";

const Topbar = () => {
	const [searching, setSearching] = useState<boolean>(false);
	let navigate = useNavigate();
	const setSearch = useSetRecoilState(searchInput);
	const setCartOpen = useSetRecoilState(cartOpen);
	const setMenuOpen = useSetRecoilState(menuOpen);
	const { handleChange, input, setInput } = useSearch();

	return (
		<div
			className="flex flex-row flex-nowrap  py-[1rem] px-[0.5rem] md:px-[2rem] 
         gap-x-[1rem]">
			{/* div wrapper for input and icons */}
			<p className="hidden md:flex text-blue-20 text-[1.6rem] font-semibold">
				Gist-Shop
			</p>
			<div className="relative">
				<input
					onFocus={() => {
						setSearching(true);
						navigate("/searching");
					}}
					onBlur={() => {
						setInput("");
					}}
					onChange={handleChange}
					className={`${
						searching
							? "w-[90vw] md:w-[35vw] lg:w-[45vw] xl:w-[55vw] border-2 relative shadow-lg rounded-md px-[2rem] h-[2.6rem] outline-none"
							: "little:w-[25vw] border-2 relative shadow-lg rounded-md px-[2rem] h-[2.6rem] outline-none md:w-[35vw] lg:w-[45vw] xl:w-[55vw]"
					}`}
					placeholder="Search Gist-Shop"
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
			<FontAwesomeIcon
				onClick={() => {
					setCartOpen((prev: boolean) => !prev);
					setMenuOpen((prev: boolean) => (prev ? !prev : prev));
				}}
				icon={faShoppingCart}
				color="blue"
				className={`${
					searching
						? "hidden md:flex md:ml-[2rem] self-center fa-lg md:fa-3x"
						: "self-center md:ml-[2rem]  fa-lg md:fa-3x"
				}`}
			/>
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
