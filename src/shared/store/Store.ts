import { atom, AtomEffect } from "recoil";

interface Props {
	setSelf: Function;
	onSet: Function;
}

const localStorageEffect =
	(key: string) =>
	({ setSelf, onSet }: { setSelf: any; onSet: any }) => {
		const savedValue = localStorage.getItem(key);
		if (savedValue !== null) setSelf(JSON.parse(savedValue));
		onSet((newValue: any, _: any, isReset: any) => {
			isReset
				? localStorage.removeItem(key)
				: localStorage.setItem(key, JSON.stringify(newValue));
		});
	};

export const user = atom({
	key: "user",
	default: {},
	effects_UNSTABLE: [
		localStorageEffect("current_user"),
		({ onSet }) => onSet((newUser) => console.log("current user", newUser)),
	],
});
