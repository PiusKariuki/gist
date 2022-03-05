import useProducts from "modules/Product/hooks/useProducts";
import React, { useEffect, useRef } from "react";
import useHorizontalScroll from "shared/hooks/useHorizontalScroll";
import ViewProduct from "../../../shared/components/ViewProduct";
import {
	faArrowLeft,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = () => {
	const { getProducts, products, errors, load } = useProducts();
	useEffect(() => {
		getProducts();
	}, []);
	const { scrollRight, scrollLeft } = useHorizontalScroll();
	const scrollRef = useRef<any>(null);

	return (
		<div className="flex flex-col py-[3rem] px-[2rem] h-full  relative">
			<p className="text-black-40 text-[1.4rem] md:text-[2.2rem] font-[600] mb-[2rem]">
				Recommended products
			</p>
			<div
				ref={scrollRef}
				className="scroller flex flex-row  overflow-x-scroll gap-x-8 md:flex-row ">
				{products.map((product: any, key: number) => (
					<ViewProduct
						name={product?.name}
						userName={product?.ownerId?.userName}
						price={product?.price}
						key={key}
						id={product?._id}
						shopId={product?.shopId?._id}
						image={product?.images[0]}
					/>
				))}
			</div>
			{/*......................................
                  *FLOATING BTNS FOR HORIZONTAL SCROLL
               ......................................*/}
			<div
				className=" bg-[rgba(0,0,0,.3)]  hover:bg-[rgba(0,0,0,.6)]  w-[3.125rem]
             h-[3.125rem] rounded-full
               z-10 hidden lg:flex lg:absolute  left-10 top-[50%] 
               ">
				<FontAwesomeIcon
					onClick={() => scrollLeft(scrollRef)}
					icon={faArrowLeft}
					className="flex text-[1.25rem] self-center mx-auto text-[#00bcd7]"
				/>
			</div>
			<div
				className="bg-[rgba(0,0,0,.3)]  hover:bg-[rgba(0,0,0,.6)]  z-10 hidden
             lg:flex lg:absolute text-[2rem]
               w-[3.125rem] h-[3.125rem] rounded-full right-10 top-[50%]">
				<FontAwesomeIcon
					onClick={() => scrollRight(scrollRef)}
					icon={faArrowRight}
					className="flex text-[1.25rem] self-center mx-auto text-[#00bcd7]"
				/>
			</div>
		</div>
	);
};

export default Products;
