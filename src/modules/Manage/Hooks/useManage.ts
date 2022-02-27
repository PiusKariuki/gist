import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { emailRegex, sixChars, phoneRegex } from "shared/regEx/regEx";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";
import { getBase64 } from "shared/toBase64/encode";
import { user } from "shared/recoil/user";

const useManage = () => {
	const {_id } = useRecoilValue<any>(user);
	const [shopName, setShopName] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [img, setImg] = useState<any>("");
	const [desc, setDesc] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [mailError, setMailError] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const { Axios } = useRequest();

	const handlePhoneChange = (e: string) => {
		setPhone(e);
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

	const createShop = async (e: React.FormEvent<HTMLFormElement>) => {
		setLoad(true);
		e.preventDefault();
		try {
			await Axios.post(`/shop/${_id}`, {
				name: shopName,
				email: email,
				location: location,
				phoneNumber: phone,
				description: desc,
				image: img,
			});
			Swal.fire({
				icon: "success",
				text: "Your shop has been created",
				timer: 1000,
			});
			setLoad(false);
         clearAttributes();
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
      setImg
	};
};

export default useManage;
