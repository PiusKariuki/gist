import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import Topbar from "shared/components/Topbar";
import useProducts from "../hooks/useProducts";

const Product: React.FC = (): JSX.Element => {
	const [index, setIndex] = useState<number>(0);
	const [orders, setOrders] = useState<number>(0);
	const { getProductById, product, errors, load } = useProducts();
	const { renderSpinner } = useSpinner();
	let { productId } = useParams();

	useEffect(() => {
		getProductById(productId);
	}, []);

	return (
		<div
			className="flex flex-col md:flex-row flex-wrap px-[2rem] py-[1rem]
         justify-around gap-y-[2.2rem]">
			<Topbar />
			{renderSpinner(load)}
			<div className="flex flex-col gap-y-[2rem]">
				<p className="text-left text-black-40 font-[600] text-[2rem]">
					{product?.name}
				</p>
				{product?.images?.length > 0 ? (
					<div
						style={{ backgroundImage: `url(/img/${product.images[index]})` }}
						className="bg-contain bg-center bg-no-repeat w-[60vw] h-[20vh] "
					/>
				) : null}
				<p className="text-left text-red-20 font-[600] text-[1.4rem]">
					{product?.quantity === 0 ? "Out of stock" : product.price ===undefined? "":
               "$" +product?.price}
				</p>

				{/* btns */}
				<div className="flex flex-row gap-x-[1rem]">
					<div className="inline-flex rounded-md shadow-sm border-[0.1rem] border-black-40">
						<button
							onClick={() => setOrders((prev) => (prev === 0 ? 0 : prev - 1))}
							disabled={product.quantity === 0}
							type="button"
							className="px-[1rem] py-[1.3rem] font-[600] rounded-l-lg text-black-40
                    ">
							-
						</button>
						<button
							disabled={product.quantity === 0}
							type="button"
							className="px-[1rem] py-[1.3rem] font-[600] text-black-40 border-black-40
                     border-x-[0.1rem]">
							{orders}
						</button>
						<button
							onClick={() =>
								setOrders((prev) =>
									prev === product?.quantity ? prev : prev + 1
								)
							}
							disabled={product.quantity === 0}
							type="button"
							className="px-[1rem] py-[0rem] font-[600] text-black-40 rounded-r-lg 
                    ">
							+
						</button>
					</div>
					<button
						className="bg-red-20 px-[2rem] py-[0.1rem] text-white font-[600] text-[1rem]
               w-[12rem] rounded-lg">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
