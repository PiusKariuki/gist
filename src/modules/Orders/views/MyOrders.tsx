import React, { useEffect, useRef} from "react";
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
		getOrderByShopID,
		columns,
		load,
		getMyShop,
		populate,
		open,
		setOpen,
		orderId,
		shopId,
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
		 getOrderByShopID(shopId);
	}, [open]);


	useEffect(() => {
		getMyShop();
	}, []);

   
	return (
		<div className="flex flex-col px-[2rem] py-[3rem]  gap-[2rem]">
			<div ref={formRef} className="flex flex-col gap-y-[0.1rem]  px-[1rem]">
				<p
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.3rem] mt-[3rem] 
               mb-[0rem] text-black-80">
					Select a shop to view its orders
				</p>
				{/*......................................
               *
               *map users' shop and create  btns
               *
               ......................................*/}
	
				<div className="absolute top-48 left-[48%] mt-[1rem]">
					{renderSpinner(load)}
				</div>
			</div>

			<div className="flex flex-col w-full border-2 mt-[4rem] relative">
				<div
					className={`${
						open
							? "fixed z-50 right-[0%] top-[8%]"
							: "hidden"
					}`}>
					<EditOrder setOpen={setOpen} orderId={orderId} shopId={shopId} />
				</div>

				<DataTable
					columns={columns}
					data={populate}
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
