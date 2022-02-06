import Topbar from "../../../shared/components/Topbar";
import { Outlet } from "react-router-dom";
import Cart from "modules/Cart/views/Cart";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartOpen } from "shared/store/Cart";
import { useRef, useEffect } from "react";
import { menuOpen } from "shared/store/Menu";
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
            else if(menuState && ref.current && ref.current.contains(e.target))
               setMenuOpen((prev: boolean) => (prev ? !prev : prev));
			};
			document.addEventListener("mousedown", handleClick);

			return () => {
				// Cleanup the event listener
				document.removeEventListener("mousedown", handleClick);
			};
		}, [cartState,menuState]);
	};

	clickAwayListener(box);

	return (
		<div className="flex flex-col flex-nowrap overflow-x-clip">
			<div>
				<Topbar />
			</div>

			<div className="relative">
				<div
					className={`${
						cartState
							? "absolute right-0 top-0 bg-teal-50 border-[0.1rem] border-black-40 min-h-screen rounded-l-xl z-50"
							: "hidden"
					}`}>
					<Cart />
				</div>
				<div
					onBlur={() => setMenuOpen((prev: boolean) => !prev)}
					className={`${
						menuState
							? "absolute right-0 top-0 bg-teal-50 border-[0.1rem] border-black-40 min-h-screen rounded-l-xl z-50"
							: "hidden"
					}`}>
					<Menu />
				</div>


            <div ref={box}>
				<Outlet />
            </div>
			</div>
		</div>
	);
};

export default Home;
