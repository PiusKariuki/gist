import React, { useEffect, useState } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import Existing from "../components/ExistingModal";
import NewInfo from "../components/NewInfo";
import useOrders from "../hooks/useOrders";

const Orders = () => {
	const { renderSpinner } = useSpinner();
	const [open, setOpen] = useState(false);

	const {
		billing,
		shipping,
		handleChange,
		getBillingByUserId,
		getShippingByUserId,
		userShippings,
		userBillings,
		load,
		handleSubmit,
	} = useOrders();

	useEffect(() => {
		getBillingByUserId();
		getShippingByUserId();
	}, [open]);
	return (
		<div className="flex flex-col w-full relative py-[2rem] lg:py-[1rem]">
			<button
				onClick={() => setOpen((prev: boolean) => !prev)}
				className="absolute top-6 left-10 md:left-12 px-[1rem] py-[0.3rem]
            bg-white outline rounded-md outline-blue-20 mt-[2rem]">
				<>
					<p className="text-blue-20 font-[400] text-[1.1rem]">
						Proceed with existing information
					</p>
				</>
			</button>

         {open? 
         <div className="flex flex-col  absolute w-full bg-white z-20">
            <Existing setOpen={setOpen}/>
         </div>
         :null}

			<div className="flex flex-col">
				<div className="flex flex-col w-full">
					<NewInfo />
				</div>
			</div>
		</div>
	);
};

export default Orders;
