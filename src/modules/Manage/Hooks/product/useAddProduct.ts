import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";
import { getBase64 } from "shared/toBase64/encode";
import { user } from "shared/recoil/user";
import { useNavigate } from "react-router-dom";

const useAddShop = () => {
	const { _id } = useRecoilValue<any>(user);
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<number>(0);
	const [quantity, setQuantity] = useState<any>("");
	const [desc, setDesc] = useState<any>("");
	const [images, setImages] = useState<any>([]);
	const [load, setLoad] = useState<boolean>(false);
	const { Axios } = useRequest();
	const [openProduct, setOpenProduct] = useState<boolean>(false);
	let navigate = useNavigate();

	const clearAttributes = () => {
		setName("");
		setPrice(0);
		setQuantity("");
		setImages([]);
		setDesc("");
	};

	const handleChange = (e: any) => {
		switch (e.target.id) {
			case "name":
				setName(e.target.value);
				break;
			case "price":
				setPrice(e.target.value);
				break;
			case "quantity":
				setQuantity(e.target.value);
				break;
			case "desc":
				setDesc(e.target.value);
				break;
			case "images":
				getBase64(e.target.files[0])
					.then((res: any) => {
						setImages((prev: any) => [...prev, res]);
					})
					.catch((err) => {
						Swal.fire({
							icon: "error",
							text: err,
						});
					});
				break;
			default:
				break;
		}
	};

	const addProduct = async (
		e: React.FormEvent<HTMLFormElement>,
		shopId: any
	) => {
		setLoad(true);
		e.preventDefault();
		try {
			let { data } = await Axios.post(`/products/${shopId}`, {
				name,
				price,
				quantity,
				ownerId: _id,
				description: desc,
			});
			navigate(`/myAccount/shops/add/${shopId}/images/${data._id}`);
			clearAttributes();
			setLoad(false);
			Swal.fire({
				icon: "success",
				text: "proceed to add photos to your product",
			});
		} catch (error: any) {
			let errmsg = error.response.data.split(":");
			setLoad(false);

			Swal.fire({
				icon: "error",
				text:
					error.response.status === 409
						? "Please choose a different shop name"
						: errmsg[2],
				timer: 2000,
			});
		}
	};

	const addProductImages = async (productID: any) => {
		setLoad(true);
		try {
			await Axios.put(`/products/images/${productID}`, {
				images: images,
			});
			Swal.fire({
				icon: "success",
				text: "A product has been added to your shop",
				timer: 1000,
			});
			navigate(`/myAccount/shops/`);
			clearAttributes();
			setLoad(false);
		} catch (error: any) {
			let errmsg = error.response.data.split(":");
			setLoad(false);
			Swal.fire({
				icon: "error",
				text: "Failed to add images to  your shop",
			});
		}
	};

	const removeImg = (index: number) => {
		if (index > -1)
			setImages((prev: any) =>
				prev.filter((img: any) => prev.indexOf(img) !== index)
			);
	};

	return {
		name,
		price,
		quantity,
		handleChange,
		clearAttributes,
		addProduct,
		load,
		images,
		setImages,
		removeImg,
		openProduct,
		setOpenProduct,
		desc,
		addProductImages,
	};
};

export default useAddShop;
