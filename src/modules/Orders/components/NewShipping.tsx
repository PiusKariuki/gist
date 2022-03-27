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
      handlePhoneChange
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
               e.preventDefault();
					addShipping();
				}}
				className="flex flex-row flex-wrap w-full gap-y-10 md:gap-x-20 ">
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
					className=" h-[2.25rem] outline-none w-full md:w-[40%] text-blue-40
                rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
               form-ring"
				/>
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
					className=" h-[2.25rem] outline-none w-full md:w-[40%]
                  text-blue-40 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  form-ring"
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
					className=" h-[2.25rem] outline-none w-full md:w-[40%]
                  text-blue-40 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  form-ring "
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
					className=" h-[2.25rem] outline-none w-full md:w-[40%]
               text-blue-40 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
               form-ring "
				/>
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
					className=" h-[2.25rem] outline-none w-full md:w-[40%]
               text-blue-40 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
               form-ring "
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
					className="py-[0.1rem] md:py-[0.3rem] outline-none w-full md:w-[40%]
               h-[2.25rem]  text-blue-40 rounded-[0.25rem] font-bold px-[1rem] form-ring"
				/>

           <button
				disabled={shipLoad}
				type="submit"
				className="h-[2.25rem] blue-btn px-[1rem] py-[0.3rem] w-[40%] md:w-[20%] lg:w-[10%] ">
				Continue
			</button> 
			</form>{" "}
			
		</div>
	);
};

export default NewShipping;
