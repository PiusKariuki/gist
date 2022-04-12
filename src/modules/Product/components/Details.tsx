import React from "react";

interface Props {
	product: any;
}

const Details:React.FC<Props> = ({product}) => {
	return (
		<div className="w-full flex flex-col gap-y-2">
			<p className="text-left font-[500] text-base lg:text-[1.6rem]">
				{product?.name}
			</p>
			<p className="text-left  font-[400] text-lg">
				by <span className="text-blue-30">{product?.ownerId?.userName}</span>
			</p>
			<p className="text-left text-red-20 font-[400] text-xl">
				{product?.quantity === 0
					? "GC. " + product.price
					: product.price === undefined
					? ""
					: "GC. " + product?.price}
			</p>
			<p className="text-left  font-[500] text-base mt-8 mb-6 w-[90%]">
				{product?.description}
			</p>
		</div>
	);
};

export default Details;
