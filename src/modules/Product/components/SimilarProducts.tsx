import ShopProducts from "modules/shop/components/ShopProducts";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useFetch from "shared/hooks/useFetch";

const SimilarProducts: React.FC<{
	shopId: string;
	getProduct: (prodId: any) => void;
	userName: string;
}> = ({ shopId, getProduct, userName }) => {
	const { data, getObject, load } = useFetch();
	const [filteredProducts, setFilteredProducts] = useState<any>([]);
	const { productId } = useParams();

	let navigate = useNavigate();

	const { renderSpinner } = useSpinner();

	/**
	 * Description: get the shop products
	 * @param {any} (
	 * @returns {any}
	 */
	useEffect(() => {
		getObject(`/products/${shopId}`, "GET", {});
	}, [shopId, productId]);

	/**
	 * Description get filtered products once data is loaded
	 * @param {any} (
	 * @returns {any}
	 */
	useEffect(() => {
		setFilteredProducts(
			data?.length && data?.filter((product: any) => product._id !== productId)
		);
	}, [data]);

	return (
		<div className="flex flex-col w-full mt-16">
			{filteredProducts?.length > 0 ? (
				<p
					className="text-lg md:text-2xl text-black-40 font-semibold
            border-b-4">
					More products from {userName}
				</p>
			) : null}
			{renderSpinner(load)}
			<div
				className="flex flex-row flex-wrap w-full justify-items-start gap-y-4 gap-x-6
               mt-8">
				{filteredProducts?.map((product: any, key: number) => (
					<div
						key={key}
						onClick={() => {
							getProduct(product?._id);
							navigate(`/product/${product?._id}`);
						}}
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
