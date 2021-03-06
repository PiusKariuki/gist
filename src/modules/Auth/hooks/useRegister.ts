import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { user } from "shared/recoil/user";
import { emailRegex, sixChars } from "shared/regEx/regEx";
import { getBase64 } from "shared/toBase64/encode";
import Swal from "sweetalert2";
import useFirebase from "shared/firebase/useFirebase";
import { Axios } from "shared/http/Http";

const useRegister = () => {
	const { uploadToFireBase } = useFirebase();
	const [mailError, setMailError] = useState("");
	const [passError, setPassError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [bio, setBio] = useState("");
	const [userName, setUserName] = useState("");
	const [phone, setPhone] = useState<any>();
	const [load, setLoad] = useState(false);

	const [img, setImg] = useState<any>("");
	const [displayImg, setDisplayImg] = useState<any>("");
	// api errors
	const [errors, setErrors] = useState<any>({});
	const setUser = useSetRecoilState(user);
   

	const handlePhoneChange = (e: string) => {
		setPhone(e);
	};

	const handleChange = (e: any) => {
		setErrors("");
		switch (e.target.id) {
			case "email":
				setEmail(e.target.value);
				let mail = e.target.value.toLowerCase();
				if (mail.match(emailRegex)) setMailError("");
				else {
					setMailError("Invalid email");
				}
				break;
			case "pass":
				setPassword(e.target.value);
				if (!e.target.value.match(sixChars)) {
					setPassError("Password should be atleast six characters long");
				} else {
					setPassError("");
				}
				break;
			case "confirm":
				if (e.target.value !== password)
					setPassError("Password and Confirm passwords don't match");
				else setPassError("");

				setConfirmPassword(e.target.value);
				break;
			case "fname":
				setFname(e.target.value);
				break;
			case "lname":
				setLname(e.target.value);
				break;
			case "userName":
				setUserName(e.target.value);
				break;
			case "bio":
				setBio(e.target.value);
				break;
			case "img":
				getBase64(e.target.files[0])
					.then((res) => {
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
			let uri = await url;
			//req obj
			let newUser = {
				email: email,
				password: password,
				firstName: fname,
				lastName: lname,
				userName: userName,
				bio: bio,
				phonenumber: phone,
				profilePhoto: uri,
			};
			let {data} = await Axios.post("/registerv1", newUser);
			let newObj = {
				token: data.token,
				_id: data.user._id,
				userName: data.user.userName,
				profilePhoto: data.user.profilePhoto,
				phonenumber: data.user.phonenumber,
				email: data.user.email,
				firstName: data.user.firstName,
				lastName: data.user.lastName,
				bio: data.user.bio,
				wallet: data.user.wallet,
			};
			setUser(newObj);
			setLoad(false);
			setErrors("");
		} catch (e: any) {
			setErrors(e?.response?.data);
			setLoad(false);
			Swal.fire({
				icon: "error",
				title: e.response?.data?.message,
			});
		}
	};

	/**
	 * Description called when the register btn is  clicked
	 * @param {React.FormEvent<HTMLFormElement>} e
	 * @returns {any}
	 */
	const getUrlAndCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		uploadToFireBase(img, "user/display_picture", upload);
		setLoad(true);
	};

	return {
		mailError,
		passError,
		email,
		password,
		fname,
		lname,
		bio,
		userName,
		handleChange,
		getUrlAndCreateUser,
		load,
		errors,
		phone,
		handlePhoneChange,
		confirmPassword,
		img,
		setImg,
		displayImg,
		setDisplayImg,
	};
};

export default useRegister;
