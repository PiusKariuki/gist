import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";
import { getBase64 } from "shared/toBase64/encode";
import { user } from "shared/recoil/user";
import { useNavigate } from "react-router-dom";
import useFirebase from "shared/firebase/useFirebase";

const useAddShop = () => {
	const { _id } = useRecoilValue<any>(user);
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<number>(0);
	const [quantity, setQuantity] = useState<any>("");
	const [desc, setDesc] = useState<any>("");
	const [images, setImages] = useState<any>([]);
	const [displays, setDisplays] = useState<any>([]);
	const [load, setLoad] = useState<boolean>(false);
	const { Axios } = useRequest();
	const [openProduct, setOpenProduct] = useState<boolean>(false);
	const [prodID, setProdID] = useState("");
	let navigate = useNavigate();
	const { uploadArrayToFireBase } = useFirebase();

	const clearAttributes = () => {
		setName("");
		setPrice(0);
		setQuantity("");
		setImages([]);
		setDesc("");
		setDisplays("");
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
				setImages((prev: any) => [...prev, e.target.files[0]]);
				getBase64(e.target.files[0])
					.then((res: any) => {
						setDisplays((prev: any) => [...prev, res]);
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

	const upload = async(url: any) => {
		console.log(url);

		try {
			setLoad(false);
			// let uri = await url;
			// console.log(uri);
			// await Axios.put(`/products/images/${prodID}`, {
			// 	images: uri,
			// });
			Swal.fire({
				icon: "success",
				text: "A product has been added to your shop",
				timer: 1000,
			});
			// navigate(`/myAccount/shops/`);
			clearAttributes();
			setLoad(false);
		} catch (error: any) {
			setLoad(false);
			Swal.fire({
				icon: "error",
				text: error?.response?.data?.message,
				timer: 2000,
			});
		}
	};

	const addProductImages = (productID: any) => {
		setProdID(productID);
		setLoad(true);
		uploadArrayToFireBase(images, "/products/images", upload)
	};

	const removeImg = (index: number) => {
		if (index > -1) {
			setImages((prev: any) =>
				prev.filter((img: any) => prev.indexOf(img) !== index)
			);
			setDisplays((prev: any) =>
				prev.filter((img: any) => prev.indexOf(img) !== index)
			);
		}
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
		displays,
		setDisplays,
	};
};

export default useAddShop;
