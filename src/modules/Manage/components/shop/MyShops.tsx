import React, { useEffect } from "react";
import useShop from "../../Hooks/shop/useShop";
import CreateShop from "./CreateShop";
import EditShopModal from "./EditShop";
import { Route, Routes } from "react-router-dom";
import MyShopHome from "./MyShopHome";
import AddProduct from "../product/AddProduct";
import MyProducts from "../product/MyProducts";
import AddProductImages from "../product/AddProductImages";
import EditProduct from "../product/EditProduct";

const MyShops = () => {
	const { getShopsByUserId } = useShop();

	useEffect(() => {
		getShopsByUserId();
	}, []);

	return (
		<div
			className="flex flex-col  flex-nowrap  gap-[2rem] 
         px-[2rem] py-[4rem] relative bg-white">
			<Routes>
				<Route path="/" element={<MyShopHome />} />
				<Route path="/create" element={<CreateShop />} />
				<Route path="/edit/:shopId" element={<EditShopModal />} />
				<Route path="/add/:shopId" element={<AddProduct />} />
				<Route
					path="/add/:shopId/images/:productId"
					element={<AddProductImages />}
				/>
				<Route path="/products/:shopId" element={<MyProducts />} />
				<Route path="/products/edit/:productId" element={<EditProduct />} />     
			</Routes>
		</div>
	);
};

export default MyShops;
