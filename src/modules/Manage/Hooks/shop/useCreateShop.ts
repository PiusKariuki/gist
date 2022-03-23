import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { emailRegex } from "shared/regEx/regEx";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";
import { getBase64 } from "shared/toBase64/encode";
import { user } from "shared/recoil/user";
import { useNavigate } from "react-router-dom";
import useFirebase from "shared/firebase/useFirebase";

const useManage = () => {
	const { _id } = useRecoilValue<any>(user);
	const [shopName, setShopName] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [img, setImg] = useState<any>("");
	const [desc, setDesc] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [mailError, setMailError] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const { Axios } = useRequest();
	let navigate = useNavigate();
	const { uploadToFireBase } = useFirebase();

	const handlePhoneChange = (e: string) => {
		setPhone(e);
	};

	/**
	 * Description
	 * @param {any} e
	 * @returns {any}
	 */
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

	/**
	 * Description call  back fn passed to  useFirebase
	 * @param {string} url
	 * @returns {any}
	 */
	const upload = async (url: string) => {
		try {
         setLoad(false);
			let uri = await url;
			await Axios.post(`/shop/${_id}`, {
				name: shopName,
				email: email,
				location: location,
				phoneNumber: phone,
				description: desc,
				image: uri,
			});
			Swal.fire({
				icon: "success",
				text: "Your shop has been created",
				timer: 1000,
			});
			navigate(`/myAccount/shops/`);
			clearAttributes();
		} catch (error: any) {
         console.log(error.response.data.message);   
         setLoad(false);
			Swal.fire({
				icon: "error",
				text:error?.response?.data?.message,
				timer: 2000,
			});
		}
	};

	/**
	 * Description called once form is submitted
	 * @param {React.FormEvent<HTMLFormElement>} e
	 * @returns {any}
	 */
	const createShop = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		uploadToFireBase(img, "/shop/images", upload);
		setLoad(true);
	};

	/**
	 * Description: clear form values and errors
	 * @returns {any}
	 */
	const clearAttributes = () => {
		setDesc("");
		setEmail("");
		setImg("");
		setLocation("");
		setMailError("");
		setPhone("");
		setShopName("");
   
	};

	return {
		shopName,
		email,
		location,
		desc,
		img,
		phone,
		createShop,
		handleChange,
		handlePhoneChange,
		mailError,
		load,
		clearAttributes,
		setImg,
	};
};

export default useManage;
