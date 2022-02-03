import React from "react";

interface Props {
	img: string;
	name: string;
	price: number;
	userName: string;
}

const SearchProduct: React.FC<Props> = ({ name, img, price, userName }) => {
   
	return (
		<div className="flex flex-col rounded-2xl shadow-lg  border-[0.2rem] px-[0.3rem] py-[0.4rem]">
			<div
				style={{ backgroundImage: `url(/img/${img})` }}
				className="bg-cover bg-center bg-no-repeat w-[14rem] h-[12rem] rounded-2xl"
			/>
			<p className="text-blue-20 font-[900] text-[1.4rem] mb-[1rem] max-w-[10rem]">
				{name}
			</p>
			<p className="text-black-40 font-[900] text-[1.4rem] mb-[1rem]">
				by:&nbsp;&nbsp;&nbsp;{userName}
			</p>
			<p className="text-red-20 font-[900] text-[1.4rem] mb-[1rem]">
				$:&nbsp;&nbsp;&nbsp;{price}
			</p>
		</div>
	);
};

export default SearchProduct;
