import React from "react";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "shared/http/Http";

interface Props {
	name: string;
	price: string;
	userName: string;
	id: string;
	shopId: string;
	image: string;
}

const ViewProduct: React.FC<Props> = ({
	name,
	price,
	userName,
	id,
	shopId,
	image,
}): JSX.Element => {
	let navigate = useNavigate();
	return (
		<div
			className="flex flex-col p-[1rem] bg-white hover:border-[0.2rem] hover:border-gray-200
         border-[0.2rem] rounded-2xl border-white hover:shadow-2xl relative"
			onClick={() => navigate(`/product/${id}`)}>
			<div className="flex flex-row gap-x-[1rem]">
				<div
					style={{ backgroundImage: `url(${imgUrl}/${shopId}.png)` }}
					className="flex w-[3rem] h-[3rem] rounded-full self-center bg-center 
               bg-no-repeat bg-cover"
				/>
				<div className="flex flex-col w-[16rem]">
					<p className="text-black-40 font-[700] text-[1rem] mb-[1rem]">
						{name}
						<br />
						<span className="font-[400]">
							{userName?.length > 0 ? userName : "unknown"}
						</span>
					</p>
				</div>
			</div>

			<div className="flex relative gradient border-[0.0625rem] rounded-xl">
				<img
					src={`${imgUrl}/${image}`}
					alt=""
					className="h-[40vh] w-[25rem] md:w-[25rem] object-scale-down object-center"
				/>
				<p
					className="absolute bottom-[4%] right-[10%] text-white font-[600] text-[1rem]
               bg-gray-20 px-[1rem] opacity-80 rounded-xl">
					GC {price}
				</p>
			</div>
		</div>
	);
};

export default ViewProduct;
