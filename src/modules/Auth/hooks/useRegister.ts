import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Axios } from "shared/http/Http";
import { emailRegex, sixChars } from "shared/regEx/regEx";
import { User } from "shared/Store/User";
import { getBase64 } from "shared/toBase64/encode";

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
	const [phone, setPhone] = useState("");
	const [load, setLoad] = useState(false);
	const [phoneErr, setPhoneErr] = useState("");
	const [img, setImg] = useState<any>("");
	// api errors
	const [errors, setErrors] = useState<any>({});
	const setUser = useSetRecoilState(User);

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
			case "confirm":
				if (e.target.value !== password)
					setPassError("Password and Confirm passwords don't match");

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
						setImg(res);
					})
					.catch((err) => console.log(err));
				break;
			default:
				break;
		}
	};

	const register = async (e: any) => {  
		e.preventDefault();
		setLoad(true);
		setErrors({});
		let newUser = {
			email: email,
			password: password,
			firstName: fname,
			lastName: lname,
			userName: userName,
			bio: bio,
			phonenumber: phone,
			profilePhoto: img,
		};

		try {
			const { data } = await Axios.post("/register", newUser);
			setUser(data);
			setLoad(false);
			setErrors("");
		} catch (e: any) {
			if (e.response.data?.code === 11000) {
				setMailError("This email is already registered");
			}
			setErrors(e?.response?.data);
			setLoad(false);
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
		register,
		load,
		errors,
		phone,
		phoneErr,
		handlePhoneChange,
		confirmPassword,
      img
	};
};

export default useRegister;
