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
	const uploadToFireBase = async (
		img: any,
		folder: string,
		callback: any
	): Promise<any> => {
		//create a storage ref
		const storageRef = ref(storage, `/${folder}/${img.name}`);
		const uploadTask = uploadBytesResumable(storageRef, img);

		try {
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					let snap = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					);

					Swal.fire({
						icon: "info",
						title: "Uploading image...",
						titleText: `Uploading image. Please wait`,
					});
					if (snap === 100) Swal.close();
				},
				() =>
					Swal.fire({
						icon: "error",
						text: "error uploading profile photo",
					}),
				async () => {
					try {
						let url = await getDownloadURL(uploadTask.snapshot.ref);
						return callback(url);
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

	return { uploadToFireBase };
};

export default useFirebase;
