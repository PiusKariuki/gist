import useCart from "modules/Cart/hooks/useCart";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useProducts from "../hooks/useProducts";
import { v4 as uuidv4 } from "uuid";


const Product: React.FC = (): JSX.Element => {
	const [index, setIndex] = useState<number>(0);
	const [orders, setOrders] = useState<number>(0);
	const { getProductById, product, errors, load } = useProducts();
	const { renderSpinner } = useSpinner();
	const { productId } = useParams();
	const { addToCart } = useCart();

	useEffect(() => {
		getProductById(productId);
	}, []);

	return (
		<div className="flex flex-col items-center px-[1rem] py-[1rem] md:px-[2rem] gap-[5rem]">
			<div
				className="flex flex-col md:flex-row flex-wrap 
            justify-around md:justify-center gap-y-[2.2rem] md:gap-[2rem] items-center">
				{renderSpinner(load)}
				<div className="flex flex-col gap-y-[2rem] self-center">
					<p className="text-center text-black-40 font-[600] text-[2rem]">
						{product?.name}
					</p>
					{product?.images?.length > 0 ? (
						<div
							style={{ backgroundImage: `url(/img/${product.images[index]})` }}
							className="bg-cover bg-center bg-no-repeat w-[60vw] h-[20vh] self-center
                     md:w-[20vw]  border-[0.12rem] border-black-40 rounded-2xl"
						/>
					) : null}
					<p className="text-center text-red-20 font-[600] text-[1.4rem]">
						{product?.quantity === 0
							? "Out of stock"
							: product.price === undefined
							? ""
							: "$" + product?.price}
					</p>
				</div>
				{/* btns */}
				<div className="flex flex-row gap-x-[1rem]">
					<div className="inline-flex rounded-md shadow-sm border-[0.1rem] border-black-40">
						<button
							onClick={() => setOrders((prev) => (prev === 0 ? 0 : prev - 1))}
							disabled={product.quantity === 0}
							type="button"
							className="px-[1rem] py-[0.2rem] font-[600] rounded-l-lg text-black-40 
                     text-center">
							-
						</button>
						<button
							disabled={product.quantity === 0}
							type="button"
							className="px-[1rem] py-[0.2rem] font-[600] text-black-40 border-black-40
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
							className="px-[1rem] py-[0.2rem] font-[600] text-black-40 rounded-r-lg 
                    ">
							+
						</button>
					</div>
					<button
						disabled={orders === 0}
						onClick={() => {
							addToCart(
								orders,
								product?.price,
								product?.images[0],
								product?.name,
								product?.shopId,
                       uuidv4()
							);
						}}
						className="bg-red-20 px-[1rem] py-[0.1rem] text-white font-[600] text-[1rem]
                  w-[8rem] rounded-lg disabled:bg-gray-400">
						Add to Cart
					</button>
				</div>
			</div>

			<div className="hidden md:flex flex-row gap-[2rem]">
				{product?.images?.map((img: string, key: number) => {
					return (
						<div
							key={key}
							style={{ backgroundImage: `url(/img/${img})` }}
							className="w-[12rem] h-[6rem] rounded-2xl bg-cover bg-center bg-no-repeat
                     border-[0.12rem] border-black-40"
							onClick={() => setIndex(key)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Product;
