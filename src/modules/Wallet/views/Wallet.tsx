import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import useSpinner from "shared/components/spinner/useSpinner";
import { user } from "shared/recoil/user";
import useWallet from "../hooks/useWallet";
import DataTable, { createTheme } from "react-data-table-component";


{/*......................................
   *custom datatable styles
......................................*/}
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


const Wallet = () => {
	const { wallet } = useRecoilValue<any>(user);
	const { getTransactionsByUserID, load, transactions,columns } = useWallet();
	const { renderSpinner } = useSpinner();
	useEffect(() => {
		getTransactionsByUserID();
	}, []);


	return (
		<div className="flex flex-col px-[2rem] py-[3rem] space-y-10 ">
			<div
				className="flex flex-col bg-gray-20 text-white rounded-2xl space-y-3 items-center 
            w-full md:w-[30vw] py-[0.5rem] md:ml-8 ">
				<p className="text-[1.2rem] md:text-[1.4rem] font-[500]">
					Wallet balance
				</p>
				<p className="text-[1rem] md:text-[1.2rem] font-[700]">
					GC. {wallet || 0}
				</p>
			</div>
			{renderSpinner(load)}
			<div
				className="flex flex-col md:flex-row flex-wrap gap-y-10 gap-x-10 items-center 
           ">
				<DataTable
					columns={columns}
					data={transactions}
					selectableRows
					responsive
					pagination
					customStyles={customStyles}
					subHeaderWrap
					striped
					title="Transactions"
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

export default Wallet;
