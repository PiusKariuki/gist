import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useShopDetails from "../Hooks/useShopDetails";
import {
	faLocationDot,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShopProducts from "../components/ShopProducts";
import { user } from "shared/recoil/user";
import { useRecoilValue } from "recoil";

const Shop: React.FC = (): JSX.Element => {
	const { shopDetails, getShopDetails, load, errors } = useShopDetails();
	let { shopId } = useParams();
	const { renderSpinner } = useSpinner();
	let { _id } = useRecoilValue<any>(user);

	let navigate = useNavigate();
	useEffect(() => {
		getShopDetails(shopId);
	}, []);

	return (
		<>
			{load || shopDetails.length > 0 ? (
				<div className="flex flex-col px-[2rem] py-[2rem] lg:py-[4rem] lg:px-[4rem]">
					{/*......................................
                  *NAME
               ......................................*/}
					<div className="w-full py-[1rem] bg-white z-20 border-b-4">
						<p
							className="text-[2rem] md:text-[2.5rem] text-black-40 font-[700]
                       ">
							{shopDetails[0]?.shopId?.name}
							<span className="font-[500] text-[1.5rem] md:text-[2rem]">
								&nbsp;&nbsp;product's
							</span>
						</p>
					</div>
					{renderSpinner(load)}
					{/*......................................
                  *EDIT BTN
               ......................................*/}
					{shopDetails[0]?.ownerId === _id ? (
						<button
							onClick={() => navigate(`/myAccount/shops/edit/${shopId}`)}
							className="bg-gray-20 text-white font-bold w-[8rem] py-[0.5rem]
                  px-[1rem] rounded-lg hover:bg-blue-40 mt-[2rem]">
							Edit
						</button>
					) : null}

					{/* shop products */}
					<p
						className=" text-black-40 text-[1.6rem] md:text-[2.5rem] 
                  font-[700] py-[2rem] ml-[2rem]"></p>
					<div className="flex flex-col md:flex-row flex-wrap gap-x-[2rem] gap-y-[1.5rem]
                justify-around">
						{shopDetails?.map((product: any, key: number) => (
							<ShopProducts
								image={product?.images[0]}
								name={product?.name}
								price={product?.price}
								id={product?._id}
								userName={product?.ownerId?.userName}
								key={key}
								shopId={shopDetails[0]?.shopId?._id}
							/>
						))}
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
		</>
	);
};

export default Shop;
