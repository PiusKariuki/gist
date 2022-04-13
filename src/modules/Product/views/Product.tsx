import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import "../styles/product.css";
import Thumbnails from "../components/Thumbnails";
import MainImg from "../components/MainImg";
import Details from "../components/Details";
import ActionBtns from "../components/ActionBtns";
import useFetch from "shared/hooks/useFetch";
import SimilarProducts from "../components/SimilarProducts";

const Product: React.FC = (): JSX.Element => {
	const [index, setIndex] = useState<number>(0);

	const { data, getObject, load } = useFetch();

	const { renderSpinner } = useSpinner();
	const { productId } = useParams<string>();

	// create a common function to get the product for consistency with the simial products
	const getProduct = (prodId: any) => {
		getObject(`/products/products/${prodId}`, "GET", {});
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		getProduct(productId);
	}, []);

	return (
		<div className="flex flex-col w-screen px-10 py-10">
			<div className="flex flex-col md:flex-row w-full  mx-auto gap-x-10 gap-y-16">
				<div className="flex flex-col w-full  space-y-10">
					<MainImg setIndex={setIndex} images={data?.images} index={index} />
					{renderSpinner(load)}
					<Thumbnails setIndex={setIndex} images={data?.images} />
				</div>

				<div className="flex flex-col w-full  space-y-10 self-center">
					<Details product={data} />

					{/* btns */}
					<ActionBtns product={data} />
				</div>
			</div>
			<SimilarProducts
				shopId={data?.shopId && data?.shopId._id}
				getProduct={getProduct}
				userName={data?.ownerId?.userName}
			/>
		</div>
	);
};

export default Product;
