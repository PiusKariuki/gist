import React from "react";
import { Link } from "react-router-dom";

interface Props {
	name: string;
	location: string;
	image: string;
	shopId: string;
}

const Card: React.FC<Props> = ({ name, location, image, shopId }) => {
	return (
		<div className="flex flex-col relative md:w-[28%] shadow-lg border-2 rounded-2xl">
			<div
				style={{ backgroundImage: `url(/img/${image})` }}
				className=" bg-contain bg-no-repeat bg-center w-full h-[18rem] md:h-[24rem] relative"></div>
			<div
				className="flex flex-col text-[1.2rem] md:text-[1.35rem] font-[800] bg-white text-center
             py-[1rem]  rounded-2xl border-t-2 items-center gap-y-[1rem]">
				<p className="text-red-600">{name}</p>
				<p className=" font-[800]">
					<img src="/img/location.svg" alt="Location" className="h-[1.4rem] w-[1.4rem]
                  inline self-center"/>
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

export default Card;
