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
import { imgUrl } from "shared/http/Http";
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
					<div className="w-full py-[1rem] bg-white sticky top-[8rem] z-20 border-b-4">
						<p
							className="text-[2rem] md:text-[2.5rem] text-black-40 font-[700]
                       ">
							{shopDetails[0]?.shopId?.name}
						</p>
					</div>
					{renderSpinner(load)}
					<div className="flex flex-col space-y-[2rem] ">
						{/*......................................
                     *AVATAR and # OF PRODUCTS
                  ......................................*/}
						<div
							className="lg:flex md:flex-row space-y-8 md:space-y-[2rem] md:w-full 
                     md:justify-between lg:items-center ">
							<div className="flex flex-row space-x-10 self-center lg:self-center py-[2rem]">
								<div className="flex flex-col md:self-end ">
									{shopDetails.length > 0 ? (
										<img
											src={`${imgUrl}/${shopDetails[0]?.shopId?.image}`}
											alt=""
											className="h-[6rem] w-[8rem] md:w-[14rem] object-cover card-border
                                 self-center"
										/>
									) : null}
								</div>

								<div className="flex flex-col space-y-auto lg:self-center lg:pt-[3rem]">
									<p className="text-black-80 text-[1.4rem] md:text-[1.4rem] font-[600]">
										Products
									</p>
									<p className="text-blue-20 text-[2rem] md:text-[2rem] font-[600]">
										{shopDetails.length}
									</p>
								</div>
							</div>
							{/*......................................
                     *EMAIL AND LOCATION
                  ......................................*/}
							<div className="flex flex-row space-x-10">
								<div className="flex flex-col space-y-2">
									<FontAwesomeIcon
										icon={faEnvelope}
										size="2x"
										color="rgb(0 30 43)"
									/>
									<p className="text-blue-20 text-[1.2rem] md:text-[1.4rem] font-[700]">
										{shopDetails[0]?.shopId?.email}
									</p>
								</div>
								<div className="flex flex-col space-y-2">
									<FontAwesomeIcon
										icon={faLocationDot}
										size="2x"
										color="rgb(0 30 43)"
									/>
									<p className="text-blue-20 text-[1.2rem] md:text-[1.4rem] font-[700]">
										{shopDetails[0]?.shopId?.location}
									</p>
								</div>
							</div>
							{/*......................................
                     *PHONE
                  ......................................*/}

							<div className="flex flex-row ">
								<div className="flex flex-col space-y-2 ">
									<FontAwesomeIcon
										icon={faPhone}
										size="2x"
										color="rgb(0 30 43)"
										className=""
									/>
									<p className="text-blue-20 text-[1.2rem] md:text-[1.4rem] font-[700]">
										{shopDetails[0]?.shopId?.phoneNumber}
									</p>
								</div>
							</div>
						</div>
						{/*......................................
                     *DESCRIPTION
                  ......................................*/}
						<div className="flex flex-row">
							<div className="flex flex-col space-y-auto ">
								<p className="text-blue-20 text-[0.9rem] md:text-[1rem] font-[600]">
									{shopDetails[0]?.shopId?.description}
								</p>
							</div>
						</div>
					</div>
					{/*......................................
                  *EDIT BTN
               ......................................*/}
					{shopDetails[0]?.ownerId === _id ? (
						<button
							onClick={() => navigate(`/myAccount/shops/edit/${shopId}`)}
							className="bg-gray-20 text-white font-bold w-[8rem] py-[0.5rem]
                  px-[1rem] rounded-lg hover:bg-blue-500 mt-[2rem]">
							Edit
						</button>
					) : null}

					{/* shop products */}
					<p className="text-black-40 text-[1.6rem] md:text-[2.5rem] font-[700] py-[2rem]">
						Products
					</p>
					<div className="flex flex-col md:flex-row flex-wrap gap-[2rem] ">
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
