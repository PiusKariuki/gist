import Topbar from "../../../shared/components/Topbar";
import { Outlet } from "react-router-dom";
import Cart from "modules/Cart/views/Cart";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartOpen } from "shared/Store/Cart";
import { useRef, useEffect } from "react";
import { menuOpen } from "shared/Store/Menu";
import Menu from "shared/components/Menu";

const Home = () => {
	const cartState = useRecoilValue(cartOpen);
	const setCartOpen = useSetRecoilState(cartOpen);
	const menuState = useRecoilValue(menuOpen);
	const setMenuOpen = useSetRecoilState(menuOpen);

	const box = useRef<any>();
	const clickAwayListener = (ref: any) => {
		useEffect(() => {
			const handleClick = (e: any) => {
				if (cartState && ref.current && ref.current.contains(e.target))
					setCartOpen((prev: boolean) => (prev ? !prev : prev));
				else if (menuState && ref.current && ref.current.contains(e.target))
					setMenuOpen((prev: boolean) => (prev ? !prev : prev));
			};
			document.addEventListener("mousedown", handleClick);

			return () => {
				// Cleanup the event listener
				document.removeEventListener("mousedown", handleClick);
			};
		}, [cartState, menuState]);
	};

	clickAwayListener(box);

	return (
		// flex flex-col flex-nowrap overflow-x-clip
		<div
			className={`${
				cartState || menuState
					? "flex flex-col flex-nowrap overflow-x-clip  max-h-screen"
					: "flex flex-col flex-nowrap overflow-x-clip"
			}`}>
			<div className="fixed top-0 inset-x-1 z-50 bg-white">
				<Topbar />
			</div>

			<div className="relative">
				<div
					className={`${
						cartState
							? "fixed right-0 top-16 bg-brown-20 min-h-screen z-[44]"
							: "hidden"
					}`}>
					<Cart />
				</div>
				<div
					onBlur={() => setMenuOpen((prev: boolean) => !prev)}
					className={`${
						menuState ? "fixed right-0 top-16 bg-brown-20 z-[44]" : "hidden"
					}`}>
					<Menu setMenuOpen={setMenuOpen} />
				</div>

				<div ref={box} className="mt-[4rem]">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Home;
