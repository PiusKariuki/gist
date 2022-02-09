import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { user } from "../../../shared/store/Store";
import { emailRegex, sixChars } from "shared/regEx/regEx";
import Swal from "sweetalert2";
import useRequest from "shared/http/useRequest";

const useEditProfile = () => {
	const setUser = useSetRecoilState(user);
	const userObj = useRecoilValue<any>(user);

	const [mailError, setMailError] = useState("");
	const [passError, setPassError] = useState("");
	const [email, setEmail] = useState(userObj?.email);
	const [password, setPassword] = useState("");
	const [fname, setFname] = useState(userObj?.firstName);
	const [lname, setLname] = useState(userObj?.lastName);
	const [bio, setBio] = useState(userObj?.bio);
	const [userName, setUserName] = useState(userObj?.userName);
	const [phone, setPhone] = useState(userObj?.phoneNumber);
	const [load, setLoad] = useState(false);
	const [phoneErr, setPhoneErr] = useState("");
	const { Axios } = useRequest();
	// api errors
	const [errors, setErrors] = useState<any>({});

	const handlePhoneChange = (e: string) => {
		setPhone(e);
		if (e.length < 5) setPhoneErr("please enter a valid phone number");
		else setPhoneErr("");
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
			default:
				break;
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoad(true);
		try {
			let { data } = await Axios.put(`/users/${userObj?._id}`, {
				firstName: fname,
				lastName: lname,
				email: email,
				bio: bio,
				userName: userName,
			});
			Swal.fire({
				icon: "success",
				text: "Your profile has been updated",
				timer: 1500,
			});
			setUser(data);
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
	};
};

export default useEditProfile;
