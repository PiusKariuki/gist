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
			className="flex flex-col px-[0.5rem]  py-[0.6rem] bg-white card-border
         hover:card-border rounded-md  hover:shadow-2xl
         relative"
			onClick={() => navigate(`/product/${id}`)}>
			<div className="flex flex-row gap-x-[1rem]">
				<div className="flex gradient rounded-full h-8 w-8 border-[.1rem] border-gray-300">
					<img
						src={shopId}
						alt=""
						className="w-8 h-8 rounded-full self-center object-scale-down"
					/>
				</div>

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

			<div className="flex relative gradient border-[0.0625rem] rounded-md">
				<img
					src={image}
					alt=""
					className="h-[40vh] w-[25rem] md:w-[25rem]  3xl:w-[52rem] 3xl:h-[20vh]
                object-scale-down object-center"
				/>
				<p
					className="absolute bottom-[4%] right-[5%] text-white font-[600] text-[1rem]
               bg-gray-20 px-[1rem] opacity-50 rounded-xl">
					GC. {price}
				</p>
			</div>
		</div>
	);
};

export default ViewProduct;
