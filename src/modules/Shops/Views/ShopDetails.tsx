import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useShopDetails from "../Hooks/useShopDetails";

const ShopDetails = () => {
	const { renderSpinner } = useSpinner();
	const { shopDetails, getShopDetails, load, errors } = useShopDetails();
	const params = useParams<any>();

	useEffect(() => {
		getShopDetails(params.shopId);
	}, []);

	let { name, email, location, phoneNumber, description } =
		shopDetails.length > 0 && shopDetails[0].shopId;

	return (
		<div className="flex flex-col px-[2rem] py-[2.5rem]">
			{/* shop details */}
			{renderSpinner(load)}
			<div
				className="flex flex-col md:flex-row md:min-h-[45vh] border-2 rounded-3xl 
            shadow-2xl  font-[300]  w-full  justify-around">
				<div className="px-[2rem] py-[2rem]">
					<p className="text-center md:text-left text-[2.2rem] text-blue-20">
						{name}
					</p>
					<p className="text-center md:text-left text-[1.2rem] tracking-normal">
						{description}
					</p>
				</div>

				<div className="h-full px-[2rem] py-[2rem] flex flex-col text-[1.4rem]">
					<p className="text-left text-[1.2rem]">Contact Information:</p>
					<p className="">
						Email:&nbsp;&nbsp;&nbsp;
						<span className="text-red-600">{email}</span>
					</p>
					<p className="">
						Name:&nbsp;&nbsp;&nbsp;<span className="text-red-600">{}</span>
					</p>
					<p className="">
						Name:&nbsp;&nbsp;&nbsp;<span className="text-red-600">{name}</span>
					</p>
					<p className="">
						Name:&nbsp;&nbsp;&nbsp;<span className="text-red-600">{name}</span>
					</p>
				</div>
			</div>
			{/* product details */}
		</div>
	);
};

export default ShopDetails;
