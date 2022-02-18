import { atom } from "recoil";

const localStorageEffect =
	(key: string) =>
	({ setSelf, onSet }: { setSelf: any; onSet: any }) => {
		const savedValue: any = localStorage.getItem(key);
		if (savedValue?.length > 0) setSelf(JSON.parse(savedValue));
		onSet((newValue: any, _: any, isReset: any) => {
			isReset
				? localStorage.removeItem(key)
				: localStorage.setItem(key, JSON.stringify(newValue));
		});
	};

export const user = atom({
	key: "userObj",
	default: {},
	effects_UNSTABLE: [
		localStorageEffect("gist_user"),
		// ({ onSet }) => onSet((newUser) => console.log("current user", newUser)),
	],
});
