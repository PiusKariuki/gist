import useProducts from "modules/Product/hooks/useProducts";
import useShop from "modules/shop/Hooks/useShop";
import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { searchInput } from "../../../shared/store/Search";
import SearchProduct from "../components/SearchProduct";
import "../styles/shop.css";
import SearchShop from "../components/SearchShop";
import useSpinner from "shared/components/spinner/useSpinner";


const Searching = () => {
	const [filteredProducts, setFilteredProducts] = useState<any>([]);
	const [filteredShops, setFilteredShops] = useState<any>([]);
	const search = useRecoilValue(searchInput);
	const { getProducts, products,load } = useProducts();
   const {renderSpinner} = useSpinner();
	const { shops, getShops } = useShop();
	useEffect(() => {
		getProducts();
		getShops();
	}, []);

	useEffect(() => {
		products.length > 0 &&
			setFilteredProducts(
				products.filter((product: any) => {
					return product.name.toLowerCase().includes(search.toLowerCase());
				})
			);
		shops.length > 0 &&
			setFilteredShops(
				shops.filter((shop: any) => {
					return shop.name.toLowerCase().includes(search.toLowerCase());
				})
			);
	}, [search]);

	return (
		<div className="flex flex-col px-[2rem] md:px-[3rem]">
         {renderSpinner(load)}
			{filteredProducts.length > 0 ? (
				<p className="text-black-40 font-[800] text-[1.6rem] md:text-[2rem] my-[2rem]">
					Products
				</p>
			) : null}

			<div className="scroller flex flex-row overflow-x-auto gap-x-[2rem]">
				{filteredProducts.length > 0 &&
					filteredProducts.map((product: any, key: number) => (
						<SearchProduct
							key={key}
							price={product.price}
							img={product.images[0]}
							userName={product.ownerId.userName}
							name={product.name}
                     id={product._id}
						/>
					))}
			</div>

			{filteredShops.length > 0 ? (
				<p className="text-black-40 font-[800] text-[1.6rem] md:text-[2rem] my-[2rem]">
					Shops
				</p>
			) : null}

			{/* shops */}
			<div className="flex flex-row flex-wrap items-center gap-[2rem]
            ">
				{filteredShops.length > 0 &&
					filteredShops.map((shop: any, key: number) => (
						<SearchShop
							key={key}
							img={shop.image}
							name={shop.name}
							userName={shop.userId.userName}
                     id={shop._id}
						/>
					))}
			</div>
		</div>
	);
};

export default Searching;