import Topbar from "../../../shared/components/Topbar";
import { Outlet } from "react-router-dom";
import Cart from "modules/Cart/views/Cart";
import { useRecoilValue } from "recoil";
import { cartOpen } from "shared/store/Cart";

const Home = () => {
	const cartState = useRecoilValue(cartOpen);
	return (
		<div className="flex flex-col flex-nowrap overflow-x-clip">
			<Topbar />
			<div className="relative">
				<div
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
