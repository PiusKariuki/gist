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
         px-[2rem] py-[4rem] relative bg-gray-50">
			<div
				className="invisible md:visible absolute w-[40rem] h-[40rem] top-0 left-0 
            bg-gray-50 -z-10 rounded-br-full"
			/>
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
			{/* modals */}
			<CreateShop openCreate={openCreate} setOpenCreate={setOpenCreate} />
			{openDelete ? (
				<div className="fixed top-[20%] center z-50  inset-y-0">
					<DeleteShop
						shopId={shopId}
						setOpenDelete={setOpenDelete}
						name={shopName}
					/>
				</div>
			) : null}
			{renderSpinner(load)}
			<div
				className={`${
					!openCreate
						? "flex flex-col md:flex-row justify-between gap-[2rem] md:gap-[2rem] md:px-[2rem] md:flex-wrap "
						: "hidden"
				}`}>

            {myShops?.length>0 }

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
								setShopName(shop.name);
								setOpenDelete(true);
							}}
							className=" px-[1rem] py-[0.4rem] rounded-lg absolute top-[5%] border-[0.18rem]
                     left-[5%] text-[1rem] border-red-400">
							<FontAwesomeIcon
								icon={faTrash}
								size="1x"
								className="self-center"
								color="red"
							/>
						</button>
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
			</div>

         	<div className="absolute flex left-0 top-[0%] bg-gray-50 z-50">
					<EditShopModal open={open} shopId={shopId} setOpen={setOpen} />
				</div>
		</div>
	);
};

export default MyShops;
