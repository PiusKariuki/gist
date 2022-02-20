import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useShopDetails from "../Hooks/useShopDetails";
import {
	faLocationDot,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewProduct from "shared/components/ViewProduct";
import { imgUrl } from "shared/http/Http";

const Shop: React.FC = (): JSX.Element => {
	const { shopDetails, getShopDetails, load, errors } = useShopDetails();
	let { shopId } = useParams();
	const { renderSpinner } = useSpinner();

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
					<div className="w-full py-[1rem] bg-white sticky top-[4rem] z-20 border-b-4">
						<p
							className="text-[2rem] md:text-[2.5rem] text-black-40 font-[700]
                        text-center ">
							{shopDetails[0]?.shopId?.name}
						</p>
					</div>
					{renderSpinner(load)}
					<div className="flex flex-col space-y-[2rem] ">
						{/*......................................
                     *AVATAR and # OF PRODUCTS
                  ......................................*/}
						<div
							className="lg:flex lg:flex-row lg:space-y-[2rem] lg:w-full lg:justify-between
                  lg:items-center ">
							<div className="flex flex-row space-x-10 lg:self-center">
								<div className="flex flex-col ">
									<p className="text-[1.4rem] text-black-80 font-[600]">
										Avatar
									</p>
									{shopDetails.length > 0 ? (
										<img
											src={`${imgUrl}/${shopDetails[0]?.shopId?.image}`}
											alt=""
											className="w-[8rem] md:w-[14rem] object-contain"
										/>
									) : null}
								</div>

								<div className="flex flex-col space-y-auto lg:self-center lg:pt-[3rem]">
									<p className="text-black-80 text-[1.4rem] md:text-[1.4rem] font-[600]">
										Products
									</p>
									<p className="text-blue-20 text-[4rem] md:text-[2rem] font-[600]">
										{shopDetails.length}
									</p>
								</div>
							</div>
							{/*......................................
                     *PHONE AND EMAIL
                  ......................................*/}
							<div className="flex flex-row space-x-10 ">
								<div className="flex flex-col space-y-auto">
									<FontAwesomeIcon
										icon={faEnvelope}
										size="2x"
										color="rgb(0 30 43)"
									/>
									<p className="text-blue-20 text-[1.2rem] md:text-[1.4rem] font-[700]">
										{shopDetails[0]?.shopId?.email}
									</p>
								</div>
								<div className="flex flex-col space-y-auto">
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
								<div className="flex flex-col space-y-auto ">
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

					{/* shop products */}
					<p className="text-black-40 text-[1.6rem] md:text-[2.5rem] font-[700] py-[2rem]">
						Products
					</p>
					<div className="flex flex-row flex-wrap gap-[2rem] ">
						{shopDetails?.map((product: any, key: number) => (
							<ViewProduct
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
