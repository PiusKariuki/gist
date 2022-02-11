import useProducts from "modules/Product/hooks/useProducts";
import React, { useEffect } from "react";
import useHorizontalScroll from "shared/hooks/useHorizontalScroll";
import ViewProduct from "../../../shared/components/ViewProduct";


const Products = () => {
	const { getProducts, products, errors, load } = useProducts();
	useEffect(() => {
		getProducts();
	}, []);
   const scrollRef = useHorizontalScroll();

	return (
		<div className="flex flex-col py-[3rem] px-[2rem] h-full w-screen">
			<p className="text-black-40 text-[2.2rem] font-[600] mb-[2rem]">
				Recommended products
			</p>
			<div ref={scrollRef} className="scroller flex flex-row gap-x-8 overflow-x-auto w-screen">
			{products.map((product: any, key: number) => (
				<ViewProduct
					name={product?.name}
					userName={product?.ownerId?.userName}
					img={product?.images[0]}
					price={product?.price}
					key={key}
               id={product?._id}
				/>
			))}
			</div>
		</div>
	);
};

export default Products;
