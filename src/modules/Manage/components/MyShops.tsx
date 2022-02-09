import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchShop from "modules/Search/components/SearchShop";
import React, { useEffect, useState } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useShop from "../Hooks/useShop";
import CreateShop from "./CreateShop";
import EditShopModal from "./EditShopModal";

const MyShops = () => {
	const { myShops, load, getShopsByUserId } = useShop();
	const { renderSpinner } = useSpinner();
	const [open, setOpen] = useState<boolean>(false);
	const [shopId, setShopId] = useState<string>("");
	const [openCreate, setOpenCreate] = useState<boolean>(false);

	useEffect(() => {
		getShopsByUserId();
	}, []);
	return (
		<div
			className="flex flex-col flex-nowrap items-center gap-[2rem] px-[2rem] py-[3rem] 
          relative">
			<button
				onClick={() => setOpenCreate((prev: boolean) => !prev)}
				className={`${
					!openCreate ? "flex p-[1rem] bg-blue-20 rounded-md text-white text-center text-[1.4rem]" : "hidden"
				}`}>
				<FontAwesomeIcon icon={faEdit} size="2x" 
            className="self-center mr-[1rem]"
            />
				Create Shop
			</button>
			<CreateShop openCreate={openCreate} setOpenCreate={setOpenCreate} />
			{renderSpinner(load)}
			<div
				className={`${!openCreate ? "flex flex-col md:flex-row justify-betweeen gap-[2rem] md:gap-[2rem] md:px-[2rem] md:flex-wrap"
            : "hidden"}`}>
				{myShops.map((shop: any, key: number) => (
					<div className="relative" key={key}>
						<SearchShop
							key={key}
							img={shop.image}
							name={shop.name}
							userName={shop.userId.userName}
							id={shop._id}
						/>
						<button
							onClick={() => {
								setShopId(shop._id);
								setOpen(true);
							}}
							className="bg-red-20 px-[2rem] py-[1rem] rounded-lg absolute top-[5%]
                     right-[5%] text-white text-[1.4rem]">
							Edit
						</button>
					</div>
				))}
				<div className="absolute left-0 ">
					<EditShopModal open={open} shopId={shopId} setOpen={setOpen} />
				</div>
			</div>
		</div>
	);
};

export default MyShops;
