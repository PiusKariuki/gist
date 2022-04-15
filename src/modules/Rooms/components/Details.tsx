import React from "react";

const Details: React.FC<{
	title: string;
	userName: string;
	description: string;
	name: string;
}> = ({ title, userName, description, name }) => {
	return (
		<div className="flex flex-col px-6">
			<p className="text-black-40 text-2xl font-[700]">{name}</p>

			<p className="text-black-40 font-[900] text-[1.4rem] mb-4">
				{title}
				<br />
				<span className="font-[300]">by {userName}</span>
			</p>

			<p className="text-[1.2rem] text-black-40">{description}</p>
		</div>
	);
};

export default Details;
