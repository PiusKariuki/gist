import React, { useEffect } from "react";
import useShop from "../Hooks/shop/useShop";
import CreateShop from "../components/shop/CreateShop";
import EditShopModal from "../components/shop/EditShop";
import { Route, Routes } from "react-router-dom";
import MyShopHome from "../components/shop/MyShopHome";
import AddProduct from "../components/product/AddProduct";
import MyProducts from "../components/product/MyProducts";
import AddProductImages from "../components/product/AddProductImages";
import EditProduct from "../components/product/EditProduct";
import ProductPreview from "../components/product/ProductPreview";

const MyShopsRoutesComponent = () => {
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
				<Route
					path="/products/preview/:productId"
					element={<ProductPreview />}
				/>
			</Routes>
		</div>
	);
};

export default MyShopsRoutesComponent;
