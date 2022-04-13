import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import ShopProducts from "../components/ShopProducts";
import useFetch from "shared/hooks/useFetch";

const Shop: React.FC = (): JSX.Element => {
	const { data, getObject, load } = useFetch();

	let { shopId } = useParams();
	const { renderSpinner } = useSpinner();

	useEffect(() => {
		getObject(`/products/${shopId}`, "GET", {});
	}, []);

	return (
		<div className="flex w-screen flex-col gap-y-4 px-4">
			{renderSpinner(load)}
			{/* shop existence conditional */}
			{ data && data.length ? (
				<div className="flex flex-col w-full">
					<p
						className="text-[2rem] md:text-[2.5rem] text-black-40 font-[700]
                  border-b-4 ">
						{data[0]?.shopId?.name}
						<span className="font-[500] text-[1.5rem] md:text-[2rem]">
							&nbsp;&nbsp;product's
						</span>
					</p>
					{/* cards */}
					<div
						className="flex flex-row flex-wrap w-full justify-items-start gap-y-4 gap-x-8 
                  mt-8">
						{data?.map((product: any, key: number) => (
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
								shopId={data[0]?.shopId?._id}
							/>
						))}
					</div>
				</div>
			) : (
				<p className="text-2xl md:text-3xl text-black-40  font-[700]">
					No products available in this shop
				</p>
			)}
		</div>
	);
};

export default Shop;
