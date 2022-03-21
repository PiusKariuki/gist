import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { emailRegex } from "shared/regEx/regEx";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";
import { getBase64 } from "shared/toBase64/encode";
import { user } from "shared/recoil/user";
import { useNavigate } from "react-router-dom";
// import uploadToFireBase from "shared/firebase/uploadToFirebase";

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

	const createShop = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoad(true);
      // uploadToFireBase(img,"shop")
			
   }

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
