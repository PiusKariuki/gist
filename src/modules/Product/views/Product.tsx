import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useProducts from "../hooks/useProducts";
import "../styles/product.css";
import Thumbnails from "../components/Thumbnails";
import MainImg from "../components/MainImg";
import Details from "../components/Details";
import ActionBtns from "../components/ActionBtns";
import ShopProducts from "modules/shop/components/ShopProducts";
import useShopDetails from "modules/shop/Hooks/useShopDetails";

const Product: React.FC = (): JSX.Element => {
	const [index, setIndex] = useState<number>(0);
	const { getProductById, product, load } = useProducts();
	const { renderSpinner } = useSpinner();
	const { productId } = useParams();
	const { shopDetails, getShopDetails } = useShopDetails();
	const [filteredProducts, setFilteredProducts] = useState<any>([]);

	useLayoutEffect(() => {
		getProductById(productId);
	}, []);

	useEffect(() => {
		getShopDetails(product?.shopId?._id);
	}, [product]);

	useEffect(() => {
		setFilteredProducts(
			shopDetails.filter((product: any) => product._id !== productId)
		);
	}, [shopDetails]);

	return (
		<div className="flex flex-col w-screen px-10 py-10">
			<div className="flex flex-col md:flex-row w-full  mx-auto gap-x-10 gap-y-16">
				<div className="flex flex-col w-full  space-y-10">
					<MainImg setIndex={setIndex} images={product?.images} index={index} />
					{renderSpinner(load)}
					<Thumbnails setIndex={setIndex} images={product?.images} />
				</div>

				<div className="flex flex-col w-full  space-y-10 self-center">
					<Details product={product} />

					{/* btns */}
					<ActionBtns product={product} />
				</div>
			</div>

			{/* more products */}
			<div className="flex flex-col w-full mt-8">
				{/* {filteredProducts && filteredProducts.length > 0 ? ( */}
				<p
					className="text-[2rem] md:text-[2.5rem] text-black-40 font-[700]
                   border-b-4 ">
					{filteredProducts?.length > 1 ? "More Products" : "More like this"}
				</p>
				{/* ) : null} */}
				<div
					className="flex flex-row flex-wrap w-full justify-items-start gap-y-4 gap-x-8 
               mt-8">
					{filteredProducts?.map((product: any, key: number) => (
						<div
							key={key}
							onClick={() => getProductById(product?._id)}
							className="">
							<ShopProducts
								image={product?.images[0]}
								name={product?.name}
								price={product?.price}
								id={product?._id}
								userName={product?.ownerId?.userName}
								key={key}
								shopId={shopDetails[0]?.shopId?._id}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Product;
