import React from 'react';

const Card:React.FC = () => {
  return (
		<div className="flex flex-col relative max-w-[90%] md:max-w-[22%]">
			<img
				src="/img/dress.jpg"
				alt=""
				className="rounded-lg border-2 shadow-lg"
			/>
			<div className="flex flex-col text-[1.2rem] font-[800] border-2 bg-white text-center py-[1rem]">
				<p>Name</p>
				<p>Owner</p>
				<p>Other details</p>
			</div>
		</div>
	);
};

export default Card;
