import { faEdit, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useShop from "../Hooks/useShop";
import CreateShop from "./CreateShop";
import EditShopModal from "./EditShopModal";
import ViewMyShops from "../../shop/components/ViewMyShops";

const MyShops = () => {
	const { myShops, load, getShopsByUserId } = useShop();
	const { renderSpinner } = useSpinner();
	const [open, setOpen] = useState<boolean>(false);
	const [shopId, setShopId] = useState<string>("");
	const [openCreate, setOpenCreate] = useState<boolean>(false);

	useEffect(() => {
		getShopsByUserId();
	}, [openCreate]);
	return (
		<div className="overflow-y-clip  flex flex-col  flex-nowrap items-center gap-[2rem] 
         px-[2rem] py-[4rem] relative">
			<button
				onClick={() => setOpenCreate((prev: boolean) => !prev)}
				className={`${
					!openCreate && !open
						? "flex px-[1rem] py-[0.5rem] bg-blue-20 rounded-md text-white text-center text-[1.4rem] m-[2rem] self-start"
						: "hidden"
				}`}>
				<FontAwesomeIcon
					icon={faEdit}
					size="1x"
					className="self-center mr-[1rem]"
				/>
				Create Shop
			</button>
			<CreateShop openCreate={openCreate} setOpenCreate={setOpenCreate} />
			{renderSpinner(load)}
			<div
				className={`${
					!openCreate
						? "flex flex-col md:flex-row justify-around gap-[2rem] md:gap-[2rem] md:px-[2rem] md:flex-wrap "
						: "hidden"
				}`}>
				{myShops.map((shop: any, key: number) => (
					<div className="relative" key={key}>
						<ViewMyShops
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
							className=" px-[1rem] py-[0.4rem] rounded-lg absolute top-[5%] border-[0.18rem]
                     right-[5%] text-[1rem] border-blue-20">
							<FontAwesomeIcon
								icon={faPen}
								size="1x"
								className="self-center"
								color="blue"
							/>
						</button>
					</div>
				))}
				<div className="absolute left-0 top-20 bg-gray-300 z-50 lg:h-screen">
					<EditShopModal open={open} shopId={shopId} setOpen={setOpen} />
				</div>
			</div>
		</div>
	);
};

export default MyShops;
