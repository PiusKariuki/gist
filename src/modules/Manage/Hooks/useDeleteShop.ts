import React, { useState } from "react";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";

const useDeleteShop = () => {
	const { Axios } = useRequest();
	const [load, setLoad] = useState(false);

	const deleteShop = async (
		e: React.FormEvent<HTMLFormElement>,
		shopId: string
	) => {
		e.preventDefault();
		setLoad(true);
		try {
			Axios.delete(`/shop/shop/${shopId}`);
			setLoad(false);
         Swal.fire({
            icon: "success",
            title: "Shop deleted successfully",
            timer: 1500
         })
		} catch (error) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				title: "Sorry the shop was not deleted",
				timer: 1500,
			});
		}
	};

	return { load, deleteShop };
};

export default useDeleteShop;
