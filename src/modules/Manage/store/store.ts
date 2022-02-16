import { atom } from "recoil";

export const productOpen = atom({
	key: "productOpen",
	default: false,
});

export const deleteOpen = atom({
	key: "deleteOpen",
	default: false,
});
