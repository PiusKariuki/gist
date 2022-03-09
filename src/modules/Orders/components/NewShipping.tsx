import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useAddShipping from "../hooks/useAddShipping";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NewShipping = () => {
	const {
		shippingName,
		shippingStreet,
		shippingZip,
		addShipping,
		handleShippingChange,
		shipLoad,
	} = useAddShipping();
	const { renderSpinner } = useSpinner();
	let navigate = useNavigate();

	return (
		<div className="flex w-full flex-col space-y-6 relative">
			<div className="absolute top-[10%] left-[35%] z-10">
				{renderSpinner(shipLoad)}
			</div>

			<div
				onClick={() => navigate(`/orders/existing`)}
				className="flex  flex-row w-[15rem] md:w-[20rem] px-[1.2rem] md:px-[2rem] py-[0.5rem] 
            shadow-xl self-center md:self-start rounded-xl text-blue-40 space-x-3 mt-[3rem] 
            items-center cursor-pointer group hover:bg-gray-20 hover:text-white">
				<FontAwesomeIcon
					icon={faCircleInfo}
					className="self-center text-[1.1rem] group-hover:text-white"
				/>
				<p
					className="text-blue-40 text-[0.9rem] md:text-[1.1rem] font-[500]
               group-hover:text-white">
					Skip and use previous info.
				</p>
			</div>
			<p className="text-gray-20 font-[600]  text-[1.2rem]">
				Enter new shipping address
			</p>
			<form
				autoComplete="off"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					addShipping(e);
				}}
				className="flex flex-col w-full space-y-10 md:gap-x-20 ">
				<input
					placeholder="Shipping Name"
					onChange={handleShippingChange}
					required
					value={shippingName}
					type="text"
					id="name"
					className=" h-[2.25rem] outline-none w-full md:w-[50%]
                  text-blue-30 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  form-ring"
				/>
				{/*......................................
               *zipcode
            ......................................*/}
				<input
					placeholder="Zip Code"
					onChange={handleShippingChange}
					required
					value={shippingZip}
					type="text"
					id="zip"
					className=" h-[2.25rem] outline-none w-full md:w-[50%]
                  text-blue-30 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  form-ring"
				/>
				{/*......................................
               *street
            ......................................*/}
				<input
					placeholder="Street"
					onChange={handleShippingChange}
					required
					value={shippingStreet}
					type="text"
					id="street"
					className=" h-[2.25rem] outline-none w-full md:w-[50%]
                  text-blue-30 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  form-ring mb-[3rem]"
				/>
				<button
					disabled={shipLoad}
					type="submit"
					className="blue-btn px-[1rem] py-[0.3rem] w-[40%] md:w-[20%] lg:w-[10%] ">
					Continue
				</button>
			</form>
		</div>
	);
};

export default NewShipping;
