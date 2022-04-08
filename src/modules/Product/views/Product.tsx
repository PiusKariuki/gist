import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useProducts from "../hooks/useProducts";
import "../styles/product.css";
import Thumbnails from "../components/Thumbnails";
import MainImg from "../components/MainImg";
import Details from "../components/Details";
import ActionBtns from "../components/ActionBtns";

const Product: React.FC = (): JSX.Element => {
	const [index, setIndex] = useState<number>(0);
	const { getProductById, product, load } = useProducts();
	const { renderSpinner } = useSpinner();
	const { productId } = useParams();

	useEffect(() => {
		getProductById(productId);
	}, []);

	return (
		<div className="flex flex-col md:flex-row w-screen px-10 py-10 mx-auto gap-x-10 gap-y-16">
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
	);
};

export default Product;
