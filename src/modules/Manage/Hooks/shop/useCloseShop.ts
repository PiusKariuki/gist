import React, { useState } from "react";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";

const useDeleteShop = () => {
	const { Axios } = useRequest();
	const [load, setLoad] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);

	const deleteShop = async (
		e: React.FormEvent<HTMLFormElement>,
		shopId: string | undefined
	) => {
		e.preventDefault();
		setLoad(true);
		setOpenDelete(false);
		try {
			Axios.put(`/shop/shop/${shopId}`, { open: false });
			setLoad(false);
			Swal.fire({
				icon: "success",
				title: "Shop closed successfully",
				timer: 1500,
			});
		} catch (error) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				title: "Sorry the shop was not closed",
				timer: 1500,
			});
		}
	};

	return { load, deleteShop, openDelete, setOpenDelete };
};

export default useDeleteShop;
