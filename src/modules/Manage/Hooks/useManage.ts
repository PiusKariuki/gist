import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { user } from "shared/store/Store";
import { emailRegex, sixChars, phoneRegex } from "shared/regEx/regEx";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";

const useManage = () => {
	const { _id } = useRecoilValue<any>(user);
	const [shopName, setShopName] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [img, setImg] = useState<any>("");
	const [desc, setDesc] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [mailError, setMailError] = useState<string>("");
	const [phoneErr, setPhoneErr] = useState<string>("");
	const { Axios } = useRequest();

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
				setImg(e.target.files[0]);
				break;
			case "email":
				setEmail(e.target.value);
				let mail = e.target.value.toLowerCase();
				if (mail.match(emailRegex)) setMailError("");
				else {
					setMailError("Invalid email");
				}
				break;
			case "phone":
				setPhone(e.target.value);
				let cell = e.target.value.toLowerCase();
				if (cell.match(phoneRegex)) setPhone("");
				else {
					setPhoneErr("Invalid phone number");
				}
				break;
			default:
				break;
		}
	};

	const createShop = async (e: any) => {
      e.preventDefault();
		try {
			Axios.post(`/shop/${_id}`, {
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
		} catch (error) {
			Swal.fire({
				icon: "error",
				text: "An error occurred",
				timer: 1000,
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
		createShop,
		handleChange,
		phoneErr,
		mailError,
	};
};

export default useManage;
