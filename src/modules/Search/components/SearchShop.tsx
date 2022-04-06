import React from "react";
import { useNavigate, Link } from "react-router-dom";

interface Props {
	img: string;
	name: string;
	userName: string;
	id: string;
}

const SearchShop: React.FC<Props> = ({ name, img, userName, id }) => {
	let navigate = useNavigate();

	return (
		<div
			className="flex flex-col rounded-lg shadow-lg pt-[0.2rem] px-[0.2rem]
         pb-[0.8rem] flex-shrink-0"
			onClick={() => navigate(`/shop/${id}`, { replace: true })}>
			<div className="flex gradient rounded-t-lg mb-4 justify-center">
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
				<p className="text-blue-40 font-[400] text-[1.2rem] ">{name}</p>
				<p className="text-black-40 font-[500] text-[1rem]">
					by&nbsp;&nbsp;&nbsp;{userName}
				</p>

				<Link to={`/shop/${id}`} className="card-link">
					{" "}
					visit
				</Link>
			</div>
		</div>
	);
};

export default SearchShop;
