import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import Topbar from "shared/components/Topbar";
import useProducts from "../hooks/useProducts";

const Product:React.FC = ():JSX.Element => {
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
			className="flex flex-col md:flex-row flex-wrap px-[2rem] py-[3rem] w-screen 
         justify-around gap-y-[2.2rem]">
			{/* <Topbar /> */}
			{renderSpinner(load)}
			<div className="flex flex-col gap-y-[2rem]">
				<p className="text-left text-black-40 font-[600] text-[1.4rem]">
					{product?.name}
				</p>
				{/* <div
					style={{ backgroundImage: `url(/img/${product?.images[index]})` }}
					className="bg-contain bg-center bg-no-repeat w-[90vw] h-[70vh] "
				/> */}
				<p className="text-left text-red-20 font-[600] text-[1.4rem]">
					{product?.quantity === 0 ? "Out of stock" : "$" + product?.price}
				</p>
				<div className="inline-flex rounded-md shadow-sm">
					<button
						onClick={() => setOrders((prev) => (prev === 0 ? 0 : prev - 1))}
						disabled={product.quantity === 0}
						type="button"
						className="px-[1rem] py-[1.3rem] font-[600] rounded-l-lg text-black-40">
						-
					</button>
					<button
						disabled={product.quantity === 0}
						type="button"
						className="px-[1rem] py-[1.3rem] font-[600] text-black-40">
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
						className="px-[1rem] py-[1.3rem] font-[600] text-black-40 rounded-r-lg ">
						+
					</button>
				</div>
				<button
					className="bg-red-20 px-[2rem] py-[0.8rem] text-white font-[600] text-[1.2rem]
               ">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Product;
