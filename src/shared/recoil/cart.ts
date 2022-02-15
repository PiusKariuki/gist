import { atom, selector } from "recoil";

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

export const cartAtom = atom({
	key: "cartAtom",
	default: [],
	effects_UNSTABLE: [
		localStorageEffect("gist-cart"),
		// ({ onSet }) => onSet((newItem) => console.log("cart", newItem)),
	],
});

export const cartOpen = atom({
	key: "cartOpen",
	default: false,
});

export const cartSelector = selector({
	key: "cartSelector",
	get: ({ get }) => {
		const arr = get(cartAtom);
		let total = 0;
		arr.length > 0 &&
			arr.forEach((item: any) => (total += item.price * item.quantity));
		return total;
	},
});
