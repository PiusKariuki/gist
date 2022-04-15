import React from "react";

const Tabs: React.FC<{
	details: boolean;
	setDetails: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setDetails, details }) => {
	return (
		<div className="flex flex-nowrap w-full self-center justify-start px-6">
			<a
				href="#"
				onClick={() => setDetails((prev: boolean) => !prev)}
				className={`${details ? "breadcrumb-active" : "breadcrumb-inactive"}`}>
				Details
			</a>
			<p className="lg:text-2xl text-black-80 font-[500] self-center mr-4">/</p>
			<a
				href="#"
				onClick={() => setDetails((prev: boolean) => !prev)}
				className={`${!details ? "breadcrumb-active" : "breadcrumb-inactive"}`}>
				Images
			</a>
		</div>
	);
};

export default Tabs;
