import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useShopDetails from "../../../shop/Hooks/useShopDetails";
import ViewMyProduct from "modules/Manage/components/product/ViewMyProduct";
import { useRecoilValue } from "recoil";
import { deleteOpen } from "../../store/store";
import DeleteProduct from "./DeleteProduct";

const MyShop: React.FC = (): JSX.Element => {
	const { shopDetails, getShopDetails, load } = useShopDetails();
	let { shopId } = useParams();
	const { renderSpinner } = useSpinner();

	const openDelete = useRecoilValue(deleteOpen);
	const [productId, setProductId] = useState("");
	const [productName, setProductName] = useState("");

	useEffect(() => {
		getShopDetails(shopId);
	}, [openDelete]);

	return (
		<div className="flex flex-col w-full md:w-screen">
			<div className="w-full py-[1rem] bg-white  border-b-4 mb-[2rem]">
				<p
					className="text-[2rem] md:text-[2.5rem] text-black-40 font-[700]
               md:px-[2rem] lg:px-[4.5rem]">
					My products
				</p>
			</div>
			{load || shopDetails.length > 0 ? (
				<div
					className={`${
						openDelete
							? "flex flex-col pb-[2rem] md:px-[2rem] lg:px-[4.5rem] opacity-50"
							: " flex flex-col  pb-[2rem] md:px-[2rem] lg:px-[4.5rem]"
					}`}>
					{/* shop details */}
					{renderSpinner(load)}
					<div className="flex flex-col">
						<div className="flex flex-col md:flex-row md:justify-self-center gap-8 flex-wrap">
							{shopDetails?.map((product: any, key: number) => (
								<div
									key={key}
									onClick={() => {
										setProductId(product?._id);
										setProductName(product?.name);
									}}>
									<ViewMyProduct
										name={product?.name}
										price={product?.price}
										images={product?.images}
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

			{/*delete modal */}
			{openDelete ? (
				<div className="fixed top-[0%] md:top-[20%] md:right-[33%] z-50 bg-white shadow-xl">
					<DeleteProduct shopId={shopId}  name={productName} productId={productId} />
				</div>
			) : null}
		</div>
	);
};

export default MyShop;
