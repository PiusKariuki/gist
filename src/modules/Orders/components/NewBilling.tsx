import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import useSpinner from 'shared/components/spinner/useSpinner';
import useAddBilling from "../hooks/useAddBilling";


const NewBilling = () => {
   	const {
			billingName,
			street,
			zip,
			addBilling,
			handleChange,
			clearAttributes,
			load,
		} = useAddBilling();
	const { renderSpinner } = useSpinner();
   let navigate = useNavigate();

  return (
		<div className="flex w-full flex-col space-y-6 relative">
			<div className="absolute top-[10%] left-[35%] z-10">
				{renderSpinner(load)}
			</div>
         
			<div
				onClick={() => navigate(`/orders/existing`)}
				className="flex  flex-row w-[15rem] md:w-[20rem] px-[1.2rem] md:px-[2rem] py-[0.5rem] 
            shadow-xl self-center md:self-start rounded-xl text-blue-30 space-x-3 mt-[3rem] 
            items-center cursor-pointer">
				<FontAwesomeIcon icon={faCircleInfo} size="2x" />
				<p className="text-blue-30 text-[0.9rem] md:text-[1.1rem] font-[700]">
					Skip and use previous info.
				</p>
			</div>
			<p className="text-blue-30 font-[800]  text-[1.2rem]">
				Enter new billing address
			</p>

			<form
				autoComplete="off"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					addBilling(e);
				}}
				className="flex flex-col w-full space-y-10 md:gap-x-20 ">
				<input
					placeholder="Billing Name"
					onChange={handleChange}
					required
					value={billingName}
					type="text"
					id="name"
					className=" h-[2.25rem] outline-none w-full md:w-[60%]
                  text-blue-30 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-gray-20"
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
					className=" h-[2.25rem] outline-none w-full md:w-[60%]
                  text-blue-30 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-gray-20"
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
					className=" h-[2.25rem] outline-none w-full md:w-[60%]
                  text-blue-30 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-gray-20 mb-[3rem]"
				/>
				<button
					disabled={load}
					type="submit"
					className="blue-btn px-[1rem] py-[0.3rem] w-[40%] md:w-[20%] lg:w-[10%] ">
					Submit
				</button>
			</form>
		</div>
	);
}

export default NewBilling