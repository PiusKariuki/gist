import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Axios } from "shared/http/Http";
import { emailRegex} from "shared/regEx/regEx";
import { useNavigate } from "react-router-dom";
import { user } from "shared/recoil/user";


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

   let navigate = useNavigate();

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
         navigate("/");
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
