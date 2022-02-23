import useProducts from "modules/Product/hooks/useProducts";
import useShop from "modules/shop/Hooks/useShop";
import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import SearchProduct from "../components/SearchProduct";
import "../styles/shop.css";
import SearchShop from "../components/SearchShop";
import useSpinner from "shared/components/spinner/useSpinner";
import { searchInput } from "shared/recoil/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Searching = () => {
	const [filteredProducts, setFilteredProducts] = useState<any>([]);
	const [filteredShops, setFilteredShops] = useState<any>([]);
	const search = useRecoilValue(searchInput);
	const { getProducts, products, load } = useProducts();
	const { renderSpinner } = useSpinner();
	const { shops, getShops } = useShop();
	let navigate = useNavigate();
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
	}, [search, load]);

	useEffect(() => {
		if (search.length < 1) navigate("/");
	},[]);

	return (
		<div className="flex flex-col px-[2rem] md:px-[3rem] py-[3rem]">
			{renderSpinner(load)}
			{filteredProducts.length > 0 ? (
				<p className="text-gray-10 font-[800] text-[2rem] md:text-[2rem] my-[2rem]">
					Products.
				</p>
			) : load ? null : (
				<div
					className="flex  flex-row w-[15rem] md:w-[20rem] px-[1.2rem] md:px-[2rem] py-[0.5rem] 
            shadow-xl self-center md:self-start rounded-xl text-blue-30 space-x-3 mt-[3rem] 
            items-center cursor-pointer">
					<FontAwesomeIcon icon={faCircleExclamation} size="2x" />
					<p className="text-blue-30 text-[0.9rem] md:text-[1.1rem] font-[700]">
						Sorry no products match this criteria
					</p>
				</div>
			)}

			<div
				className="flex flex-col md:flex-row flex-wrap gap-x-[2rem] 
            justify-start gap-y-[2rem] pb-[4rem]">
				{filteredProducts.length > 0 &&
					filteredProducts.map((product: any, key: number) => (
						<SearchProduct
							key={key}
							price={product?.price}
							img={product?.images[0]}
							userName={product?.ownerId?.userName}
							name={product?.name}
							id={product?._id}
						/>
					))}
			</div>

			{filteredShops.length > 0 ? (
				<p className="text-gray-10 font-[800] text-[2rem] md:text-[2rem] my-[2rem]">
					Shops.
				</p>
			) : null}

			{/* shops */}
			<div
				className="flex flex-col md:flex-row flex-wrap gap-x-[2rem] 
            justify-start gap-y-[2rem] pb-[4rem]">
				{filteredShops.length > 0 &&
					filteredShops.map((shop: any, key: number) => (
						<SearchShop
							key={key}
							img={shop?.image}
							name={shop?.name}
							userName={shop?.userId?.userName}
							id={shop._id}
						/>
					))}
			</div>
		</div>
	);
};

export default Searching;
