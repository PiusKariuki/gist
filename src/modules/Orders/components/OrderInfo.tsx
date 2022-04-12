import React from "react";

interface Props {
	shippingId: {
		name: string;
		addrress1: string;
		addrress2: string;
		city: string;
		state: string;
		phone: string;
	};
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderInfo: React.FC<Props> = ({ shippingId,setOpen }) => {
	return (
		<div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex flex-col">
			<div
				className="flex flex-col relative px-10 py-16 bg-white w-full max-w-md m-auto
          rounded-md  font-[600] text-xl gap-y-4">
				<p className="text-gray-20  justify-self-start">
					Shipping Name:
					<span className="text-blue-30">&nbsp;&nbsp;{shippingId.name}</span>
				</p>
				<p className="text-gray-20  justify-self-start">
					Shipping address 1:
					<span className="text-blue-30">&nbsp;&nbsp;{shippingId.addrress1}</span>
				</p>
				<p className="text-gray-20  justify-self-start">
					Shipping address 2:
					<span className="text-blue-30">&nbsp;&nbsp;{shippingId.addrress2}</span>
				</p>
				<p className="text-gray-20  justify-self-start">
					State:
					<span className="text-blue-30">&nbsp;&nbsp;{shippingId.state}</span>
				</p>
				<p className="text-gray-20  justify-self-start">
					City:
					<span className="text-blue-30">&nbsp;&nbsp;{shippingId.city}</span>
				</p>
				<p className="text-gray-20  justify-self-start">
					Phone:
					<span className="text-blue-30">&nbsp;&nbsp;{shippingId.phone}</span>
				</p>
				<button
					onClick={() => setOpen(false)}
					className="red-outline-btn absolute right-5 bottom-5">
					Close
				</button>
			</div>
		</div>
	);
};

export default OrderInfo;
