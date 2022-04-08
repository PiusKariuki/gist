import React, { useState } from "react";
import { emailRegex } from "shared/regEx/regEx";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";
import { getBase64 } from "shared/toBase64/encode";

import useFirebase from "shared/firebase/useFirebase";
import { useParams } from "react-router-dom";

const useEditShop = () => {
	const { uploadToFireBase } = useFirebase();
	const [shopName, setShopName] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [img, setImg] = useState<any>("");
	const [desc, setDesc] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [mailError, setMailError] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const { Axios } = useRequest();
	const [displayImg, setDisplayImg] = useState("");
	let { shopId } = useParams<string>();

	const getShopById = async () => {
		setLoad(true);
		try {
			let {
				data: { name, email, location, phoneNumber, image, description },
			} = await Axios.get(`/shop/shop/${shopId}`);

			setShopName(name);
			setLocation(location);
			// setImg(image);
			setDesc(description);
			setPhone(phoneNumber);
			setEmail(email);
			setLoad(false);
			setDisplayImg(image);
		} catch (error) {
			setLoad(false);
		}
	};

	const handlePhoneChange = (e: string) => {
		setPhone(e);
	};

	const handleImgChange = (e: any) => {
		getBase64(e.target.files[0])
			.then((res) => {
				setImg(res);
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					text: err,
				});
			});
	};

	const handleChange = (e: any) => {
		switch (e.target.id) {
			case "shopName":
				setShopName(e.target.value);
				break;
			case "location":
				setLocation(e.target.value);
				break;
			case "desc":
				setDesc(e.target.value);
				break;
			case "img":
				getBase64(e.target.files[0])
					.then((res: any) => {
						setDisplayImg(res);
						setImg(e.target.files[0]);
					})
					.catch((err) => {
						Swal.fire({
							icon: "error",
							text: err,
						});
					});
				break;
			case "email":
				setEmail(e.target.value);
				let mail = e.target.value.toLowerCase();
				if (mail.match(emailRegex)) setMailError("");
				else {
					setMailError("Invalid email");
				}
				break;
			default:
				break;
		}
	};

	const upload = async (url: Promise<string>) => {
		setLoad(false);
		let uri = await url;
		var updateObj = {};

		if (displayImg?.length > 60)
			updateObj = {
				name: shopName,
				email,
				location,
				phoneNumber: phone,
				image: uri,
				description: desc,
			};
		else {
			updateObj = {
				name: shopName,
				email,
				location,
				phoneNumber: phone,
				description: desc,
			};
		}

		try {
			await Axios.put(`/shop/shop/${shopId}`, updateObj);
			Swal.fire({
				icon: "success",
				text: "Your shop has been updated",
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

	const updateShop = (e: React.FormEvent<HTMLFormElement>) => {
		setLoad(true);
		e.preventDefault();
		uploadToFireBase(img, "/shop/images", upload);
	};

	return {
		shopName,
		email,
		location,
		desc,
		img,
		phone,
		handleChange,
		handlePhoneChange,
		mailError,
		load,
		updateShop,
		getShopById,
		handleImgChange,
		setImg,
		setDisplayImg,
		displayImg,
	};
};

export default useEditShop;
