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
		<div className="dialog-wrapper">
			<div
				className="dialog  font-[600] text-xl gap-y-4">
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
