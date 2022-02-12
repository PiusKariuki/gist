import React, { useEffect, useRef, useState } from "react";
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
		shops,
		populate,
		open,
		setOpen,
		orderId,
		setCurrentShop,
      currentShop
	} = useMyOrders();

	const { renderSpinner } = useSpinner();
	const formRef = useRef<any>();

	{
		/*......................................
      *
      *get orders

      *use load and open in dependency array
      *set the current shop each time the edit btn is clicked for reference
      ......................................*/
	}

	useEffect(() => {
      if(shops.length>0)
		getMyOrders(currentShop)
	},[open]);

	useEffect(() => {
		getMyShops();
	}, []);

	return (
		<div
			className={`${
				open ? "opacity-0" : "opacity-0"
			} opacity-100 flex flex-col px-[2rem] py-[3rem] items-center gap-[2rem]`}>
			<div
				ref={formRef}
				// autoComplete="off"
				// onSubmit={getMyOrders}
				className="flex flex-col gap-y-[0.1rem]  px-[1rem]">
				{/* billing address */}
				<p
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0rem]">
					Select a shop to view its orders
				</p>
				{/*......................................
               *
               *map users' shops and create  btns
               *
               ......................................*/}
				<div className="flex flex-row gap-[0.5rem] mt-[2rem]">
					{shops?.map((shop: any, key: number) => (
						<button
							className="blue-btn px-[0.5rem] py-[0.1rem] text-[1rem]"
							key={key}
							value={shop?._Id}
							onClick={() => {
								// setCurrentShop(shop?._id);
								getMyOrders(shop?._id);
							}}>
							{shop?.name}
						</button>
					))}
				</div>

				<div className=" fixed top-4 mt-[1rem]">{renderSpinner(load)}</div>
			</div>

			<div className="flex flex-col w-full border-2 mt-[4rem] relative">
				<div
					className={`${
						open ? "fixed  z-50 right-[9%] md:right-[40%]  " : "hidden"
					}`}>
					<EditOrder setOpen={setOpen} orderId={orderId} shopId={currentShop}/>
				</div>

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
