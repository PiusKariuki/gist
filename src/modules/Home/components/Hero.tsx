import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { user } from "shared/recoil/user";

const Hero = () => {
	let navigate = useNavigate();

	const { token } = useRecoilValue<any>(user);
	return (
		<div
			className="flex flex-col md:flex-row py-[2.5rem] px-[2rem] md:px-20   space-y-10 md:space-y-0 
         md:space-x-8 lg:space-x-[5rem] ">
			<div className="flex flex-col order-2 md:order-1 self-center">
				<p className="uppercase font-[900] text-[2rem] text-[#00bcd7]">
					The shopping <br /> experience.
					<span className="text-black-40"> Everyone is talking about!</span>
				</p>
				<p className="text-[1rem] mt-[1.5rem]">
					An always live social-shopping network, with your favorite brands,
					artists, celebrities and useful products.
				</p>
				{token?.length < 5 ? (
					<button
						onClick={() => navigate(`/login`)}
						className="bg-red-20 w-[9rem] rounded-md py-[1rem] px-[1rem] text-white
             font-[900]  mt-[1.4rem] hover:bg-red-600 hover:scale-110 trasition
              ease-in-out
             duration-300">
						Join For Free
					</button>
				) : null}
			</div>
			{/* bg img */}
			<iframe
				className="flex w-[80vw] h-[30vh] border-1 md:order-2 md:min-w-[55vw]
             md:h-[45vh] lg:h-[55vh] self-center rounded-md object-scale-down"
				src="https://www.youtube.com/embed/wq1GDVwWz3g?autoplay=0&controls=0"></iframe>
		</div>
	);
};

export default Hero;
