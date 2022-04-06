import React from "react";
import { Link } from "react-router-dom";

interface Props {
	img: string;
	name: string;
	price: number;
	userName: string;
	id: string;
}

const SearchProduct: React.FC<Props> = ({ name, img, price, userName, id }) => {

	return (
		<div
			className="flex flex-col rounded-lg shadow-lg pt-[0.2rem] px-[0.2rem]
         pb-[0.8rem] flex-shrink-0">
			<div className="flex gradient rounded-t-md mb-4 justify-center">
				{img?.length > 0 ? (
					<img
						src={img}
						className="w-[60vw] md:w-[30vw] lg:w-[24vw] h-[12rem] 
                  self-center  object-cover rounded-md"
						onError={({ currentTarget }) => {
							currentTarget.onerror = null;
							currentTarget.src = "/img/picture.png";
						}}
					/>
				) : (
					<img
						src="/img/picture.png"
						className="w-[60vw] md:w-[30vw] lg:w-[24vw] h-[12rem] 
                  self-center  object-cover rounded-md"
					/>
				)}
			</div>

			<div className="flex flex-col space-y-2 px-2">
				<p className="text-blue-40 font-[600] text-[1rem] ">{name}</p>
				<p className="text-gray-10 font-[300] text-[1rem] ">
					by&nbsp;&nbsp;&nbsp;
					<span className="font-[400]">{userName || "Pius"}</span>
				</p>
				<p className="text-red-20 font-[400] text-[1rem] ">
					GC.&nbsp;&nbsp;&nbsp;{price}
				</p>
				<Link to={`/product/${id}`} className="card-link">
					view
				</Link>
			</div>
		</div>
	);
};

export default SearchProduct;
