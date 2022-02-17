import { atom } from "recoil";

export const billingOpen = atom({
	key: "billingOpen",
	default: false,
});

export const shippingOpen = atom({
	key: "shippingOpen",
	default: false,
});
