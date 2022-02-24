import { faEdit, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useShop from "../../Hooks/shop/useShop";
import CreateShop from "./CreateShop";
import EditShopModal from "./EditShopModal";
import ViewMyShops from "./ViewMyShops";
import DeleteShop from "./DeleteShop";
import useDeleteShop from "../../Hooks/shop/useDeleteShop";
import { Route, Routes } from "react-router-dom";
import MyShopHome from "./MyShopHome";
import AddProduct from "../product/AddProduct";

const MyShops = () => {
	const { myShops, load, getShopsByUserId } = useShop();
	const { renderSpinner } = useSpinner();
	const [open, setOpen] = useState<boolean>(false);
	const [shopId, setShopId] = useState<string>("");
	const [shopName, setShopName] = useState<string>("");
	const [openCreate, setOpenCreate] = useState<boolean>(false);
	const { openDelete, setOpenDelete } = useDeleteShop();

	useEffect(() => {
		getShopsByUserId();
	}, [openCreate, openDelete]);

	return (
		<div
			className="flex flex-col  flex-nowrap  gap-[2rem] 
         px-[2rem] py-[4rem] relative bg-white">
			<Routes>
				<Route path="/" element={<MyShopHome />} />
				<Route path="/create" element={<CreateShop />} />
            <Route path="/edit/:shopId" element={<EditShopModal />} />
            <Route path="/add/:shopId" element={<AddProduct />} />
			</Routes>
		</div>
	);
};

export default MyShops;
