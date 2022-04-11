import useCart from "modules/Cart/hooks/useCart";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import useProducts from "modules/Product/hooks/useProducts";

const ProductPreview: React.FC = (): JSX.Element => {
	const [index, setIndex] = useState<number>(0);
	const { getProductById, product, errors, load } = useProducts();
	const { renderSpinner } = useSpinner();
	const { productId } = useParams();
	const { addToCart } = useCart();

	useEffect(() => {
		getProductById(productId);
	}, []);

	return (
		<div
			className="flex flex-col items-start px-[1rem] md:px-[5rem] xl:px-[10rem] py-[2rem] 
          gap-[rem] min-h-screen">
			<div
				className="flex flex-col  flex-wrap items-start
             md:justify-center  md:gap-[2rem]">
				{renderSpinner(load)}
				<div
					className="flex flex-col lg:flex-row gap-y-[2rem] lg:gap-x-[10rem] lg:gap-0
               max-w-5xl">
					<div className="gap-[2rem] flex flex-col w-full">
						<p
							className="text-black text-[1.2rem] md:text-[2.25rem] font-[800] text-left
                     w-[8rem] md:w-[16rem]">
							Product Details.
						</p>
						{product?.images?.length > 0 ? (
							<div className="relative">
								<img
									src={product?.images[index]}
									alt="productImg"
									className=" h-[40vh] w-[78vw] md:w-[30rem] md:h-[60vh] 2xl:h-[20vh] 
                           object-cover rounded-2xl border-2"
								/>
								<FontAwesomeIcon
									onClick={() =>
										setIndex((prev: number) =>
											prev === 0 ? product?.images?.length - 1 : prev - 1
										)
									}
									icon={faChevronLeft}
									size="4x"
									className="hidden md:flex absolute  left-[-8%] top-[40%] md:left-[-18%]
                           text-gray-300"
								/>
								<FontAwesomeIcon
									onClick={() =>
										setIndex((prev: number) =>
											prev === product?.images?.length - 1 ? 0 : prev + 1
										)
									}
									icon={faChevronRight}
									size="4x"
									className="hidden md:flex absolute right-[-8%] top-[40%] md:right-[-18%]
                           text-gray-300"
								/>
							</div>
						) : load ? null : (
							<div className="flex flex-col py-[2rem]">
								<p
									className="text-left text-gray-10 font-[500] text-[1rem] 
                           lg:text-[1rem]">
									This product has no images
								</p>
								{/* <img
									src="/img/picture.png"
									alt=""
									className="h-[60vh]  object-contain"
								/> */}
							</div>
						)}

						<div
							className="flex flex-row gap-[2rem] overflow-x-scroll max-w-[80vw]
                     md:max-w-[40vw]">
							{product?.images?.map((img: string, key: number) => {
								return (
									<div
										key={key}
										style={{ backgroundImage: `url(${img})` }}
										className="w-[12rem] h-[6rem] rounded-2xl bg-cover bg-center 
                              bg-no-repeat border-[0.12rem] border-black-40 cursor-pointer flex-shrink-0"
										onClick={() => setIndex(key)}
									/>
								);
							})}
						</div>
					</div>

					<div className="flex flex-col lg:gap-y-[0.5rem] w-full">
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
								: "GC. " + product?.price}
						</p>
						<p className="text-left text-gray-10 font-[600] text-[1.4rem]">
							{product?.quantity === 0 ? null : "Available"}
						</p>
						<p className="text-left text-gray-10 font-[600] text-[1.4rem] mt-8">
							{product?.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPreview;
