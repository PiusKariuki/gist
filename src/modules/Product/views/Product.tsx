import useCart from "modules/Cart/hooks/useCart";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useProducts from "../hooks/useProducts";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronCircleLeft,
	faChevronCircleRight,
	faChevronRight,
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { imgUrl } from "shared/http/Http";

const Product: React.FC = (): JSX.Element => {
	const [index, setIndex] = useState<number>(0);
	const [orders, setOrders] = useState<number>(1);
	const { getProductById, product, errors, load } = useProducts();
	const { renderSpinner } = useSpinner();
	const { productId } = useParams();
	const { addToCart } = useCart();

	useEffect(() => {
		getProductById(productId);
	}, []);

	return (
		<div
			className="flex flex-col items-start px-[1rem] md:px-[5rem] lg:px-[10rem] py-[4rem] 
          gap-[5rem] min-h-screen">
			<div
				className="flex flex-col  flex-wrap items-start
             md:justify-center  md:gap-[2rem]">
				{renderSpinner(load)}
				<div className="flex flex-col lg:flex-row gap-y-[2rem] lg:gap-0  max-w-5xl">
					<div className="gap-[2rem] flex flex-col">
						<p
							className="text-black text-[2.25rem] font-[800] text-left
                  w-[8rem] md:w-[16rem]">
							Product Details.
						</p>
						{product?.images?.length > 0 ? (
							<div className="relative">
								<img
									src="/img/lebron2.png"
									alt="productImg"
									className="min-h-96"
								/>
								<FontAwesomeIcon
									icon={faChevronLeft}
									size="4x"
									color="gray"
									className="hidden md:flex absolute  left-[-6%] top-[40%]"
								/>
								<FontAwesomeIcon
									icon={faChevronRight}
									size="4x"
									color="gray"
									className="hidden md:flex absolute right-[-6%] top-[40%]"
								/>
							</div>
						) : null}
					</div>

					<div className="flex flex-col  lg:ml-[8rem] lg:gap-y-[0.5rem]">
						<p className="text-left text-gray-10 font-[600] text-[1.25rem] lg:text-[1.6rem]">
							{product?.name}
						</p>
						<p className="text-left text-gray-10 font-[400] text-[0.78rem] lg:text-[1rem]">
							By <span className="text-blue-20">Nike</span>
						</p>
						<p className="text-left text-blue-20 font-[600] text-[1.4rem]">
							{product?.quantity === 0
								? "$" + product.price
								: product.price === undefined
								? ""
								: "$" + product?.price}
						</p>
						<p className="text-left text-gray-10 font-[600] text-[1.4rem]">
							{product?.quantity === 0 ? null : "Available"}
						</p>
						<p className="text-left text-gray-10 font-[600] text-[1.4rem]">
							{product?.description}
						</p>

						{/* btns */}
						<div
							className="flex flex-col gap-x-[1rem] my-[2rem] gap-[1.5rem] mt-auto
                      items-center self-start">
							<div
								className="inline-flex rounded-md shadow-sm border-[0.2rem]
                      border-blue-20">
								<button
									onClick={() =>
										setOrders((prev) => (prev === 0 ? 0 : prev - 1))
									}
									disabled={product.quantity === 0}
									type="button"
									className="px-[1.3rem] py-[0.5rem] font-[600] rounded-l-lg text-black-40 ">
									<FontAwesomeIcon
										icon={faChevronCircleLeft}
										size="2x"
										color="red"
									/>
								</button>
								<button
									disabled={product.quantity === 0}
									type="button"
									className="px-[2rem] py-[0.5rem] font-[600] text-black-40 border-blue-20
                           border-x-[0.2rem]">
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
									className="px-[1.3rem] py-[0.5rem] font-[600] text-black-40 rounded-r-lg ">
									<FontAwesomeIcon
										icon={faChevronCircleRight}
										size="2x"
										color="green"
									/>
								</button>
							</div>
							<button
								disabled={orders === 0 || product?.quantity === 0}
								onClick={() => {
									setOrders(1);
									addToCart(
										orders,
										product?.price,
										product?.images[0],
										product?.name,
										product?.shopId,
										product?._id,
										uuidv4()
									);
								}}
								className="blue-btn self-start px-[3.7rem]">
								{product?.quantity === 0 ? "Out of stock" : "Add To Cart"}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="hidden md:flex flex-row gap-[2rem]">
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
			</div> */}
		</div>
	);
};

export default Product;
