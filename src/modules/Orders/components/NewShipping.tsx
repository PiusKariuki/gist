import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useAddShipping from "../hooks/useAddShipping";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "shared/styles/phoneInput.css";

const NewShipping = () => {
	const {
		shippingName,
		address1,
		address2,
		state,
		city,
		phone,
		addShipping,
		handleShippingChange,
		shipLoad,
		handlePhoneChange,
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
			<p className="labels">Enter new shipping address</p>
			<form
				autoComplete="off"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					e.preventDefault();
					addShipping();
				}}
				className="flex flex-col w-full gap-y-10  ">
				<div className="flex flex-col md:flex-row w-full gap-y-6 md:gap-x-20">
					{/*......................................
                  *name
               ......................................*/}
					<input
						placeholder="Shipping Name"
						onChange={handleShippingChange}
						required
						value={shippingName}
						type="text"
						id="name"
						className="inputs w-full"
					/>

					{/*......................................
               *PHONE
            ......................................*/}
					<PhoneInput
						placeholder="Phone"
						id="phone"
						required={true}
						country={"ke"}
						value={phone}
						onChange={handlePhoneChange}
						className="inputs w-full"
					/>
				</div>
				<div className="flex flex-col md:flex-row w-full gap-y-6 md:gap-x-20">
					{/*......................................
               *ADDRESS 1
            ......................................*/}
					<input
						placeholder="Primary address"
						onChange={handleShippingChange}
						required
						value={address1}
						type="text"
						id="address1"
						className="inputs w-full"
					/>
					{/*......................................
               *Address 2
            ......................................*/}
					<input
						placeholder="Secondary address"
						onChange={handleShippingChange}
						// required
						value={address2}
						type="text"
						id="address2"
						className="inputs w-full "
					/>
				</div>
				<div className="flex flex-col md:flex-row w-full gap-y-6 md:gap-x-20">
					{/*......................................
               *STATE
            ......................................*/}
					<input
						placeholder="State"
						onChange={handleShippingChange}
						required
						value={state}
						type="text"
						id="state"
						className="inputs w-full"
					/>
					{/*......................................
               *CITY
            ......................................*/}
					<input
						placeholder="City"
						onChange={handleShippingChange}
						required
						value={city}
						type="text"
						id="city"
						className="inputs w-full"
					/>
				</div>
				<button
					disabled={shipLoad}
					type="submit"
					className="blue-btn w-full md:w-40 ">
					Continue
				</button>
			</form>{" "}
		</div>
	);
};

export default NewShipping;
