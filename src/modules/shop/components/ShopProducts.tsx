import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	name: string;
	price: string;
	userName: string;
	id: string;
	shopId: string;
   image: string;
}

const ShopProducts: React.FC<Props> = ({
	name,
	price,
	userName,
	id,
	shopId,
   image
}): JSX.Element => {
	let navigate = useNavigate();
	return (
		<div
			className="flex flex-col px-[0.2rem] pb-[0.2rem] pt-[1rem] bg-white hover:border-[0.1rem] 
         hover:card-border  border-[0.1rem] rounded-md border-white hover:shadow-2xl relative"
			onClick={() => navigate(`/product/${id}`)}>
			<div className="flex flex-row gap-x-[1rem]">
				<div
					style={{ backgroundImage: `url(${shopId})` }}
					className="flex rounded-full self-center bg-center w-8 h-8 card-border
               bg-no-repeat bg-contain"
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
				className="flex relative w-full bg-no-repeat bg-center bg-contain rounded-md
            card-border gradient"
			>
				<img
					src={image}
					alt=""
					className="object-scale-down
               h-[40vh] md:h-[30vh] md:w-[16rem] lg:h-[35vh] 3xl:w-[30rem] 3xl:h-[20vh] "
				/>

				<p
					className="absolute bottom-[4%] right-[10%] text-white font-[600] text-[1.2rem]
            bg-black-80 px-[1rem]">
					GC. {price}
				</p>
			</div>
		</div>
	);
};

export default ShopProducts;
