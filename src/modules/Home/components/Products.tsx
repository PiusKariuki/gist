import useProducts from "modules/Product/hooks/useProducts";
import React, { useEffect, useRef } from "react";
import useHorizontalScroll from "shared/hooks/useHorizontalScroll";
import ViewProduct from "../../../shared/components/ViewProduct";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = () => {
	const { getProducts, products, errors, load } = useProducts();
	useEffect(() => {
		getProducts();
	}, []);
	const { scrollRight, scrollLeft } = useHorizontalScroll();
	const scrollRef = useRef<any>(null);

	return (
		<div className="flex flex-col py-[3rem] px-[2rem] h-full w-screen relative">
			<p className="text-black-40 text-[1.4rem] md:text-[2.2rem] font-[600] mb-[2rem]">
				Recommended products
			</p>
			<div
				ref={scrollRef}
				className="scroller flex flex-row  overflow-x-auto gap-x-8 md:flex-row ">
				{products.map((product: any, key: number) => (
					<ViewProduct
						name={product?.name}
						userName={product?.ownerId?.userName}
						img={product?.images[0]}
						price={product?.price}
						key={key}
						id={product?._id}
						shopId={product?.shopId?._id}
					/>
				))}
			</div>
			{/*......................................
                  *FLOATING BTNS FOR HORIZONTAL SCROLL
               ......................................*/}
			<FontAwesomeIcon
				onClick={() => scrollLeft(scrollRef)}
				icon={faAnglesLeft}
				className="z-10 hidden lg:flex lg:absolute text-[4rem] left-10 top-[50%] text-gray-300"
			/>
			<FontAwesomeIcon
				onClick={() => scrollRight(scrollRef)}
				icon={faAnglesRight}
				className="z-10 hidden lg:flex lg:absolute text-[4rem] right-10 top-[50%] text-gray-300"
			/>
		</div>
	);
};

export default Products;
