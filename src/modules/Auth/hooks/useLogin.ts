import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Axios } from "shared/http/Http";
import { user } from "../store/store";
import Swal from "sweetalert2";

const useLogin = () => {
	const setUser = useSetRecoilState(user);
	const [errors, setErrors] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [load, setLoad] = useState(false);
    console.log(errors);
    

	const handleChange = (e: any) => {
        setErrors("");
		switch (e.target.name) {
			case "email":
				setEmail(e.target.value);
			case "pass":
				setPassword(e.target.value);
		}
	};

	const login = async (e: any) => {
		e.preventDefault();
		setLoad(true);
		try {
			const { data } = await Axios.post("/login", {
				email: email,
				password: password,
			});
			setUser(data);
			setLoad(false);
            setErrors("");
		} catch (e: any) {
			setErrors(e?.response?.data);
            setLoad(false);;
		}
	};

	return { errors, email, password, handleChange, login,load };
};
export default useLogin;
