import Topbar from "../../../shared/components/Topbar";
import {Outlet } from "react-router-dom";




const Home = () => {
	return (
		<div className="flex flex-col flex-nowrap overflow-x-clip">
			<Topbar />
         <Outlet />
		</div>
	);
};

export default Home;
