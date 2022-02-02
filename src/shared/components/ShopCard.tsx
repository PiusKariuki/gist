import React from "react";
import { Link } from "react-router-dom";

interface Props {
	name: string;
	location: string;
	image: string;
	shopId: string;
}

const ShopCard: React.FC<Props> = ({ name, location, image, shopId }) => {
	return (
		<div
			className="flex flex-col relative md:w-[40%] lg:w-[28%] shadow-2xl border-2 rounded-3xl 
         py-[1.2rem] max-h-[65vh] md:max-h-[80vh] lg:max-h-[80vh] overflow-clip">
			<div
				style={{ backgroundImage: `url(/img/${image})` }}
				className=" bg-contain bg-no-repeat bg-center w-[80%] h-[18rem] md:h-[24rem] relative
            hover:scale-125 lg:hover:scale-[1.25] z-0 transition ease-in-out  duration-500
             self-center"
			/>
			<div
				className="flex flex-col text-[1.2rem] md:text-[1.35rem] font-[800] bg-white text-center
             py-[1rem]  items-center gap-y-[1rem]">
				<p className="text-red-600">{name}</p>
				<p className=" font-[800]">
					<img
						src="/img/location.svg"
						alt="Location"
						className="h-[1.4rem] w-[1.4rem]
                  inline self-center"
					/>
					&nbsp;&nbsp;<span className="text-red-600">{location}</span>
				</p>

				<Link to={`/shops/${shopId}`}>
					<button className="btn h-[2.5rem] bg-green-80 w-[10rem] text-white">
						Learn More
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ShopCard;
