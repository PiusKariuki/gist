import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	let navigate = useNavigate();
	return (
		<div className="flex flex-col md:flex-row py-[2.5rem] px-[2rem] md:gap-x-[2rem]">
			<div className="flex flex-col order-2 md:order-1 self-center">
				<p className="uppercase text-blue-20 font-[900] text-[2rem]">
					Welcome to GIST-SHOP.
					<br />
					<span className="text-black-40">Social Shopping Platform.</span>
				</p>
				<p className="text-[1.2rem] mt-[1.5rem]">
					An always live social shopping network, with your favorite brands and
					shops.
				</p>
				<button
					onClick={() => navigate(`/login`)}
					className="bg-red-20 w-[9rem] rounded-md py-[1rem] px-[1rem] text-white
             font-[900]  mt-[1.4rem] hover:bg-red-600 hover:scale-110 trasition
              ease-in-out
             duration-300">
					Join For Free
				</button>
			</div>
			{/* bg img */}
			<div
				className="flex  bg-hero w-[80vw] h-[30vh] bg-center bg-cover bg-no-repeat order-1
          md:order-2 md:min-w-[55vw] md:h-[45vh] lg:h-[55vh] self-center rounded-xl"
			/>
		</div>
	);
};

export default Hero;
