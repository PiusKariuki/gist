import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useShopDetails from "../Hooks/useShopDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPhoneSquareAlt,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "shared/components/ProductCard";

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
		<>
			{load || shopDetails.length > 0 ? (
				<div className="flex flex-col px-[2rem] py-[2.5rem]">
					{/* shop details */}
					{renderSpinner(load)}
					<div
						className="flex flex-col md:flex-row  md:min-h-[45vh] border-2 rounded-3xl 
                   shadow-2xl  font-[500]  w-full  justify-around">
						<div className="px-[2rem] py-[2rem] flex flex-col md:max-w-[40%]">
							<p
								className="text-left text-[2.2rem] text-blue-20 
                        tracking-wide">
								{name}
							</p>
							<p
								className="text-left text-[1rem] md:text-[1.2rem] tracking-wider
                        leading-loose">
								{description}
							</p>
						</div>

						<div className="h-full px-[2rem] py-[2rem] flex flex-col">
							<p className="text-left text-[1rem] md:text-[1.5rem] underline mb-[1rem]">
								Contact Information:
							</p>
							<p
								className="text-left self-start text-blue-20 font-[600] text-[1rem]
                        md:text-[1.5rem] tracking-wider">
								<FontAwesomeIcon
									icon={faEnvelope}
									size="2x"
									color="purple"
									className="pt-[1rem] mr-[1rem]"
								/>
								{email}
							</p>
							<p
								className="text-left self-start text-blue-20 font-[600] text-[1rem]
                        md:text-[1.5rem] tracking-wider ">
								<FontAwesomeIcon
									icon={faPhoneSquareAlt}
									size="2x"
									color="purple"
									className="pt-[1rem] mr-[1rem]"
								/>
								{phoneNumber}
							</p>
							<p
								className="text-left self-start text-blue-20 font-[600] text-[1rem]
                        md:text-[1.5rem] tracking-wider">
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									size="2x"
									color="purple"
									className="pt-[1rem] mr-[1rem]"
								/>
								{location}
							</p>
						</div>
					</div>

					{/* product details */}
					<p className="text-blue-20 text-[1.5rem] md:text-[4.2rem] text-center w-screen 
               self-center justify-center mt-[2rem] md:mt-[4rem] font-[900]">
						Here are our products.
					</p>
					<div
						className="flex flex-col md:flex-row flex-wrap px-[2rem] py-[3rem] w-screen 
                  justify-around gap-y-[4.2rem]">
						{shopDetails.length > 0 &&
							shopDetails.map((product: any, key: number) => (
								<ProductCard
									key={key}
									images={product.images}
									name={product.name}
									price={product.price}
									quantity={product.quantity}
								/>
							))}
					</div>
				</div>
			) : (
				<div
					className="flex flex-row flex-nowrap  w-screen py-[4rem] md:py-[5rem] px-[2rem] 
               md:px-[2rem] items-center justify-center gap-x-[1rem]">
					<img
						src="/img/wallet.png"
						alt=""
						className="max-w-[30vw]   md:max-w-[80vw] md:max-h-[40vh]"
					/>
					<p className="text-left text-[2rem] text-black-40 font-[500]">
						This shop is empty.
						<img src="/img/" alt="" />
					</p>
				</div>
			)}
		</>
	);
};

export default ShopDetails;
