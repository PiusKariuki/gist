import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import { user } from "shared/recoil/user";
import Swal from "sweetalert2";

const useWallet = () => {
	const { Axios } = useRequest();
	const { _id } = useRecoilValue<any>(user);
	const [transactions, setTransactions] = useState<any>();
	const [load, setLoad] = useState<boolean>(false);

	const getTransactionsByUserID = async () => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/transactions/${_id}`);
			setTransactions(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				text: "Failed to get your transactions",
			});
		}
	};

	const columns = [
		{
			name: "Date",
			selector: (row: any) => new Date(row.createdAt).toLocaleString(),
		},
		{
			name: "Reason",
			selector: (row: any) => row.reason,
		},
		{
			name: "Amount",
			selector: (row: any) => row.amount,
		},
	];
	return { getTransactionsByUserID, load, transactions, columns };
};

export default useWallet;
