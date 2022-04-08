import React, { useEffect, useRef, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import useSpinner from "shared/components/spinner/useSpinner";
import useTable from "shared/hooks/useTable";
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
		getOrderByShopID,
		columns,
		load,
		getMyShop,
		open,
		setOpen,
		orderId,
		shopId,
		getOrdersByUserID,
		orders,
		getOrderById,
		setOrderId,
	} = useMyOrders();

	const { renderSpinner } = useSpinner();
	const formRef = useRef<any>();
	const [actions, setActions] = useState(["view", "edit"]);
	const { populate } = useTable();
   

	useEffect(() => {
		getOrderByShopID(shopId);
	}, [open]);

	useEffect(() => {
		getMyShop();
	}, []);

   
	/**
	 * Description: Action btns click handler
	 * @param {string} action
	 * @param {string} target
	 * @returns {any}
	 */
	const handleClick = async (action: string,target: string) => {
		switch (action) {
			case "view":
				await getOrderById(target);
				setOpen(false);
				break;
			case "edit":
				setOrderId(target);
				setOpen(true);
				break;

			default:
				break;
		}
	};

	return (
		<div className="flex flex-col px-[2rem] py-[3rem]  gap-[2rem]">
			<div ref={formRef} className="flex flex-col gap-y-[0.1rem]  px-[1rem]">
				<div className="inline-flex gap-x-4 items-center">
					<button
						disabled={actions.length > 1}
						onClick={async () => {
							await getOrderByShopID(shopId);
							setActions(["view", "edit"]);
						}}
						className="text-gray-20  disabled:text-blue-40 font-semibold self-start  py-2">
						My shop orders
					</button>
					<p className="text-gray-20 font-semibold">/</p>
					<button
						disabled={actions.length <2}
						onClick={async () => {
							setActions(["view"]);
							await getOrdersByUserID();
						}}
						className="text-gray-20  disabled:text-blue-40 font-semibold self-start  py-2">
						My orders
					</button>
				</div>

				<div className="absolute top-48 left-[48%] mt-[1rem]">
					{renderSpinner(load)}
				</div>
			</div>

			<div className="flex flex-col w-full border-2 mt-[4rem] relative">
				<div
					className={`${open ? "fixed z-50 right-[0%] top-[8%]" : "hidden"}`}>
					<EditOrder setOpen={setOpen} orderId={orderId} shopId={shopId} />
				</div>

				<DataTable
					columns={columns}
					data={populate(orders, actions, handleClick)}
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
