import React, { useEffect } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import Cards from "../../../shared/components/ProductCard";
import useProducts from "../hooks/useProducts";

const Products = () => {
	const { getProducts, products, errors,load } = useProducts();
	const { renderSpinner } = useSpinner();
	useEffect(() => {
		getProducts();
	}, []);
	return (
		<div
			className="flex flex-col md:flex-row flex-wrap px-[2rem] py-[3rem] w-screen 
         justify-around gap-y-[2.2rem]">
         {renderSpinner(load)}
			{products.length > 0 &&
				products.map((product: any, key: number) => (
					<Cards
						key={key}
						images={product.images}
						name={product.name}
						price={product.price}
						quantity={product.quantity}
					/>
				))}
		</div>
	);
};

export default Products;
