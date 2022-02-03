import useProducts from "modules/Products/hooks/useProducts";
import React, { useEffect } from "react";
import ViewProduct from "./ViewProduct";

const Products = () => {
	const { getProducts, products, errors, load } = useProducts();
	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="flex flex-col py-[3rem] px-[2rem]">
			<p className="text-black-40 text-[2.2rem] font-[600] mb-[2rem]">
				Recommended products
			</p>
			<div className="scroller flex flex-row gap-x-8 overflow-x-auto w-screen">
				{products.length > 0 &&
					products.map((product: any, key: number) => (
							<ViewProduct
								name={product.name}
								userName={product.ownerId.userName}
								img={product.images[0]}
								price={product.price}
								key={key}
							/>
					))}
			</div>
		</div>
	);
};

export default Products;
