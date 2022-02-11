import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import useSpinner from "shared/components/spinner/useSpinner";
import EditOrder from "../components/EditOrder";
import useMyOrders from "../hooks/useMyOrders";
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

const MyOrders = () => {
	const {
		getMyOrders,
		columns,
		load,
		getMyShops,
		setShopId,
		shops,
		populate,
		open,
		setOpen,
		orderId,
	} = useMyOrders();

	const { renderSpinner } = useSpinner();
	useEffect(() => {
		getMyShops();
	}, []);

	return (
		<div className="flex flex-col md:flex-row px-[2rem] py-[3rem] items-center gap-[2rem]">
			<form
				autoComplete="off"
				onSubmit={getMyOrders}
				action=""
				className="flex flex-col gap-y-[0.1rem] py-[3rem] px-[1rem] self-center">
				{/* billing address */}
				<label
					htmlFor="billing"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					Select a shop to view its orders
				</label>
				<select
					onChange={(e) => {
						setShopId(e.target.value);
					}}
					// value={shop.name}
					required
					id="billing"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem]  font-bold px-[1rem] focus:ring-2 focus:ring-blue-500">
					<option disabled selected value="">
						{" "}
						-- select an option --{" "}
					</option>
					{shops?.map((shop: any, key: number) => (
						<option value={shop?._id} key={key}>
							{shop?.name}
						</option>
					))}
				</select>
				<div className="mt-[1rem]">{renderSpinner(load)}</div>
				<button
					// disabled={b?.length < 1}
					type="submit"
					className="bg-red-20 px-[1rem] py-[0.4rem] w-[16rem] self-center 
                mt-[2rem] text-[1.4rem] text-white font-[700] rounded-xl hover:bg-red-600
                disabled:bg-gray-400
                ">
					View Orders
				</button>
			</form>
			<div className="flex flex-col w-full border-2 relative">
				{open ? (
					<div className="fixed  z-50 center ">
						<EditOrder setOpen={setOpen} orderId={orderId} />
					</div>
				) : null}
				<DataTable
					columns={columns}
					data={populate}
					selectableRows
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
				/>
			</div>
		</div>
	);
};

export default MyOrders;
