import React from "react";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "shared/http/Http";

interface Props {
	name: string;
	price: string;
	userName: string;
	id: string;
	shopId: string;
}

const ShopProducts: React.FC<Props> = ({
	name,
	price,
	userName,
	id,
	shopId,
}): JSX.Element => {
	let navigate = useNavigate();
	return (
		<div
			className="flex flex-col p-[1rem] bg-white hover:border-[0.2rem] hover:border-gray-20
         border-[0.2rem] rounded-2xl border-white hover:shadow-2xl relative"
			onClick={() => navigate(`/product/${id}`)}>
			<div className="flex flex-row gap-x-[1rem]">
				<div
					style={{ backgroundImage: `url(${imgUrl}/${shopId}.png)` }}
					className="flex rounded-full self-center bg-center 
               bg-no-repeat bg-cover"
				/>
				<div className="flex flex-col">
					<p className="text-black-40 font-[700] text-[1rem] mb-[1rem]">
						{name}
						<br />
						<span className="font-[400]">
							{userName?.length > 0 ? userName : "unknown"}
						</span>
					</p>
				</div>
			</div>

			<div
				className="flex relative w-full h-[40vh] md:w-[22rem] 3xl:w-[30rem] 3xl:h-[20vh] 
            bg-no-repeat bg-center bg-contain rounded-xl border-[0.1rem]"
				style={{ backgroundImage: `url(${imgUrl}/0_${id}.png)` }}>
				<p
					className="absolute bottom-[4%] right-[10%] text-white font-[600] text-[1.2rem]
            bg-black-80 px-[1rem]">
					GC {price}
				</p>
			</div>
		</div>
	);
};

export default ShopProducts;
