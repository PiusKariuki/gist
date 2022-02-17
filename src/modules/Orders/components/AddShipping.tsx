import React from "react";
import useAddShipping from "../hooks/useAddShipping";
import { shippingOpen } from "../store/store";
import { useSetRecoilState } from "recoil";
import useSpinner from "shared/components/spinner/useSpinner";

const AddShipping = () => {
	const {
		shippingName,
		street,
		zip,
		addShipping,
		handleChange,
		clearAttributes,
		load,
	} = useAddShipping();
	const setOpen = useSetRecoilState(shippingOpen);
   const {renderSpinner} = useSpinner();
	return (
		<div className="flex flex-col  space-y-8">
			<form onSubmit={addShipping} className="space-y-8">
				{/*......................................
               *name
            ......................................*/}
				<input
					placeholder="Billing Name"
					onChange={handleChange}
					required
					value={shippingName}
					type="text"
					id="name"
					className=" h-[2.25rem] outline-none w-full
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-blue-500"
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
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-blue-500"
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
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-blue-500"
				/>
				<div className="flex flex-row justify-between">
					<button
						type="submit"
						className="blue-btn px-[1rem] py-[0.3rem] w-[40%]">
						Submit
					</button>
               {renderSpinner(load)}
				</div>
			</form>
		</div>
	);
};

export default AddShipping;
