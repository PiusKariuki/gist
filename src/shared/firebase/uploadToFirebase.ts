import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "shared/firebase";
import Swal from "sweetalert2";

const uploadToFireBase = async (img: any, folder: string) => {
	var firebaseUrl = "";
	//create a storage ref
	const storageRef = ref(storage, `/${folder}/${img.name}`);
	const uploadTask = uploadBytesResumable(storageRef, img);

	uploadTask.on(
		"state_changed",
		(snapshot) => {
			const progress = Math.round(
				(snapshot.bytesTransferred / snapshot.totalBytes) * 100
			);
		},
		(err) =>
			Swal.fire({
				icon: "error",
				text: "error uploading profile photo",
			})
		// async () => {
		// 	let url = await getDownloadURL(uploadTask.snapshot.ref);
		//    console.log(url);

		// 	return url;
		// }
	);

	let uri = await getDownloadURL(uploadTask.snapshot.ref);
	return uri;
};

export default uploadToFireBase;
