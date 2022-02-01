import React from "react";
import { Link } from "react-router-dom";
import { user } from "shared/store/Store";
import { useRecoilValue } from "recoil";

const Topbar: React.FC = (): JSX.Element => {
	const userObj = useRecoilValue<any>(user);

	return (
		<div className="flex flex-row bg-transparent px-[3rem] py-[1.3rem] text-black
         text-[1.2rem] front-[400] md:text-[1.8rem] md:font-[600] ">
			<Link to="/" className="hidden md:flex">
				GIST SHOP
			</Link>
			<div className="flex flex-row ml-auto gap-x-[2rem] ">
				{userObj.token.length > 0 ? (
					<>
						<Link to="/" className="">
							login
						</Link>
						<Link to="/" className="">
							register
						</Link>
					</>
				) : (
					<>
						<Link to="/" className="">
							View Profile
						</Link>
						<Link to="/" className="">
							Logout
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Topbar;
