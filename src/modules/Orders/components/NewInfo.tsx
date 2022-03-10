import React from "react";
import useAddBilling from "../hooks/useAddBilling";
import { billingOpen } from "../store/store";
import { useSetRecoilState } from "recoil";
import useSpinner from "shared/components/spinner/useSpinner";
import useAddShipping from "../hooks/useAddShipping";

const NewInfo = () => {
	const {
		billingName,
		street,
		zip,
		addBilling,
		handleChange,
		clearAttributes,
		load,
	} = useAddBilling();

	const {
		shippingName,
		shippingStreet,
		shippingZip,
		addShipping,
		handleShippingChange,
		clearShippingAttributes,
		shipLoad,
	} = useAddShipping();

	const setOpen = useSetRecoilState(billingOpen);
	const { renderSpinner } = useSpinner();
	return (
		<div className="flex flex-col  space-y-8">
			<form
				autoComplete="off"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					addShipping(e);
					addBilling(e);
				}}
				className="flex flex-col md:flex-row w-full py-[6rem] px-[3rem]
               space-y-10 md:gap-x-20 lg:py-[6rem]">
				{/*......................................
               *billing info
            ......................................*/}
				<div className="flex flex-col w-full space-y-8">
					{/*......................................
               *name
            ......................................*/}
					<input
						placeholder="Billing Name"
						onChange={handleChange}
						required
						value={billingName}
						type="text"
						id="name"
						className=" h-[2.25rem] outline-none w-full
                  text-black-80 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  form-ring"
					/>
					{/*......................................
               *zipcode
            ......................................*/}
					<input
						placeholder="Zip Code"
						onChange={handleChange}
						required
						value={zip}
						type="text"
						id="zip"
						className=" h-[2.25rem] outline-none w-full
                  text-black-80 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  form-ring"
					/>
					{/*......................................
               *street
            ......................................*/}
					<input
						placeholder="Street"
						onChange={handleChange}
						required
						value={street}
						type="text"
						id="street"
						className=" h-[2.25rem] outline-none w-full
                  text-black-80 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  form-ring"
					/>
				</div>
				{/*......................................
               *shipping info
            ......................................*/}
				<div className="flex flex-col w-full space-y-8">
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
						className=" h-[2.25rem] outline-none w-full
                  text-black-80 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
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
						className=" h-[2.25rem] outline-none w-full
                  text-black-80 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
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
						className=" h-[2.25rem] outline-none w-full
                  text-black-80 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  form-ring"
					/>

					<div className="flex justify-between">
						<button
							type="submit"
							className="blue-btn px-[1rem] py-[0.3rem] w-[40%]">
							Submit
						</button>
						{renderSpinner(load)}
					</div>
				</div>
			</form>
		</div>
	);
};

export default NewInfo;
