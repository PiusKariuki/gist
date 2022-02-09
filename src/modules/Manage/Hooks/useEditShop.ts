import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { user } from "shared/store/Store";
import { emailRegex, sixChars, phoneRegex } from "shared/regEx/regEx";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";
import { getBase64 } from "shared/toBase64/encode";

const useEditShop = () => {
	const { _id } = useRecoilValue<any>(user);
	const [shopName, setShopName] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [img, setImg] = useState<any>("");
	const [desc, setDesc] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [mailError, setMailError] = useState<string>("");
	const [phoneErr, setPhoneErr] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const { Axios } = useRequest();

	const getShopById = async (shopId: any) => {
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
		} catch (error) {
			setLoad(false);
			// Swal.fire({
			// 	icon: "error",
			// 	text: "Something went wrong",
			// 	timer: 1000,
			// });
		}
	};

	const handlePhoneChange = (e: string) => {
		setPhone(e);
		if (e.length < 5) setPhoneErr("please enter a valid phone number");
		else setPhoneErr("");
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
					.then((res) => {
						setImg(res);
					})
					.catch((err) => console.log(err));
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

	const updateShop = async (
		e: React.FormEvent<HTMLFormElement>,
		shopId: string
	) => {
		setLoad(true);
		e.preventDefault();
		try {
			await Axios.put(`/shop/shop/${shopId}`, {
				name: shopName,
				email,
				location,
				phoneNumber: phone,
				// image: img,
				description: desc,
			});
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
	return {
		shopName,
		email,
		location,
		desc,
		img,
		phone,
		handleChange,
		handlePhoneChange,
		phoneErr,
		mailError,
		load,
		updateShop,
		getShopById,
	};
};

export default useEditShop;
