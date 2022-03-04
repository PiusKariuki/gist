import { deleteOpen } from "modules/Manage/store/store";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";

const useDeleteProduct = () => {
	const { Axios } = useRequest();
	const [load, setLoad] = useState(false);
	const setOpenDelete = useSetRecoilState<any>(deleteOpen);

	const deleteProduct = async (
		e: React.FormEvent<HTMLFormElement>,
		productId: string
	) => {
		e.preventDefault();
		setLoad(true);
		try {
			Axios.delete(`/products/products/${productId}`);
			setLoad(false);
			Swal.fire({
				icon: "success",
				title: "Product deleted successfully",
				timer: 1500,
			});
		setOpenDelete(false);
		} catch (error) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				title: "Sorry the product was not deleted",
				timer: 1500,
			});
		}
	};

	return { load, deleteProduct };
};

export default useDeleteProduct;
