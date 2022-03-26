import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";
import { getBase64 } from "shared/toBase64/encode";
import { user } from "shared/recoil/user";
import useFirebase from "shared/firebase/useFirebase";
import { useParams } from "react-router-dom";

const useEdit = () => {
	const { _id } = useRecoilValue<any>(user);
	const { Axios } = useRequest();
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<number>(0);
	const [quantity, setQuantity] = useState<any>("");
	const [description, setDescription] = useState<string>("");
	const [displays, setDisplays] = useState<any>([]);
	const [load, setLoad] = useState<boolean>(false);
	const [shopId, setShopId] = useState("");

	const getProductById = async (productId: any) => {
		setLoad(true);
		try {
			let {
				data: { images, name, price, quantity, description, shopId },
			} = await Axios.get(`/products/products/${productId}`);
			setDisplays(images);
			setPrice(price);
			setName(name);
			setQuantity(quantity);
			setLoad(false);
			setDescription(description);
			setShopId(shopId._id);
		} catch (error) {
			setLoad(false);
		}
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
				setDescription(e.target.value);
				break;
			// case "images":
			// 	getBase64(e.target.files[0])
			// 		.then((res: any) => {
			// 			setDisplays((prev: any) => [...prev, res]);
			// 			setNewImages((prev: any) => [...prev, e.target.files[0]]);
			// 		})
			// 		.catch((err) => {
			// 			Swal.fire({
			// 				icon: "error",
			// 				text: err,
			// 			});
			// 		});
			// 	break;
			default:
				break;
		}
	};

	const clearAttributes = () => {
		setName("");
		setPrice(0);
		setQuantity("");
		setDisplays([""]);
		setDescription("");
	};



	const editProductById = async (
		e: React.FormEvent<HTMLFormElement>,
		productId: any
	) => {
		setLoad(true);
		e.preventDefault();
		try {
			await Axios.put(`/products/products/${productId}`, {
				name,
				price,
				quantity,
				ownerId: _id,
				description,
			});

			await getProductById(productId);
			Swal.fire({
				icon: "success",
				text: "Your product has been updated",
				timer: 1000,
			});

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
		if (index > -1) {
			setDisplays((prev: any) =>
				prev.filter((img: any) => prev.indexOf(img) !== index)
			);
		}
	};

	return {
		getProductById,
		editProductById,
		removeImg,
		clearAttributes,
		name,
		quantity,
		price,
		displays,
		load,
		handleChange,
		description,
      shopId
	};
};

export default useEdit;
