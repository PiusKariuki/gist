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
		localStorageEffect("gist-cart-items"),
		({ onSet }) => onSet((newUser) => console.log("cart", newUser)),
	],
});

export const cartSelector = selector({
	key: "cartSelector",
	get: ({ get }) => {
		const array = get(cartAtom);
		let total = 0;
		array.forEach((item: any) => (total += item.price));
      return total;
	},
});
