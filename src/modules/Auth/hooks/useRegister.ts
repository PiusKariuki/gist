import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { storage } from "shared/firebase";
import { Axios } from "shared/http/Http";
import { user } from "shared/recoil/user";
import { emailRegex, sixChars } from "shared/regEx/regEx";
import { getBase64 } from "shared/toBase64/encode";
import Swal from "sweetalert2";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import uploadToFireBase from "shared/firebase/uploadToFirebase";

const useRegister = () => {
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
	const [firebaseUrl, setFirebaseUrl] = useState<any>("");

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

	const register = (e: any) => {
		e.preventDefault();
		setLoad(true);
		setErrors({});

		//upload img to firebase first and get the firebaseurl
		uploadToFireBase(img, "user")
			.then((res) => {
				setFirebaseUrl(res);
			})
			.then(
				() => {
					//req obj
					let newUser = {
						email: email,
						password: password,
						firstName: fname,
						lastName: lname,
						userName: userName,
						bio: bio,
						phonenumber: phone,
						profilePhoto: firebaseUrl,
					};
					//now send the axios request to the server
					Axios.post("/register", newUser)
						.then(
							({ data }) => {
								//destructure the data object
								//store the data object in recoil
								//stop the loader
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
							},
							(e) => {
								Swal.fire({
									icon: "error",
									title: e.response?.data?.message,
								});

								setErrors(e?.response?.data);
								setLoad(false);
							}
						)
						.catch((e) => {
							Swal.fire({
								icon: "error",
								title: e.response?.data?.message,
							});

							setErrors(e?.response?.data);
							setLoad(false);
						});
				},
				(err) => {
					Swal.fire({
						icon: "error",
						title: "Failed to upload image. Try again later",
					});
					setLoad(false);
				}
			)
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Failed to upload image. Try again later",
				});
				setLoad(false);
			});
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
		register,
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
