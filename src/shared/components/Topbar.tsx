import React from "react";

const Topbar:React.FC = ():JSX.Element => {
	return (
		<div
			className="flex flex-row flex-nowrap bg-transparent items-center h-[5.5rem] font-normal
         px-[2rem] py-[2rem] justify-between text-sm md:text-xl lg:text-2xl sticky-top-0">
			<img src="/img/sheep.svg" alt="" className="h-[2rem] md:h-[4rem]" />
			<p className="cursor-pointer">Animals</p>
			<p className="cursor-pointer">Notifications</p>
			<p className="cursor-pointer">Chats</p>
		</div>
	);
};

export default Topbar;
