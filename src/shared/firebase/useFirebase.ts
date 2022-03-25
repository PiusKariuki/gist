import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { updateDoc, doc } from "firebase/firestore";
import { storage } from "shared/firebase";
import Swal from "sweetalert2";

const useFirebase = () => {
	/**
	 * Description
	 * @param {any} img
	 * @param {string} folder
	 * @param {any} callback
	 * @returns {any}
	 */
	const uploadToFireBase = async (img: any, folder: string, callback: any) => {
		//create a storage ref
		const storageRef = ref(storage, `/${folder}/${img.name}`);
		const uploadTask = uploadBytesResumable(storageRef, img);

		try {
			await uploadTask.on(
				"state_changed",
				(snapshot) => {
					Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
				},
				(err) =>
					Swal.fire({
						icon: "error",
						text: "error uploading profile photo",
					}),
				async () => {
					try {
						let url = await getDownloadURL(uploadTask.snapshot.ref);
						callback(url);
					} catch (error) {}
				}
			);
		} catch (error) {
			Swal.fire({
				icon: "error",
				text: "error uploading image",
			});
		}
	};

	/**
	 * Description
	 * @param {any} img
	 * @param {string} folder
	 * @param {any} callback
	 * @returns {any}
	 */
	const uploadArrayToFireBase = async (
		img: [any],
		folder: string,
		callback: any
	) => {
		try {
			let uris: Array<string> = [];
			let urls: any =  img?.map(async (item: any) => {
				//create a storage ref
				const storageRef = ref(storage, `/${folder}/${item?.name}`);
				const uploadTask = uploadBytesResumable(storageRef, item);
				uploadTask.on(
					"state_changed",
					(snapshot) => {
						Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
					},
					(err) =>
						Swal.fire({
							icon: "error",
							text: "error uploading profile photo",
						}),
					async () => {
						try {
							let url = await getDownloadURL(uploadTask.snapshot.ref);
							uris.push(url);
							return url;
						} catch (error) {
							Swal.fire({
								icon: "error",
								text: "error uploading image",
							});
						}
					}
				);
				return uris;
			});
			callback(uris);
		} catch (error) {
			Swal.fire({
				icon: "error",
				text: "error uploading images",
			});
		}
	};

	return { uploadToFireBase, uploadArrayToFireBase };
};

export default useFirebase;
