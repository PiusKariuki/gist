import React from "react";
import { NavLink } from "react-router-dom";
import { user } from "shared/store/Store";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faLock } from "@fortawesome/free-solid-svg-icons";

const Topbar: React.FC = (): JSX.Element => {
	const userObj = useRecoilValue<any>(user);

	return (
		<div
			className="flex flex-row bg-transparent px-[1.2rem] md:px-[3rem] py-[1.3rem] text-black
         text-[1.2rem] front-[400] md:text-[1.8rem] md:font-[600] items-center">
			<NavLink
				to="/"
				className="flex md:flex  text-[1.1rem] font-[500] md:text-[4rem] md:font-[900] 
            text-blue-20">
				GIST SHOP
			</NavLink>
			<div className="flex flex-row ml-auto gap-x-[2rem] items-center font-light text-blue-20">
				{userObj.token.length > 0 ? (
					<>
						<NavLink to="/" className="">
							<FontAwesomeIcon icon={faSignInAlt} className="mr-[0.6rem]" />
							login
						</NavLink>
						<NavLink to="/" className="">
							<FontAwesomeIcon icon={faLock} className="mr-[0.6rem]" />
							register
						</NavLink>
					</>
				) : (
					<>
						<NavLink to="/" className="">
							View Profile
						</NavLink>
						<NavLink to="/" className="">
							Logout
						</NavLink>
					</>
				)}
			</div>
		</div>
	);
};

export default Topbar;
