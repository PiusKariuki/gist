import React from 'react';

interface Props {
	img: string;
	name: string;
	userName: string;
}

const SearchShop: React.FC<Props> = ({ name, img,  userName }) => {
	return (
		<div className="flex flex-col rounded-2xl shadow-lg  border-[0.2rem] p-[2rem]
      flex-shrink-0">
			<div
				style={{ backgroundImage: `url(/img/${img})` }}
				className="bg-contain bg-center bg-no-repeat w-[80vw] md:w-[40vw] h-[12rem] rounded-2xl"
			/>
			<p className="text-blue-20 font-[900] text-[1.4rem] mb-[1rem]">
				{name}
			</p>
			<p className="text-black-40 font-[900] text-[1.4rem] mb-[1rem]">
				by:&nbsp;&nbsp;&nbsp;{userName}
			</p>

		</div>
	);
};

export default SearchShop;
