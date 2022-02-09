import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useShopDetails from "../Hooks/useShopDetails";
import {
	faMapMarkerAlt,
	faEnvelope,
	faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ViewProduct from "shared/components/ViewProduct";
import EditMyProduct from "modules/Product/components/EditMyProduct";

const MyShop: React.FC = (): JSX.Element => {
	const { shopDetails, getShopDetails, load, errors } = useShopDetails();
	let { shopId } = useParams();
	const { renderSpinner } = useSpinner();

	useEffect(() => {
		getShopDetails(shopId);
	}, []);

	return (
		<>
			{load || shopDetails.length > 0 ? (
				<div className="flex flex-col px-[2rem] pb-[2rem]">
					{/* shop details */}
					{renderSpinner(load)}
					<div className="flex flex-col">
						<div className="w-full py-[1rem] bg-white sticky top-0 z-50 border-b-4">
							<p
								className="text-[2rem] md:text-[2.5rem] text-black-40 font-[700]
                        text-center ">
								{shopDetails[0]?.shopId?.name}
							</p>
						</div>

						<div className="flex flex-row flex-nowrap justify-around py-[2rem]">
							{shopDetails.length > 0 ? (
								<div
									style={{
										backgroundImage: `url(/img/${shopDetails[0]?.shopId?.image})`,
									}}
									className="h-[6rem] w-[6rem] rounded-full bg-contain bg-center 
                           bg-no-repeat self-center bg-teal-100"
								/>
							) : null}
							<div className="flex flex-col gap-0 self-center items-center">
								<p className="text-blue-20 text-[1rem] md:text-[1.4rem] font-[600]">
									{shopDetails.length}
								</p>
								<p className="text-black-40 text-[1rem] md:text-[1.4rem] font-[600]">
									Products
								</p>
							</div>
						</div>
						{/* more deets😁 */}
						<div className="flex flex-row flex-nowrap gap-x-[1.4rem] py-[2rem] justify-around">
							<div className="flex flex-col gap-0 items-center">
								<FontAwesomeIcon icon={faEnvelope} size="1x" color="blue" />
								<p className="text-blue-20 text-[1rem] md:text-[1.4rem] font-[700]">
									{shopDetails[0]?.shopId?.email}
								</p>
							</div>

							<div className="flex flex-col gap-0 items-center">
								<FontAwesomeIcon icon={faPhoneVolume} size="1x" color="blue" />
								<p
									className="text-blue-20 text-[1rem] md:text-[1.4rem] font-[600]
                           text-center">
									{shopDetails[0]?.shopId?.phoneNumber}
								</p>
							</div>

							<div className="flex flex-col gap-0 items-center">
								<FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="blue" />
								<p
									className="text-blue-20 text-[1rem] md:text-[1.4rem] font-[600] 
                        text-center">
									&nbsp;&nbsp;{shopDetails[0]?.shopId?.location}
								</p>
							</div>
						</div>
						{/* shop description. */}
						<div className="flex py-[2rem]">
							<p className="text-left text-[1.3rem] tracking-wide leading-relaxed text-blue-40">
								{shopDetails[0]?.shopId?.description}
							</p>
						</div>
						{/* shop products */}
						<p className="text-black-40 text-[1.6rem] md:text-[2.5rem] font-[700] py-[2rem]">
							Products
						</p>
						<div className="flex flex-row flex-wrap gap-[2rem] justify-around">
							{shopDetails?.map((product: any, key: number) => (
								<EditMyProduct
									name={product?.name}
									price={product?.price}
									img={product?.images[0]}
									id={product?._id}
									userName={product?.ownerId?.userName}
									key={key}
								/>
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
		</>
	);
};

export default MyShop;
