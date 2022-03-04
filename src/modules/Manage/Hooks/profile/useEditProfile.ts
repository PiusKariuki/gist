import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { emailRegex, sixChars } from "shared/regEx/regEx";
import Swal from "sweetalert2";
import useRequest from "shared/http/useRequest";
import { getBase64 } from "shared/toBase64/encode";
import { user } from "shared/recoil/user";
import { imgUrl } from "shared/http/Http";

const useEditProfile = () => {
	const setUser = useSetRecoilState(user);
	const userObj = useRecoilValue<any>(user);

	const [mailError, setMailError] = useState("");
	const [passError, setPassError] = useState("");
	const [email, setEmail] = useState(userObj?.email);
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [fname, setFname] = useState(userObj?.firstName);
	const [lname, setLname] = useState(userObj?.lastName);
	const [bio, setBio] = useState(userObj?.bio);
	const [userName, setUserName] = useState(userObj?.userName);
	const [phone, setPhone] = useState(userObj?.phonenumber);
	const [load, setLoad] = useState(false);
	const [phoneErr, setPhoneErr] = useState("");
	const { Axios } = useRequest();
	const [img, setImg] = useState<any>(imgUrl + "/" + userObj?.profilePhoto);
	// api errors
	const [errors, setErrors] = useState<any>({});

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
            console.log(e.target.files[0]);
            var img = new Image();   
				getBase64(e.target.files[0])
					.then((res) => {
						setImg(res);
					})
					.catch();
				break;
			default:
				break;
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoad(true);
		var updateObj = {};
      {/*......................................
         *Only push image when a new img has been uploaded
      ......................................*/}
		if (img.length > 60)
			updateObj = {
				firstName: fname,
				lastName: lname,
				email: email,
				bio: bio,
				userName: userName,
				profilePhoto: img,
				phonenumber: phone,
			};
		else {
			updateObj = {
				firstName: fname,
				lastName: lname,
				email: email,
				bio: bio,
				userName: userName,
				phonenumber: phone,
			};
		}
		try {
			let { data } = await Axios.put(`/users/${userObj?._id}`, updateObj);
			Swal.fire({
				icon: "success",
				text: "Your profile has been updated",
				timer: 1500,
			});
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
		} catch (error: any) {
			let msg = error.response.data.split(":");
			setLoad(false);
			Swal.fire({
				icon: "error",
				text: msg[2],
			});
		}
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
		load,
		errors,
		phone,
		phoneErr,
		handlePhoneChange,
		handleSubmit,
		confirmPassword,
		img,
		setImg,
	};
};

export default useEditProfile;
