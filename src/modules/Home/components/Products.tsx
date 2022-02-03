import useProducts from "modules/Products/hooks/useProducts";
import React, { useEffect } from "react";
import ViewProduct from "./ViewProduct";

const Products = () => {
	const { getProducts, products, errors, load } = useProducts();
	useEffect(() => {
		getProducts();
	}, []);

   console.log(products[0])

	return (
		<div className="flex flex-col py-[3rem] px-[2rem] h-full w-screen">
			<p className="text-black-40 text-[2.2rem] font-[600] mb-[2rem]">
				Recommended products
			</p>
			<div className="scroller flex flex-row gap-x-8 overflow-x-auto w-screen">
			{products.map((product: any, key: number) => (
				<ViewProduct
					name={product?.name}
					userName={product?.ownerId?.userName}
					img={product?.images[0]}
					price={product?.price}
					key={key}
				/>
			))}
			{/* <ViewProduct
				name={products[0]?.name}
				userName={products[0]?.ownerId?.userName}
				img={products[0]?.images[0]}
				price={products[0]?.price}
			/> */}
			</div>
		</div>
	);
};

export default Products;
