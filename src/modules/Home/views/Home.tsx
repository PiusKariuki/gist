import Topbar from "../../../shared/components/Topbar";
import { Outlet } from "react-router-dom";
import Cart from "modules/Cart/views/Cart";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartOpen } from "shared/store/Cart";
import { useRef, useEffect } from "react";

const Home = () => {
	const cartState = useRecoilValue(cartOpen);
	const setCartOpen = useSetRecoilState(cartOpen);

	const box = useRef<any>();
	const clickAwayListener = (ref: any) => {
		useEffect(() => {
			const handleClick = (e: any) => {
				if (cartState && ref.current && !ref.current.contains(e.target))
					setCartOpen((prev: boolean) => (prev ? !prev : prev));
			};
			document.addEventListener("mousedown", handleClick);

			return () => {
				// Cleanup the event listener
				document.removeEventListener("mousedown", handleClick);
			};
		}, [cartState]);
	};

	clickAwayListener(box);

	return (
		<div className="flex flex-col flex-nowrap overflow-x-clip">
			<Topbar />
			<div className="relative">
				<div
					ref={box}
					onBlur={() => setCartOpen((prev: boolean) => !prev)}
					className={`${
						cartState
							? "absolute right-0 top-0 bg-teal-50 border-[0.1rem] border-black-40 min-h-full rounded-l-xl z-50"
							: "hidden"
					}`}>
					<Cart />
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default Home;
