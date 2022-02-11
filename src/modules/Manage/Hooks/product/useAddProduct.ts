import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { user } from "shared/store/store";
import { emailRegex, sixChars, phoneRegex } from "shared/regEx/regEx";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";
import { getBase64 } from "shared/toBase64/encode";

const useAddShop = () => {
	const { _id } = useRecoilValue<any>(user);
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<number>(0);
	const [quantity, setQuantity] = useState<any>("");
	const [images, setImages] = useState<any>([]);
	const [load, setLoad] = useState<boolean>(false);
	const { Axios } = useRequest();
   const [openProduct,setOpenProduct] = useState<boolean>(false);

   
	const clearAttributes = () => {
		setName("");
		setPrice(0);
		setQuantity("");
		setImages([""]);
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
			case "images":
				getBase64(e.target.files[0])
					.then((res: any) => {
						setImages((prev: any) => [...prev, res]);
					})
					.catch((err) => console.log(err));
				break;
			default:
				break;
		}
	};

	const addProduct = async (
		e: React.FormEvent<HTMLFormElement>,
		shopId: string
	) => {
		setLoad(true);
		e.preventDefault();
		try {
			await Axios.post(`/products/${shopId}`, {
				name,
				price,
				quantity,
				images,
				ownerId: _id,
			});
			Swal.fire({
				icon: "success",
				text: "A product has been added to your shop",
				timer: 1000,
			});
         clearAttributes();
			setLoad(false);
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
	};
};

export default useAddShop;
