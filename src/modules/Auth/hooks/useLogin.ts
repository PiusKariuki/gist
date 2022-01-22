import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Axios } from "shared/http/Http";
import { user } from "../../../shared/store/store";
import { emailRegex, sixChars} from "shared/regEx/regEx";

const useLogin = () => {
	const setUser = useSetRecoilState(user);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [load, setLoad] = useState(false);
	// api errors
	const [errors, setErrors] = useState<any>({});

	// regex errors
	const [passErrors, setPassErrors] = useState("");
	const [mailErrors, setMailErrors] = useState("");

	const handleChange = (e: any) => {
		setErrors("");
		switch (e.target.name) {
			case "email":
				setEmail(e.target.value);
				let mail = e.target.value.toLowerCase();
				if (mail.match(emailRegex)) setMailErrors("");
				else {
					setMailErrors("Invalid email");
				}
				break;
			case "pass":
				setPassword(e.target.value);
				if (!e.target.value.match(sixChars)) {
					setPassErrors("Password should be atleast six characters long");
				} else {
					setPassErrors("");
				}
				break;
		}
	};

	const login = async (e: any) => {
		e.preventDefault();
		setLoad(true);
		setErrors({});
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
			setLoad(false);
		}
	};

	return {
		errors,
		email,
		password,
		handleChange,
		login,
		load,
		mailErrors,
		passErrors,
	};
};
export default useLogin;
