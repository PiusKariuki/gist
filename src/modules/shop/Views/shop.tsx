import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useShopDetails from "../Hooks/useShopDetails";
import ShopProducts from "../components/ShopProducts";

const Shop: React.FC = (): JSX.Element => {
	const { shopDetails, getShopDetails, load } = useShopDetails();
	let { shopId } = useParams();
	const { renderSpinner } = useSpinner();

	useEffect(() => {
		getShopDetails(shopId);
	}, []);

	return (
		<div className="flex w-screen flex-col gap-y-4 px-4">
			{renderSpinner(load)}
			{/* shop existence conditional */}
			{!load && shopDetails && shopDetails.length ? (
				<div className="flex flex-col w-full">
					<p
						className="text-[2rem] md:text-[2.5rem] text-black-40 font-[700]
                  border-b-4 ">
						{shopDetails[0]?.shopId?.name}
						<span className="font-[500] text-[1.5rem] md:text-[2rem]">
							&nbsp;&nbsp;product's
						</span>
					</p>
					{/* cards */}
					<div
						className="flex flex-row flex-wrap w-full justify-items-start gap-y-4 gap-x-8 
                  mt-8">
						{shopDetails?.map((product: any, key: number) => (
							<ShopProducts
								image={product?.images[0]}
								name={product?.name}
								price={product?.price}
								id={product?._id}
								userName={product?.ownerId?.userName}
								key={key}
								shopId={shopDetails[0]?.shopId?._id}
							/>
						))}
					</div>
				</div>
			) : (
				<p className="text-red-20 font-[700] text-[1rem] md:text-[1.7rem]">
					This shop has no products
				</p>
			)}
		</div>
	);
};

export default Shop;
