import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useShopDetails from "../../../shop/Hooks/useShopDetails";
import EditMyProduct from "modules/Manage/components/product/EditMyProduct";
import EditProductForm from "./EditProductForm";
import { useRecoilValue } from "recoil";
import { productOpen, deleteOpen } from "../../store/store";
import DeleteProduct from "./DeleteProduct";

const MyShop: React.FC = (): JSX.Element => {
	const { shopDetails, getShopDetails, load, errors } = useShopDetails();
	let { shopId } = useParams();
	const { renderSpinner } = useSpinner();

	const open = useRecoilValue(productOpen);
	const openDelete = useRecoilValue(deleteOpen);
	const [productId, setProductId] = useState("");
	const [productName, setProductName] = useState("");
	useEffect(() => {
		getShopDetails(shopId);
	}, [open, openDelete]);

	return (
		<>
			<div
				className="w-full py-[1rem] bg-white sticky top-0 z-20 border-b-4">
				<p
					className="text-[2rem] md:text-[2.5rem] text-black-40 font-[700]
                        text-center ">
					{shopDetails[0]?.shopId?.name}
				</p>
			</div>
			{load || shopDetails.length > 0 ? (
				<div
					className={`${
						open || openDelete
							? "flex flex-col px-[2rem] pb-[2rem] md:px-[3rem] lg:px-[4.5rem] opacity-50"
							: " flex flex-col px-[2rem] pb-[2rem] md:px-[3rem] lg:px-[4.5rem]"
					}`}>
					{/* shop details */}
					{renderSpinner(load)}
					<div className="flex flex-col">
						{/* shop products */}
						<p className="text-black-40 text-[1.6rem] md:text-[2.5rem] font-[700] py-[2rem]">
							Products
						</p>
						<div className="flex flex-row flex-wrap gap-[2rem] justify-start">
							{shopDetails?.map((product: any, key: number) => (
								<div
									onClick={() => {
										setProductId(product?._id);
										setProductName(product?.name);
									}}>
									<EditMyProduct
										name={product?.name}
										price={product?.price}
										img={product?.images[0]}
										id={product?._id}
										userName={product?.ownerId?.userName}
										key={key}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="flex flex-row self-center items-center py-[10rem] gap-x-[2rem] px-[2rem]">
					<div
						style={{ backgroundImage: `url(/img/wallet.png)` }}
						className="bg-contain bg-center  bg-no-repeat h-[10rem] w-[10rem]"
					/>
					<p className="text-red-20 font-[700] text-[1rem] md:text-[1.7rem]">
						This shop is empty right now.
					</p>
				</div>
			)}
			{/*edit modal */}
			{open ? (
				<div className="fixed top-[0%] md:top-[10%] md:right-[10%] z-50 bg-white shadow-xl">
					<EditProductForm productId={productId} />
				</div>
			) : null}
			{/*delete modal */}
			{openDelete ? (
				<div className="fixed top-[0%] md:top-[20%] md:right-[33%] z-50 bg-white shadow-xl">
					<DeleteProduct name={productName} productId={productId} />
				</div>
			) : null}
		</>
	);
};

export default MyShop;