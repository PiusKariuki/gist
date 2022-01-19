import { atom, selector } from "recoil";
import axios from "axios";
import { Axios } from "shared/http/Http";

export const store = atom({
	key: "store",
	default: [{ tkn: "" }, { email: "" }, { department: "" }],
});

export const login = selector({
	key: "login",
	get: async () => {
		const response = await Axios.post("/register");
	},
});
