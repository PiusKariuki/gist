import React from "react";

interface Props {
	product: any;
}

const Details:React.FC<Props> = ({product}) => {
	return (
		<div className="w-full flex flex-col">
			<p className="text-left text-gray-10 font-[500] text-[1.25rem] lg:text-[1.6rem]">
				{product?.name}
			</p>
			<p className="text-left text-gray-10 font-[400] text-[0.78rem] lg:text-[1rem]">
				by <span className="text-blue-20">{product?.ownerId?.userName}</span>
			</p>
			<p className="text-left text-red-20 font-[400] text-[1.2rem]">
				{product?.quantity === 0
					? "GC. " + product.price
					: product.price === undefined
					? ""
					: "GC. " + product?.price}
			</p>
			{/* <p className="text-left text-gray-10 font-[600] text-[1.4rem]">
				{product?.quantity === 0 ? null : "Available"}
			</p> */}
			<p className="text-left text-gray-10 font-[500] text-[1rem] mt-8 mb-6 w-[90%]">
				{product?.description}
			</p>
		</div>
	);
};

export default Details;
