import React, { useEffect } from "react";
import { cartAtom, cartSelector } from "shared/recoil/cart";
import { useRecoilValue } from "recoil";
import useOrders from "../hooks/useOrders";
import useSpinner from "shared/components/spinner/useSpinner";
import { user } from "shared/recoil/user";
import { useParams } from "react-router-dom";
import DataTable, { Alignment, createTheme } from "react-data-table-component";
import "../styles/orders.css";

createTheme("light", {
	text: {
		fontSize: "2rem",
		fontWeight: "2px",
		primary: "#000000",
	},
	background: {
		default: "inherit",
	},
});

const customStyles = {
	cells: {
		style: {
			minHeight: "72px",
			fontSize: "1rem",
			fontWeight: "500",
		},
	},
	headCells: {
		style: {
			fontSize: "1.5rem",
			fontWeight: "600",
		},
	},
};

const OrderPreview: React.FC = () => {
	const cartItems = useRecoilValue<any>(cartAtom);
	const subTotal = useRecoilValue<any>(cartSelector);
	const { handleSubmit, load, shippingName, getShippingById } = useOrders();
	const { renderSpinner } = useSpinner();
	const { wallet } = useRecoilValue<any>(user);
	let { addressId } = useParams<string>();

	useEffect(() => {
		getShippingById(addressId);
	}, []);

	const columns = [
		{
			name: "Name",
			selector: (row: any) => row.name,
		},
		{
			name: "Quantity",
			selector: (row: any) => row.quantity,
		},
		{
			name: "Cost(GC.)",
			selector: (row: any) => row.price,
		},
	];

	const subHeader = () => (
		<div className="flex flex-col space-y-4 mb-2 text-[0.9rem] font-[600] mt-6">
			<p className="text-gray-20  justify-self-start">
				Subtotal:
				<span className="text-blue-30"> GC.{subTotal}</span>
			</p>
			<p className="text-gray-20 justify-self-start">
				Wallet balance:
				<span className="text-blue-30"> GC.{wallet - subTotal}</span>
			</p>
			<p className="text-gray-20 justify-self-start">
				Shipping Address:
				<span className="text-blue-30"> {shippingName}</span>
			</p>
			<button
				onClick={() => handleSubmit(addressId)}
				className="text-blue-30 border-blue-30 border-2 px-4 py-1 rounded-md w-64
            hover:bg-blue-30 hover:text-white font-[700]">
				Place order
			</button>
		</div>
	);

	return (
		<div className="flex  w-screen flex-col px-8 py-1 justify-center">
			{renderSpinner(load)}
			<div className="flex flex-col  w-[90%] border-2">
				<DataTable
					columns={columns}
					data={cartItems}
					responsive
					pagination
					customStyles={customStyles}
					subHeaderWrap
					striped
					title="Orders"
					theme="light"
					fixedHeader
					fixedHeaderScrollHeight="500px"
					pointerOnHover
					className="bg text-color"
					subHeader
					subHeaderAlign={Alignment.LEFT}
				/>
			</div>
			{subHeader()}
		</div>
	);
};

export default OrderPreview;
