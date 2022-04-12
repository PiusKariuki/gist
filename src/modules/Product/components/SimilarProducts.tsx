import ShopProducts from "modules/shop/components/ShopProducts";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "shared/hooks/useFetch";

const SimilarProducts: React.FC<{ shopId: string }> = ({ shopId }) => {
	const { data, getObject, load } = useFetch();
	const [filteredProducts, setFilteredProducts] = useState<any>([]);
	const { productId } = useParams();

	useEffect(() => {
		getObject(`/products/${shopId}`, "GET", {});
	}, []);

	useEffect(() => {
		setFilteredProducts(
			data.filter((product: any) => product._id !== productId)
		);
	}, []);
	return (
		<div className="flex flex-col w-full mt-8">
			<p
				className="text-[2rem] md:text-[2.5rem] text-black-40 font-[700]
                   border-b-4 ">
				More products
			</p>

			<div
				className="flex flex-row flex-wrap w-full justify-items-start gap-y-4 gap-x-6
               mt-8">
				{data?.map((product: any, key: number) => (
					<div
						key={key}
						onClick={() =>
							getObject(`/products/products/${productId}`, "GET", {})
						}
						className="">
						<ShopProducts
							image={
								product?.images?.length > 0 && product?.images[0]
									? product?.images[0]
									: undefined
							}
							name={product?.name}
							price={product?.price}
							id={product?._id}
							userName={product?.ownerId?.userName}
							key={key}
							shopId={product?.shopId?._id}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default SimilarProducts;
