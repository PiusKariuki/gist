import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Axios } from "shared/http/Http";
import { user } from "../../../shared/store/store";
import { emailRegex, sixChars } from "shared/regEx/regEx";

const useRegister = () => {
	const [mailError, setMailError] = useState("");
	const [passError, setPassError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [dept, setDept] = useState("dairies");
	const [title, setTitle] = useState("");
	const [pic, setPic] = useState("");
   const [load,setLoad] = useState(false);
   // api errors
   const [errors,setErrors] = useState<any>({});
	const setUser = useSetRecoilState(user);


	const handleChange = (e: any) => {
      setErrors("");
		switch (e.target.name) {
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
			case "dept":
				setDept(e.target.value);
				break;
			case "title":
				setTitle(e.target.value);
				break;
			case "pic":
				setPic(e.target.files[0]);
				break;
		}
	};

	const register = async (e: any) => {
		e.preventDefault();
		setLoad(true);
		setErrors({});
          const formData = new FormData();
					formData.append("firstName", fname);
					formData.append("lastName", lname);
					formData.append("email", email);
					formData.append("profilePicture", pic);
					formData.append("title", title);
					formData.append("password", password);
					formData.append("department", dept);

		try {
			const { data } = await Axios.post("/register",formData);
			setUser(data);
			setLoad(false);
			setErrors("");
		} catch (e: any) {
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
		dept,
		title,
		pic,
		handleChange,
      register,
      load,
      errors
	};
};

export default useRegister;
