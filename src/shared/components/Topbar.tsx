import React from "react";
import { Link } from "react-router-dom";
import { user } from "shared/store/Store";
import { useRecoilValue } from "recoil";

const Topbar: React.FC = (): JSX.Element => {
	const userObj = useRecoilValue<any>(user);

	return (
		<div className="flex flex-row bg-transparent bg-gray-200 px-[3rem] py-[0.5rem]">
			<Link to="/" className="text-[1.5rem] hidden md:flex">
				GIST SHOP
			</Link>
			<div className="flex flex-row ml-auto gap-x-[2rem] text-[1rem] md:text-[1.3rem] font-[500]">
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
